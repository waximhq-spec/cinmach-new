import Link from "next/link";
import PageHero from "@/components/PageHero";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import CTASection from "@/components/CTASection";
import BookCallButton from "@/components/BookCallButton";
import SectionLabel from "@/components/SectionLabel";
import Reveal from "@/components/Reveal";
import { ServiceSlug, services } from "@/lib/content";

export default function ServiceDetail({ slug }: { slug: ServiceSlug }) {
  const service = services.find((s) => s.slug === slug)!;
  const others = services.filter((s) => s.slug !== slug);

  return (
    <>
      <PageHero kicker={`Service ${service.number}`} index={`(${service.number})`} title={service.name} subtitle={service.tagline} />

      {/* Overview: text left, media right */}
      <section className="bg-black-primary">
        <div className="container-cin py-20 md:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <Reveal className="lg:col-span-5">
              <p className="text-lead text-white-primary">{service.description}</p>

              <div className="mt-10 pt-8 border-t border-border-dark">
                <SectionLabel>Results</SectionLabel>
                <p className="text-body text-gray-light italic mt-4 border-l-2 border-red pl-4">
                  {service.resultsStat}
                </p>
              </div>

              {service.disabled && (
                <div className="mt-8 border border-red bg-red-tint px-6 py-5">
                  <p className="text-body-sm text-red">
                    This service is launching soon. Register your interest and we&apos;ll reach out the moment
                    paid advertising slots open up.
                  </p>
                </div>
              )}
            </Reveal>

            <Reveal delay={100} variant="clip" className="lg:col-span-7">
              <MediaPlaceholder
                label={service.name}
                kind={slug === "content-production" ? "video" : undefined}
                variant="red"
                className="aspect-[4/3]"
              />
            </Reveal>
          </div>

          {/* What you get -- full width list */}
          <Reveal className="mt-20 md:mt-28">
            <SectionLabel number="+">What You Get</SectionLabel>
            <ul className="mt-8 border-t border-border-dark">
              {service.deliverables.map((d, i) => (
                <li
                  key={d}
                  className="group flex items-center gap-6 border-b border-border-dark py-6 transition-colors hover:bg-black-secondary/40"
                >
                  <span className="text-mono text-red w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-h4 text-white-primary group-hover:text-red transition-colors">{d}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 flex flex-wrap gap-4">
              {service.disabled ? (
                <span className="btn btn-outline-dark opacity-45 cursor-not-allowed">Coming Soon</span>
              ) : (
                <BookCallButton />
              )}
              <Link href="/services" className="btn btn-outline-dark">
                All Services →
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Other services */}
      <section className="bg-white-primary border-y border-border-light">
        <div className="container-cin py-16 md:py-20">
          <Reveal>
            <SectionLabel number="+" onLight>
              Other Services
            </SectionLabel>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {others.map((s, i) => (
              <Reveal key={s.slug} delay={i * 100}>
                <Link
                  href={s.disabled ? "/services" : s.href}
                  className="group block border border-border-light p-8 bg-white-secondary hover:border-red transition-colors duration-200"
                >
                  <span className="text-mono text-red">{s.number}</span>
                  <h3 className="text-h3 text-ink mt-3">{s.name}</h3>
                  <p className="text-body-sm text-ink-muted mt-3">{s.tagline}</p>
                  <span className="link-red text-body-sm mt-5 inline-block">
                    {s.disabled ? "View Services →" : "More details →"}
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
