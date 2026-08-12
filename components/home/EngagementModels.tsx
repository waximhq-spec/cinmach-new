"use client";

import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { useProjectModal } from "@/components/ModalContext";
import { engagementModels } from "@/lib/content";

export default function EngagementModels() {
  const { openModal } = useProjectModal();

  return (
    <section className="bg-white-primary border-y border-border-light">
      <div className="container-cin py-24 md:py-36">
        <SectionHeader
          index="(05)"
          label="How We Work"
          title={<>Pick your <span className="text-red">engagement.</span></>}
          onLight
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {engagementModels.map((m, i) => (
            <Reveal
              key={m.number}
              delay={i * 100}
              className="group flex flex-col justify-between gap-16 border border-border-light bg-white-secondary p-8 md:p-10 transition-transform duration-500 hover:-translate-y-1.5"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="text-mono text-red">{m.number}</span>
                  <span className="h-8 w-8 flex items-center justify-center rounded-full border border-border-light text-ink opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:border-red">
                    ↗
                  </span>
                </div>
                <h3 className="text-h3 text-ink mt-8">{m.title}</h3>
                <p className="text-body-sm text-ink-muted mt-4">{m.description}</p>
              </div>
              <button type="button" onClick={openModal} className="link-red text-body-sm text-left w-fit">
                {m.cta} →
              </button>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
