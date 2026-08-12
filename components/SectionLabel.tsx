export default function SectionLabel({
  children,
  number,
  onLight = false,
}: {
  children?: React.ReactNode;
  number?: string;
  onLight?: boolean;
}) {
  const muted = onLight ? "text-ink-muted" : "text-gray-light";
  return (
    <div className="flex items-center gap-3">
      {number && <span className="text-mono text-red">{number}</span>}
      {number && children && <span className="h-px w-8 bg-red/50" />}
      {children && <span className={`text-label ${muted}`}>{children}</span>}
    </div>
  );
}
