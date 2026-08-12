import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import CTASection from "@/components/CTASection";
import BookCallButton from "@/components/BookCallButton";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Content Production, Brand Identity, and Paid Advertising -- three disciplines built to turn attention into real customers for brands across Bahrain and the GCC.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        kicker="Our Services"
        title="Built to turn attention into real customers."
        subtitle="Every service we offer is designed around one outcome: measurable business results for your brand."
      />

      {services.map((s, i) => {
        const onLight = i % 2 === 1;
        return (
          <section
            key={s.slug}
            className={onLight ? "bg-white-primary border-y border-border-light" : "bg-black-primary"}
          >
            <div className="container-cin py-20 md:py-28">
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  onLight ? "lg:[direction:rtl]" : ""
                }`}
              >
                <Reveal className={`lg:col-span-6 ${onLight ? "lg:[direction:ltr]" : ""}`}>
                  <MediaPlaceholder
                    label={s.name}
                    kind={s.slug === "content-production" ? "video" : undefined}
                    className="aspect-[4/3]"
                    variant={s.disabled ? "dark" : "red"}
                  />
                </Reveal>
                <Reveal delay={100} className={`lg:col-span-6 ${onLight ? "lg:[direction:ltr]" : ""}`}>
                  <SectionLabel number={s.number} onLight={onLight} />
                  <h2 className={`text-h1 mt-4 ${onLight ? "text-ink" : "text-white-primary"}`}>{s.name}</h2>
                  <p className={`text-lead mt-4 ${onLight ? "text-ink-muted" : "text-gray-light"}`}>{s.tagline}</p>
                  <p className={`text-body mt-6 ${onLight ? "text-ink-muted" : "text-gray-light"}`}>
                    {s.description}
                  </p>

                  <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className={`text-body-sm flex items-start gap-2.5 ${
                          onLight ? "text-ink-muted" : "text-gray-light"
                        }`}
                      >
                        <span className="h-1 w-1 mt-2.5 shrink-0 bg-red" />
                        {d}
                      </li>
                    ))}
                  </ul>

                  <p
                    className={`text-body-sm italic mt-8 border-l-2 border-red pl-4 ${
                      onLight ? "text-ink-muted" : "text-gray-light"
                    }`}
                  >
                    {s.resultsStat}
                  </p>

                  <div className="mt-8 flex flex-wrap items-center gap-4">
                    {s.disabled ? (
                      <span
                        className={`btn opacity-45 cursor-not-allowed ${
                          onLight ? "btn-outline-light" : "btn-outline-dark"
                        }`}
                      >
                        Coming Soon
                      </span>
                    ) : (
                      <>
                        <Link href={s.href} className={onLight ? "btn btn-outline-light" : "btn btn-outline-dark"}>
                          More details
                        </Link>
                        <BookCallButton />
                      </>
                    )}
                  </div>
                </Reveal>
              </div>
            </div>
          </section>
        );
      })}

      <CTASection />
    </>
  );
}
