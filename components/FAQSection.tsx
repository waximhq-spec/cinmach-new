"use client";

import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/content";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-white-primary border-t border-border-light">
      <div className="container-cin py-24 md:py-36">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <SectionHeader
              index="(07)"
              label="FAQ"
              title={<>Questions, <span className="text-red">answered.</span></>}
              intro="Everything you need to know before booking a strategy call."
              onLight
            />
          </div>

          <Reveal delay={100} className="lg:col-span-8 flex flex-col">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <div key={faq.question} className="border-b border-border-light first:border-t">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <span className="flex items-baseline gap-4">
                      <span className="text-mono text-red">{String(i + 1).padStart(2, "0")}</span>
                      <span className="text-h4 text-ink">{faq.question}</span>
                    </span>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen ? "rotate-45 border-red bg-red" : "border-border-light group-hover:border-ink"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                        <path d="M6 0V12M0 6H12" stroke={isOpen ? "#F5F3F0" : "#141414"} strokeWidth="1.3" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-body text-ink-muted pb-7 pl-9 max-w-xl">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
