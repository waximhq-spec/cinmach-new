import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import Reveal from "@/components/Reveal";
import { services } from "@/lib/content";

export default function ServicesTable() {
  return (
    <section className="bg-white-primary border-y border-border-light">
      <div className="container-cin py-24 md:py-36">
        <SectionHeader
          index="(03)"
          label="Services"
          title={<>Two disciplines. <span className="text-red">One outcome.</span></>}
          onLight
          className="mb-16"
        />

        <div className="flex flex-col">
          {services.map((s, i) => (
            <Reveal key={s.slug}>
              <div className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 border-t border-border-light py-10 md:py-14 last:border-b">
                <div className="lg:col-span-1">
                  <span className="text-mono text-red">{s.number}</span>
                </div>
                <div className="lg:col-span-4">
                  <h3 className="text-h2 text-ink">{s.name}</h3>
                  <p className="text-body text-ink-muted mt-3">{s.tagline}</p>
                  <div className="mt-6">
                    {s.disabled ? (
                      <span className="text-mono text-red">Coming Soon °</span>
                    ) : (
                      <Link href={s.href} className="link-red text-body-sm">
                        Explore {s.name} →
                      </Link>
                    )}
                  </div>
                </div>
                <div className="lg:col-span-7">
                  <p className="text-body text-ink-muted max-w-2xl">{s.description}</p>
                  <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                    {s.deliverables.map((d) => (
                      <li key={d} className="text-body-sm text-ink flex items-center gap-2.5">
                        <span className="h-1 w-1 shrink-0 bg-red" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
