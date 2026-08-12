"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Reveal from "@/components/Reveal";
import { projects, Project } from "@/lib/content";

// Temporary placeholders until real project stills/video frames are supplied.
const PLACEHOLDER_IMAGES = [
  "https://images.pexels.com/photos/20245833/pexels-photo-20245833.jpeg",
  "https://images.pexels.com/photos/29488811/pexels-photo-29488811.jpeg",
  "https://images.pexels.com/photos/36913165/pexels-photo-36913165.jpeg",
  "https://images.pexels.com/photos/33459851/pexels-photo-33459851.jpeg",
  "https://images.pexels.com/photos/11647421/pexels-photo-11647421.jpeg",
  "https://images.pexels.com/photos/6658657/pexels-photo-6658657.jpeg",
];
// Deliberately non-sequential so neighbouring cards don't share a look.
const SHUFFLE_ORDER = [3, 0, 5, 1, 4, 2];

const AUTO_ADVANCE_MS = 5000;
const TRANSITION_MS = 900;

export default function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.slice(0, 6);
  const track = [...featured, ...featured];

  const imageFor = (slug: string) => {
    const idx = featured.findIndex((f) => f.slug === slug);
    return PLACEHOLDER_IMAGES[SHUFFLE_ORDER[idx % SHUFFLE_ORDER.length]];
  };

  const trackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [index, setIndex] = useState(0);
  const [smooth, setSmooth] = useState(true);
  const paused = active !== null;

  // Guards the loop-reset so a tick can never advance past the duplicated
  // set while a reset is already pending -- belt-and-braces against the
  // interval firing before the previous slide's transition has resolved.
  const pendingResetRef = useRef(false);
  const resetTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Measure the rendered card width (1-up on mobile, 2-up from md up) so the
  // slide offset always matches the real layout, no matter the breakpoint.
  useEffect(() => {
    const measure = () => {
      const first = trackRef.current?.firstElementChild as HTMLElement | null;
      if (first) setCardWidth(first.getBoundingClientRect().width);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Once we've slid a full lap past the real cards (into the duplicated
  // set), snap back to 0 with no transition -- the frame is identical, so
  // the loop reads as continuous. Idempotent: whichever of the transition's
  // "end" event or the fallback timer fires first wins.
  const resetToStart = () => {
    if (!pendingResetRef.current) return;
    pendingResetRef.current = false;
    if (resetTimeoutRef.current) {
      clearTimeout(resetTimeoutRef.current);
      resetTimeoutRef.current = null;
    }
    setSmooth(false);
    setIndex(0);
  };

  const handleTransitionEnd = (e: React.TransitionEvent) => {
    if (e.propertyName === "transform") resetToStart();
  };

  useEffect(() => {
    if (smooth) return;
    const raf = requestAnimationFrame(() => requestAnimationFrame(() => setSmooth(true)));
    return () => cancelAnimationFrame(raf);
  }, [smooth]);

  // Auto-advance one card at a time. Pauses only while a project modal is
  // open, and restarts the countdown ring fresh whenever it (re)arms.
  useEffect(() => {
    if (paused) return;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) return;

    const id = setInterval(() => {
      if (pendingResetRef.current) return;
      const first = trackRef.current?.firstElementChild as HTMLElement | null;
      if (first) setCardWidth(first.getBoundingClientRect().width);
      setIndex((i) => {
        const next = i + 1;
        if (next >= featured.length) {
          pendingResetRef.current = true;
          resetTimeoutRef.current = setTimeout(resetToStart, TRANSITION_MS + 150);
        }
        return next;
      });
    }, AUTO_ADVANCE_MS);

    return () => {
      clearInterval(id);
      if (resetTimeoutRef.current) clearTimeout(resetTimeoutRef.current);
    };
  }, [paused, featured.length]);

  return (
    <section className="bg-black-primary">
      <div className="container-cin pt-24 md:pt-36 pb-12 md:pb-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader index="(02)" label="Selected Work" title={<>Work that <span className="text-red">performs.</span></>} />
          <Reveal>
            <Link href="/work" className="btn btn-outline-dark">
              Full Archive →
            </Link>
          </Reveal>
        </div>
      </div>

      {/* Full-bleed marquee -- no gap/padding around cards. One card on
          mobile, two on tablet/desktop. Auto-advances a card at a time. */}
      <Reveal variant="clip">
        <div className="relative">
          <div className="overflow-hidden w-full">
            <div
              ref={trackRef}
              onTransitionEnd={handleTransitionEnd}
              className="flex"
              style={{
                transform: `translateX(-${index * cardWidth}px)`,
                transition: smooth ? "transform 900ms var(--ease-cinematic)" : "none",
              }}
            >
              {track.map((p, i) => {
                const duplicate = i >= featured.length;
                return (
                  <button
                    key={`${p.slug}-${i}`}
                    onClick={() => setActive(p)}
                    aria-hidden={duplicate}
                    tabIndex={duplicate ? -1 : 0}
                    className="group relative w-full md:w-1/2 shrink-0 h-[420px] sm:h-[480px] md:h-[560px] lg:h-[620px] text-left overflow-hidden"
                  >
                    <div className="grain absolute inset-0">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={imageFor(p.slug)}
                        alt=""
                        fetchPriority="low"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black-primary/90 via-black-primary/10 to-transparent" />

                    {p.media === "video" && (
                      <span className="absolute inset-0 flex items-center justify-center">
                        <span className="flex h-14 w-14 items-center justify-center rounded-full border border-white-primary/35 transition-transform duration-500 group-hover:scale-110">
                          <svg width="15" height="17" viewBox="0 0 16 18" fill="none" aria-hidden="true">
                            <path d="M1 1.5V16.5L15 9L1 1.5Z" stroke="#F5F3F0" strokeWidth="1.3" strokeLinejoin="round" />
                          </svg>
                        </span>
                      </span>
                    )}

                    <span className="absolute left-4 top-4 md:left-6 md:top-6 text-mono text-white-primary/70">
                      {String((i % featured.length) + 1).padStart(2, "0")}
                    </span>
                    <span className="absolute right-4 top-4 md:right-6 md:top-6 text-mono text-white-primary/70">
                      {p.year}
                    </span>

                    <div className="absolute inset-x-0 bottom-0 p-4 sm:p-6 md:p-8 flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <span className="text-label text-red">{p.category}</span>
                        <h3 className="text-h3 md:text-h2 text-white-primary mt-1.5 truncate">{p.client}</h3>
                      </div>
                      <span className="hidden sm:inline-flex shrink-0 h-10 w-10 items-center justify-center rounded-full border border-white-primary/25 text-white-primary opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-red">
                        ↗
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Small circular countdown -- signals more work is coming and when */}
          <div
            key={`${index}-${paused}`}
            aria-hidden="true"
            className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 z-20 md:right-5"
          >
            <svg width="38" height="38" viewBox="0 0 40 40" className="-rotate-90">
              <circle cx="20" cy="20" r="17" fill="rgba(10,10,11,0.55)" stroke="rgba(245,243,240,0.25)" strokeWidth="1.5" />
              <circle
                cx="20"
                cy="20"
                r="17"
                pathLength={100}
                fill="none"
                strokeWidth="2"
                strokeLinecap="round"
                strokeDasharray="100"
                className="work-timer-ring"
                style={{
                  stroke: "var(--color-red)",
                  animationDuration: `${AUTO_ADVANCE_MS}ms`,
                  animationPlayState: paused ? "paused" : "running",
                }}
              />
            </svg>
          </div>
        </div>
      </Reveal>

      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="modal-backdrop absolute inset-0 bg-black-primary/90 backdrop-blur-sm"
          />
          <div className="modal-pop relative w-full max-w-3xl bg-black-secondary border border-border-dark">
            <MediaPlaceholder kind={active.media} label={active.client} className="aspect-video" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-label text-red">{active.category}</span>
                <span className="text-mono text-gray">{active.year}</span>
              </div>
              <h3 className="text-h3 text-white-primary">{active.client}</h3>
              <p className="text-body text-gray-light mt-4">{active.description}</p>
              <div className="flex flex-wrap gap-2 mt-6">
                {active.tags.map((t) => (
                  <span key={t} className="text-caption text-gray-light border border-border-dark px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <button
              onClick={() => setActive(null)}
              aria-label="Close modal"
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-border-dark text-white-primary hover:border-white-primary transition-colors"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.4" />
              </svg>
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
