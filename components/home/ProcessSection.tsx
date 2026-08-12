"use client";

import { useEffect, useRef } from "react";
import SectionHeader from "@/components/SectionHeader";
import { process } from "@/lib/content";

/**
 * Two-axis scroll section -- one DOM, two mechanics.
 *
 * Desktop (lg+): pure CSS. The black left rail is `position: sticky` inside a
 * grid item that stretches to the full height of the right column, so it stays
 * anchored while the white column -- one full screen per step -- scrolls past.
 * No JS runs at this breakpoint at all.
 *
 * Mobile/tablet: the stage pins and the step track slides sideways as the page
 * scrolls down. Performance notes, because this runs on every frame of a touch
 * scroll:
 *   - The transform is written straight to the node. Driving it through React
 *     state re-rendered the whole subtree ~60x/sec and was visibly janky.
 *   - Every layout-reading measurement (offsets, scrollWidth) is cached and
 *     only recomputed on resize, so a scroll frame does pure arithmetic plus
 *     one style write -- no forced synchronous layout.
 *   - translate3d keeps the track on the compositor, which is what makes it
 *     smooth on iOS.
 *   - The listener is passive so Safari never waits on us to scroll.
 * Short viewports and prefers-reduced-motion opt out entirely (see globals.css)
 * and the track falls back to a plain vertical stack.
 */
export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const stage = stageRef.current;
    const track = trackRef.current;
    if (!section || !stage || !track) return;

    const isDesktop = window.matchMedia("(min-width: 1024px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isShort = window.matchMedia("(max-height: 620px)");

    // Cached geometry -- refreshed on resize, never read during a scroll frame.
    let sectionTop = 0;
    let range = 0;
    let travel = 0;
    let active = false;
    let lastX = -1;
    let frame = 0;

    const apply = () => {
      frame = 0;
      if (!active) return;
      const progress = Math.min(1, Math.max(0, (window.scrollY - sectionTop) / range));
      // Round to a tenth of a pixel: below that the paint is identical, so this
      // skips a good share of style writes on slow scrolls.
      const x = Math.round(progress * travel * 10) / 10;
      if (x === lastX) return;
      lastX = x;
      track.style.transform = `translate3d(${-x}px, 0, 0)`;
    };

    const measure = () => {
      active = !isDesktop.matches && !reduceMotion.matches && !isShort.matches;
      if (!active) {
        track.style.transform = "";
        lastX = -1;
        return;
      }
      sectionTop = section.getBoundingClientRect().top + window.scrollY;
      range = section.offsetHeight - stage.offsetHeight;
      travel = track.scrollWidth - track.clientWidth;
      if (range <= 0 || travel <= 0) {
        active = false;
        track.style.transform = "";
        lastX = -1;
        return;
      }
      lastX = -1;
      apply();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(apply);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    isDesktop.addEventListener("change", measure);
    reduceMotion.addEventListener("change", measure);
    isShort.addEventListener("change", measure);

    // Content above this section (images, fonts) can shift its offset after
    // mount -- re-cache when the document actually changes size.
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      isDesktop.removeEventListener("change", measure);
      reduceMotion.removeEventListener("change", measure);
      isShort.removeEventListener("change", measure);
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      data-nav-theme="split"
      className="process-section h-[280vh] bg-black-primary lg:h-auto"
    >
      {/* Pinned stage on mobile; plain 5/7 grid on desktop */}
      <div
        ref={stageRef}
        className="process-stage sticky top-0 flex h-svh flex-col overflow-hidden lg:static lg:grid lg:h-auto lg:grid-cols-12 lg:overflow-visible"
      >
        {/* Anchored heading */}
        <div className="shrink-0 lg:col-span-5">
          <div className="flex flex-col justify-center px-5 pt-24 pb-8 md:px-10 lg:sticky lg:top-0 lg:h-screen lg:py-16 xl:px-16">
            <SectionHeader
              index="(04)"
              label="Process"
              title={<>How we <span className="text-red">scale you.</span></>}
              intro="Four steps, repeated on every project — from the first conversation to the final cinematic export."
            />
          </div>
        </div>

        {/* Steps -- horizontal track on mobile, vertical column on desktop */}
        <div className="min-h-0 flex-1 overflow-hidden border-y border-border-light bg-white-primary lg:col-span-7 lg:flex-none lg:overflow-visible">
          <div ref={trackRef} className="process-track flex h-full lg:h-auto lg:flex-col">
            {/* Lead-in card -- mobile only. Arrow points down to match the
                scrolling gesture that actually drives the track, even
                though the cards themselves move sideways. */}
            <div className="process-card process-intro flex w-[62vw] shrink-0 flex-col justify-center border-r border-border-light px-5 md:px-10 lg:hidden">
              <span className="process-arrow flex h-14 w-14 items-center justify-center rounded-full border border-border-light text-h4 text-red">
                ↓
              </span>
              <span className="text-label text-gray mt-6">Keep scrolling</span>
            </div>

            {process.map((step) => (
              <article
                key={step.step}
                className="process-card flex w-[82vw] shrink-0 flex-col justify-center border-r border-border-light px-5 py-10 last:border-r-0 md:px-10 lg:w-auto lg:min-h-screen lg:shrink lg:border-r-0 lg:border-t lg:py-24 lg:first:border-t-0 xl:px-16"
              >
                <span className="text-mono text-red">{step.step}</span>
                <h3 className="text-h1 text-ink mt-6">{step.title}</h3>
                <p className="text-body text-ink-muted mt-6 max-w-xl">{step.description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
