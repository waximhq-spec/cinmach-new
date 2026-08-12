"use client";

import { useEffect, useRef, useState } from "react";

// Splits "40+" -> { num: 40, suffix: "+" }, "300%" -> { num: 300, suffix: "%" }
function parseValue(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { num: null as number | null, suffix: value };
  return { num: parseInt(match[1], 10), suffix: match[2] };
}

export default function CountUp({
  value,
  duration = 1600,
  className = "",
}: {
  value: string;
  duration?: number;
  className?: string;
}) {
  const { num, suffix } = parseValue(value);
  const ref = useRef<HTMLSpanElement | null>(null);
  const [display, setDisplay] = useState(num === null ? value : "0");
  const started = useRef(false);

  useEffect(() => {
    if (num === null) return;
    const el = ref.current;
    if (!el) return;

    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;

    const run = () => {
      if (started.current) return;
      started.current = true;

      if (reduce) {
        setDisplay(`${num}${suffix}`);
        return;
      }

      let done = false;
      const start = performance.now();
      const tick = (now: number) => {
        const t = Math.min((now - start) / duration, 1);
        // ease-out cubic
        const eased = 1 - Math.pow(1 - t, 3);
        setDisplay(`${Math.round(eased * num)}${suffix}`);
        if (t < 1) requestAnimationFrame(tick);
        else done = true;
      };
      requestAnimationFrame(tick);

      // Guarantee the final value even if rAF is throttled (background tab / no compositor)
      setTimeout(() => {
        if (!done) setDisplay(`${num}${suffix}`);
      }, duration + 400);
    };

    if (typeof IntersectionObserver === "undefined") {
      run();
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          run();
          observer.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    observer.observe(el);

    // Fail-safe
    const fallback = setTimeout(run, 2500);
    return () => {
      observer.disconnect();
      clearTimeout(fallback);
    };
  }, [num, suffix, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
    </span>
  );
}
