import Reveal from "@/components/Reveal";

export default function SectionHeader({
  index,
  label,
  title,
  intro,
  onLight = false,
  align = "left",
  className = "",
}: {
  index?: string;
  label?: string;
  title?: React.ReactNode;
  intro?: string;
  onLight?: boolean;
  align?: "left" | "center";
  className?: string;
}) {
  const muted = onLight ? "text-ink-muted" : "text-gray-light";
  const strong = onLight ? "text-ink" : "text-white-primary";

  return (
    <Reveal
      className={`flex flex-col gap-5 ${align === "center" ? "items-center text-center" : ""} ${className}`}
    >
      {(index || label) && (
        <div className="flex items-center gap-3">
          {index && <span className="text-mono text-red">{index}</span>}
          {index && label && <span className="h-px w-8 bg-red/50" />}
          {label && <span className={`text-label ${muted}`}>{label}</span>}
        </div>
      )}
      {title && <h2 className={`text-h1 ${strong} max-w-4xl`}>{title}</h2>}
      {intro && <p className={`text-lead ${muted} max-w-xl`}>{intro}</p>}
    </Reveal>
  );
}
