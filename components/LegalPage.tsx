import Reveal from "@/components/Reveal";

type LegalSection = { title: string; body: string[] };

export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <section className="bg-black-primary border-b border-border-dark">
        <div className="container-cin py-20 md:py-28">
          <Reveal>
            <span className="text-label text-gray">Last updated: {updated}</span>
            <h1 className="text-h1 text-white-primary mt-4">{title}</h1>
            <p className="text-lead text-gray-light mt-6 max-w-2xl">{intro}</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-white-primary">
        <div className="container-cin py-16 md:py-20">
          <div className="max-w-3xl flex flex-col gap-12">
            {sections.map((s, i) => (
              <Reveal key={s.title} delay={Math.min(i * 60, 300)} className="border-t border-border-light pt-8">
                <h2 className="text-h3 text-ink">
                  <span className="text-red">{String(i + 1).padStart(2, "0")}.</span> {s.title}
                </h2>
                <div className="mt-4 flex flex-col gap-4">
                  {s.body.map((p, j) => (
                    <p key={j} className="text-body text-ink-muted">
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
