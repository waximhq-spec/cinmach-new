"use client";

import { useState } from "react";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Reveal from "@/components/Reveal";
import { projects, Project } from "@/lib/content";

export default function FeaturedWork() {
  const [active, setActive] = useState<Project | null>(null);
  const featured = projects.slice(0, 6);
  const track = [...featured, ...featured];

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

      {/* Full-bleed two-up marquee -- no gap/padding around cards, paced right-to-left scroll */}
      <Reveal variant="clip">
        <div className="work-marquee" style={{ ["--work-marquee-duration" as string]: "24s" }}>
          <div className="work-marquee__track">
            {track.map((p, i) => {
              const duplicate = i >= featured.length;
              return (
                <button
                  key={`${p.slug}-${i}`}
                  onClick={() => setActive(p)}
                  aria-hidden={duplicate}
                  tabIndex={duplicate ? -1 : 0}
                  className="work-marquee__card group relative h-[420px] sm:h-[480px] md:h-[560px] lg:h-[620px] text-left overflow-hidden"
                >
                  <div className="absolute inset-0">
                    <MediaPlaceholder
                      kind={p.media}
                      className="h-full w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      corners={false}
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black-primary/90 via-black-primary/5 to-transparent" />

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
