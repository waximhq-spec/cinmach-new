"use client";

import { useEffect, useRef, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import { process } from "@/lib/content";

/**
 * Two-axis scroll section -- one DOM, two mechanics.
 *
 * Desktop (lg+): pure CSS. The black left rail is `position: sticky` inside a
 * grid item that stretches to the full height of the right column, so it stays
 * anchored while the white column -- one full screen per step -- scrolls past.
 * The right column gives the section its height, so the rail releases on its
 * own once the last step is read. No JS involved at this breakpoint.
 *
 * Mobile/tablet: the whole stage pins instead, and the steps run in a
 * horizontal track that translates left as the page scrolls down. The offset
 * is derived from the section's own position, so it self-corrects against the
 * real measured geometry (mobile URL-bar resizes included) rather than
 * assuming a fixed viewport height. CSS cannot express this portably --
 * `animation-timeline: scroll()` still isn't safe on iOS Safari -- so it runs
 * on one passive, rAF-throttled scroll handler that no-ops on desktop and
 * under `prefers-reduced-motion`.
 */
export default function ProcessSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;

    const update = () => {
      frame = 0;
      const section = sectionRef.current;
      const stage = stageRef.current;
      const track = trackRef.current;
      if (!section || !stage || !track) return;

      // Desktop keeps the CSS-only vertical mechanic; reduced motion opts out.
      if (isDesktop.matches || reduceMotion.matches) {
        setOffset(0);
        return;
      }

      const range = section.offsetHeight - stage.offsetHeight;
      const travel = track.scrollWidth - track.clientWidth;
      if (range <= 0 || travel <= 0) {
        setOffset(0);
        return;
      }

      const progress = Math.min(1, Math.max(0, -section.getBoundingClientRect().top / range));
      setOffset(progress * travel);
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    isDesktop.addEventListener("change", onScroll);
    reduceMotion.addEventListener("change", onScroll);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      isDesktop.removeEventListener("change", onScroll);
      reduceMotion.removeEventListener("change", onScroll);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="process-section h-[250vh] bg-black-primary lg:h-auto"
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
          <div
            ref={trackRef}
            className="process-track flex h-full lg:h-auto lg:flex-col"
            style={{
              transform: offset ? `translate3d(-${offset}px, 0, 0)` : undefined,
            }}
          >
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
