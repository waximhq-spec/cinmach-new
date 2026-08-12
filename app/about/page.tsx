import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import CTASection from "@/components/CTASection";
import Marquee from "@/components/Marquee";
import Reveal from "@/components/Reveal";
import { stats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "The story behind Cinmach Productions -- a cinematic content agency built on results, from one camera in Bahrain to 40+ brands served across the GCC.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        kicker="About Us"
        index="(A)"
        title={<>A production company built on <span className="text-red">results.</span></>}
        subtitle="We don't just make things look good — we make them work for your business."
      />

      <Marquee items={["Cinematic", "Editorial", "Results-Driven", "Bahrain-Born"]} tone="red" duration={30} />

      <section className="bg-black-primary">
        <div className="container-cin py-24 md:py-32">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <Reveal variant="clip" className="lg:col-span-6">
              <MediaPlaceholder label="Our Story" kind="video" className="aspect-[4/5]" />
            </Reveal>
            <div className="lg:col-span-6">
              <SectionHeader index="(01)" label="Our Story" title="We started with one camera." />
              <div className="mt-6 flex flex-col gap-4 text-body text-gray-light">
                <p>
                  Cinmach Productions began the way most great agencies do — with one camera, one client, and a
                  conviction that Bahrain's restaurants, hotels, and brands deserved content that actually moved
                  the needle.
                </p>
                <p>
                  What started as a single production has grown into a full creative team serving over 40
                  restaurants and brands across six industries. Our philosophy hasn't changed: quality over
                  quantity, results over vanity metrics, and direct communication over layers of account
                  management.
                </p>
                <p>
                  Today we operate as a cinematic content agency and creative marketing company based in Manama,
                  partnering with ambitious brands across Bahrain and the wider GCC region.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white-primary border-y border-border-light">
        <div className="container-cin py-24 md:py-32">
          <SectionHeader
            index="(02)"
            label="By The Numbers"
            title={<>Results, not <span className="text-red">promises.</span></>}
            onLight
            className="mb-16"
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border-light">
            {stats.map((s, i) => (
              <Reveal key={s.label} delay={i * 80} className="bg-white-primary p-8">
                <div className="text-display text-4xl sm:text-5xl text-red">{s.value}</div>
                <div className="text-body-sm text-ink-muted mt-3">{s.label}</div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
