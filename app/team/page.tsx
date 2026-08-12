import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import MediaPlaceholder from "@/components/MediaPlaceholder";
import CTASection from "@/components/CTASection";
import Reveal from "@/components/Reveal";
import { team, coreValues, TeamMember } from "@/lib/content";

export const metadata: Metadata = {
  title: "Our Team",
  description:
    "Meet the nine-person team behind Cinmach Productions -- executive leadership, production and post-production departments based in Manama, Bahrain.",
};

const executive = team.find((t) => t.department === "Executive")!;
const production = team.filter((t) => t.department === "Production");
const post = team.filter((t) => t.department === "Post-Production");

export default function TeamPage() {
  return (
    <>
      <PageHero
        kicker="Our Team"
        index="(T)"
        title={<>Small team. <span className="text-red">Big results.</span></>}
        compact
      />

      {/* Executive Leadership -- feature card */}
      <section className="bg-black-primary">
        <div className="container-cin py-16 md:py-24">
          <SectionHeader index="(01)" label="Executive Leadership" className="mb-10" />
          <Reveal className="relative">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-10 border border-border-dark bg-black-secondary p-8 md:p-12">
              <div className="md:col-span-4 lg:col-span-3">
                <MediaPlaceholder label={executive.name} className="aspect-square" />
              </div>
              <div className="md:col-span-8 lg:col-span-9 flex flex-col justify-center">
                <span className="text-mono text-red">● Founder & CEO</span>
                <h3 className="text-h1 text-white-primary mt-4">{executive.name}</h3>
                <p className="text-label text-gray-light mt-3">{executive.role}</p>
                <p className="text-body text-gray-light mt-6 max-w-2xl">{executive.bio}</p>
              </div>
            </div>
            {/* connector down to departments */}
            <div className="hidden md:flex flex-col items-center">
              <span className="h-12 w-px bg-border-dark" />
              <span className="h-2.5 w-2.5 rounded-full bg-red -mt-1" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Departmental structure -- two columns, org-chart */}
      <section className="bg-white-primary border-y border-border-light">
        <div className="container-cin py-16 md:py-24">
          <SectionHeader
            index="(02)"
            label="Departmental Structure"
            title={<>Production & <span className="text-red">Post-Production.</span></>}
            onLight
            align="center"
            className="mb-16 items-center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8">
            <DepartmentColumn dept="Dept 01" name="Production Department" tagline="On-set & creative execution" members={production} />
            <DepartmentColumn dept="Dept 02" name="Post-Production Department" tagline="Post-workflow & finishing" members={post} />
          </div>
        </div>
      </section>

      {/* Core values */}
      <section className="bg-black-primary">
        <div className="container-cin py-24 md:py-32">
          <SectionHeader
            index="(03)"
            label="Core Values"
            title={<>What we won&apos;t <span className="text-red">compromise on.</span></>}
            className="mb-14"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border-dark">
            {coreValues.map((v, i) => (
              <Reveal key={v.title} delay={i * 100} className="bg-black-primary p-8 md:p-10">
                <span className="text-mono text-red">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-h3 text-white-primary mt-6">{v.title}</h3>
                <p className="text-body-sm text-gray-light mt-4">{v.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}

function DepartmentColumn({
  dept,
  name,
  tagline,
  members,
}: {
  dept: string;
  name: string;
  tagline: string;
  members: TeamMember[];
}) {
  const lead = members.find((m) => m.lead);
  const reports = members.filter((m) => !m.lead);

  return (
    <Reveal className="flex flex-col">
      {/* Column header */}
      <div className="flex items-start justify-between gap-4 border-b border-border-light pb-6">
        <div>
          <p className="text-mono text-red">{tagline}</p>
          <h3 className="text-h3 text-ink mt-2">{name}</h3>
        </div>
        <span className="text-mono text-ink-muted border border-border-light rounded-full px-3 py-1 shrink-0">
          {dept}
        </span>
      </div>

      {/* Lead card */}
      {lead && (
        <div className="relative mt-8">
          <div className="border border-border-light bg-white-secondary p-6 md:p-8">
            <div className="flex flex-col sm:flex-row gap-6">
              <MediaPlaceholder label={lead.name} variant="light" className="aspect-square w-24 h-24 shrink-0" />
              <div>
                <span className="text-mono text-red">● Team Lead</span>
                <h4 className="text-h4 text-ink mt-2">{lead.name}</h4>
                <p className="text-mono text-ink-muted mt-1">{lead.role}</p>
                {lead.bio && <p className="text-body-sm text-ink-muted mt-3">{lead.bio}</p>}
              </div>
            </div>
          </div>
          {/* connector down to reports */}
          <div className="flex flex-col items-center">
            <span className="h-8 w-px bg-border-light" />
            <span className="h-2 w-2 rounded-full bg-red -mt-1" />
          </div>
        </div>
      )}

      {/* Reports -- connected list */}
      <ol className="relative flex flex-col gap-6 pl-6">
        <span className="absolute left-0 top-3 bottom-3 w-px bg-border-light" aria-hidden />
        {reports.map((m, i) => (
          <li key={m.name} className="relative">
            <span className="absolute -left-6 top-6 h-px w-4 bg-border-light" aria-hidden />
            <span className="absolute -left-[1.6rem] top-[1.4rem] h-1.5 w-1.5 rounded-full bg-red" aria-hidden />
            <div className="border border-border-light bg-white-primary p-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-4">
                  <MediaPlaceholder label={m.name} variant="light" className="aspect-square w-12 h-12 shrink-0" corners={false} />
                  <div>
                    <h4 className="text-h4 text-ink">{m.name}</h4>
                    <p className="text-mono text-red mt-1">{m.role}</p>
                  </div>
                </div>
                <span className="text-mono text-ink-muted">{String(i + 1).padStart(2, "0")}</span>
              </div>
              {m.skills && (
                <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1.5 pl-16">
                  {m.skills.map((s) => (
                    <li key={s} className="text-body-sm text-ink-muted flex items-center gap-2">
                      <span className="h-1 w-1 shrink-0 bg-red" />
                      {s}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </li>
        ))}
      </ol>
    </Reveal>
  );
}
