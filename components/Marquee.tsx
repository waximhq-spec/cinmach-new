type MarqueeProps = {
  items: string[];
  direction?: "left" | "right";
  duration?: number;
  className?: string;
  separator?: React.ReactNode;
  tone?: "dark" | "light" | "red";
};

export default function Marquee({
  items,
  direction = "left",
  duration = 32,
  className = "",
  separator,
  tone = "dark",
}: MarqueeProps) {
  const toneClass =
    tone === "red"
      ? "bg-red text-white-primary border-y border-red"
      : tone === "light"
        ? "bg-white-primary text-ink border-y border-border-light"
        : "bg-black-primary text-white-primary border-y border-border-dark";

  const sep = separator ?? (
    <span className="mx-6 md:mx-9 inline-flex h-1.5 w-1.5 shrink-0 rounded-full bg-red" aria-hidden />
  );

  const row = (
    <div className="marquee__track" aria-hidden="true">
      {items.concat(items).map((item, i) => (
        <span key={i} className="flex items-center">
          <span className="text-display whitespace-nowrap px-1">{item}</span>
          {sep}
        </span>
      ))}
    </div>
  );

  return (
    <div
      className={`marquee py-6 md:py-8 ${toneClass} ${className}`}
      data-direction={direction}
      style={{ ["--marquee-duration" as string]: `${duration}s` }}
    >
      {row}
      {row}
    </div>
  );
}
