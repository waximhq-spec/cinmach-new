type MediaPlaceholderProps = {
  label?: string;
  sublabel?: string;
  index?: string;
  kind?: "video" | "photo";
  className?: string;
  variant?: "dark" | "red" | "light";
  corners?: boolean;
};

export default function MediaPlaceholder({
  label,
  sublabel,
  index,
  kind,
  className = "",
  variant = "dark",
  corners = true,
}: MediaPlaceholderProps) {
  const gradient =
    variant === "red"
      ? "bg-[radial-gradient(circle_at_28%_18%,rgba(200,30,58,0.32),transparent_58%),linear-gradient(135deg,#1e1e22_0%,#0a0a0b_62%)]"
      : variant === "light"
        ? "bg-[linear-gradient(135deg,#ece9e4_0%,#e2e0dc_70%)]"
        : "bg-[linear-gradient(135deg,#1e1e22_0%,#0a0a0b_68%)]";

  const isLight = variant === "light";
  const tickColor = isLight ? "border-ink/20" : "border-white-primary/25";
  const textColor = isLight ? "text-ink-muted" : "text-gray-light";

  return (
    <div className={`grain group/media relative overflow-hidden ${gradient} ${className}`}>
      {index && (
        <span className={`absolute left-4 top-4 text-mono ${isLight ? "text-ink-muted" : "text-gray-light"}`}>
          {index}
        </span>
      )}

      <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 px-6 text-center">
        {kind === "video" && (
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-full border transition-transform duration-500 group-hover/media:scale-110 ${
              isLight ? "border-ink/30" : "border-white-primary/35"
            }`}
          >
            <svg width="15" height="17" viewBox="0 0 16 18" fill="none" aria-hidden="true">
              <path
                d="M1 1.5V16.5L15 9L1 1.5Z"
                stroke={isLight ? "#141414" : "#F5F3F0"}
                strokeWidth="1.3"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
        {label && <span className={`text-label ${isLight ? "text-ink-muted" : "text-gray-light"}`}>{label}</span>}
        {sublabel && <span className={`text-caption max-w-xs ${textColor}`}>{sublabel}</span>}
      </div>

      {corners && (
        <>
          <span className={`pointer-events-none absolute left-3 top-3 h-4 w-4 border-l border-t ${tickColor}`} />
          <span className={`pointer-events-none absolute right-3 top-3 h-4 w-4 border-r border-t ${tickColor}`} />
          <span className={`pointer-events-none absolute left-3 bottom-3 h-4 w-4 border-l border-b ${tickColor}`} />
          <span className={`pointer-events-none absolute right-3 bottom-3 h-4 w-4 border-r border-b ${tickColor}`} />
        </>
      )}
    </div>
  );
}
