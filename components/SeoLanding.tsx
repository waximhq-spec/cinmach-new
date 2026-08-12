"use client";

import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionLabel from "@/components/SectionLabel";
import CTASection from "@/components/CTASection";
import BookCallButton from "@/components/BookCallButton";
import Reveal from "@/components/Reveal";
import { stats, SeoLandingPage } from "@/lib/content";

export default function SeoLanding({ page }: { page: SeoLandingPage }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHero kicker={page.kicker} title={page.h1} subtitle={page.intro} />

      <section className="bg-white-primary">
        <div className="container-cin py-16 md:py-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-light mb-20">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="bg-white-primary p-6">
                <div className="text-h2 text-red">{s.value}</div>
                <div className="text-caption text-ink-muted mt-2">{s.label}</div>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <SectionLabel number="01" onLight>
              Why Cinmach
            </SectionLabel>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {page.valueProps.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="border border-border-light p-8 bg-white-secondary">
                <h3 className="text-h4 text-ink">{v.title}</h3>
                <p className="text-body-sm text-ink-muted mt-4">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black-primary">
        <div className="container-cin py-16 md:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            <Reveal className="lg:col-span-5">
              <SectionLabel number="02">Use Cases</SectionLabel>
              <h2 className="text-h1 mt-4 text-white-primary">
                Where this <span className="text-red">fits.</span>
              </h2>
              <div className="mt-8">
                <BookCallButton />
              </div>
            </Reveal>
            <Reveal delay={100} className="lg:col-span-7">
              <ul className="flex flex-col divide-y divide-border-dark">
                {page.useCases.map((u) => (
                  <li key={u} className="py-5 flex items-center gap-4 text-body text-white-primary">
                    <span className="h-1.5 w-1.5 shrink-0 bg-red" />
                    {u}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-white-primary">
        <div className="container-cin py-16 md:py-20">
          <Reveal>
            <SectionLabel number="03" onLight>
              FAQ
            </SectionLabel>
          </Reveal>
          <div className="mt-8 max-w-3xl">
            {page.faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="border-b border-border-light">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left"
                  >
                    <span className="text-h4 text-ink">{faq.question}</span>
                    <span
                      className={`flex h-8 w-8 shrink-0 items-center justify-center border border-border-light transition-transform duration-300 ${
                        isOpen ? "rotate-45 border-red" : ""
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M6 0V12M0 6H12" stroke={isOpen ? "#C81E3A" : "#6B6B70"} strokeWidth="1.2" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-body text-ink-muted pb-6 max-w-xl">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
