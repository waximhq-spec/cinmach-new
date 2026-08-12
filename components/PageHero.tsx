import Reveal from "@/components/Reveal";

export default function PageHero({
  kicker,
  index = "(00)",
  title,
  subtitle,
  compact = false,
}: {
  kicker?: string;
  index?: string;
  title: React.ReactNode;
  subtitle?: string;
  compact?: boolean;
}) {
  return (
    <section className="relative bg-black-primary grain border-b border-border-dark overflow-hidden">
      <div className={`container-cin ${compact ? "pt-36 pb-16 md:pt-40 md:pb-20" : "pt-40 pb-20 md:pt-48 md:pb-28"}`}>
        <Reveal className="max-w-5xl">
          {kicker && (
            <div className="flex items-center gap-3 mb-8">
              <span className="text-mono text-red">{index}</span>
              <span className="h-px w-8 bg-red/50" />
              <span className="text-label text-gray-light">{kicker}</span>
            </div>
          )}
          <h1 className="text-display text-white-primary">{title}</h1>
          {subtitle && <p className="text-lead text-gray-light mt-8 max-w-2xl">{subtitle}</p>}
        </Reveal>
      </div>
    </section>
  );
}
