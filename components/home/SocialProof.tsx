"use client";

import { useEffect, useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { testimonials } from "@/lib/content";

export default function SocialProof() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % testimonials.length), 5500);
    return () => clearInterval(id);
  }, []);

  const t = testimonials[index];

  return (
    <section className="bg-black-primary">
      <div className="container-cin py-24 md:py-36">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-14">
          <SectionHeader index="(06)" label="Social Proof" title={<>Trusted by <span className="text-red">the ambitious.</span></>} />
          <Reveal className="flex gap-10">
            <div>
              <div className="text-h1 text-red">+40%</div>
              <div className="text-mono text-gray-light mt-1.5">Brand Growth</div>
            </div>
            <div>
              <div className="text-h1 text-white-primary">100%</div>
              <div className="text-mono text-gray-light mt-1.5">Client Trust</div>
            </div>
          </Reveal>
        </div>

        <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-8 border-t border-border-dark pt-12">
          <div className="lg:col-span-2">
            <svg width="40" height="30" viewBox="0 0 32 24" fill="none" aria-hidden="true">
              <path
                d="M0 24V14.4C0 6.4 4.8 1.2 12.8 0L14.4 3.2C9.6 4.8 7.2 8 7.2 12.8H12.8V24H0ZM17.6 24V14.4C17.6 6.4 22.4 1.2 30.4 0L32 3.2C27.2 4.8 24.8 8 24.8 12.8H30.4V24H17.6Z"
                fill="#C81E3A"
              />
            </svg>
          </div>
          <blockquote key={index} className="lg:col-span-10 fade-in">
            <p className="font-editorial text-h2 text-white-primary max-w-4xl">
              {t.quote}
            </p>
            <footer className="mt-8 flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <span className="h-px w-8 bg-red" />
                <div>
                  <p className="text-body-sm text-white-primary">{t.name}</p>
                  <p className="text-mono text-gray mt-0.5">{t.title}</p>
                </div>
              </div>
              <div className="flex gap-1.5">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    aria-label={`Show testimonial ${i + 1}`}
                    onClick={() => setIndex(i)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === index ? "w-6 bg-red" : "w-1.5 bg-border-dark"
                    }`}
                  />
                ))}
              </div>
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  );
}
