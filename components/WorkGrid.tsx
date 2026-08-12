"use client";

import { useState } from "react";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import Reveal from "@/components/Reveal";
import { projects, Project } from "@/lib/content";

const TABS = ["All", "Videos", "Photos"] as const;

export default function WorkGrid() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("All");
  const [active, setActive] = useState<Project | null>(null);

  const filtered = projects.filter((p) => {
    if (tab === "Videos") return p.media === "video";
    if (tab === "Photos") return p.media === "photo";
    return true;
  });

  return (
    <section className="bg-black-primary">
      <div className="container-cin py-16 md:py-24">
        <div className="flex items-center justify-between border-b border-border-dark pb-6 mb-12">
          <div className="flex gap-2">
            {TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`text-label px-4 py-2.5 rounded-full border transition-colors duration-200 ${
                  tab === t
                    ? "border-red text-white-primary bg-red/10"
                    : "border-border-dark text-gray-light hover:border-gray"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <span className="text-mono text-gray hidden sm:block">
            {String(filtered.length).padStart(2, "0")} Projects
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
          {filtered.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 3) * 100}>
              <button onClick={() => setActive(p)} className="group text-left w-full">
                <MediaPlaceholder
                  kind={p.media}
                  label={p.client}
                  index={String(i + 1).padStart(2, "0")}
                  className="aspect-[4/5] transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                />
                <div className="mt-5 flex items-start justify-between gap-4 border-t border-border-dark pt-4">
                  <div>
                    <p className="text-h4 text-white-primary group-hover:text-red transition-colors">{p.client}</p>
                    <p className="text-mono text-gray mt-1.5">{p.location}</p>
                  </div>
                  <span className="text-mono text-red shrink-0">{p.year}</span>
                </div>
                <div className="flex flex-wrap gap-2 mt-3">
                  {p.tags.slice(0, 3).map((t) => (
                    <span key={t} className="text-caption text-gray-light border border-border-dark px-2.5 py-1">
                      {t}
                    </span>
                  ))}
                </div>
              </button>
            </Reveal>
          ))}
        </div>
      </div>

      {active && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <button
            aria-label="Close"
            onClick={() => setActive(null)}
            className="modal-backdrop absolute inset-0 bg-black-primary/90 backdrop-blur-sm"
          />
          <div className="modal-pop relative w-full max-w-3xl bg-black-secondary border border-border-dark max-h-[90vh] overflow-y-auto">
            <MediaPlaceholder kind={active.media} label={active.client} className="aspect-video" />
            <div className="p-8">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-label text-red">{active.category}</span>
                <span className="text-mono text-gray">{active.year}</span>
              </div>
              <h3 className="text-h3 text-white-primary">{active.client}</h3>
              <p className="text-body text-gray-light mt-4">{active.description}</p>
              <p className="text-mono text-gray mt-4">{active.location}</p>
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
              className="absolute top-4 right-4 flex h-9 w-9 items-center justify-center border border-border-dark bg-black-secondary text-white-primary hover:border-white-primary transition-colors"
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
