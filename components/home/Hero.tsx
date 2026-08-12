"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import BookCallButton from "@/components/BookCallButton";
import CountUp from "@/components/CountUp";
import { stats } from "@/lib/content";

function useBahrainClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const format = () =>
      new Intl.DateTimeFormat("en-GB", {
        timeZone: "Asia/Bahrain",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Hero() {
  const time = useBahrainClock();

  return (
    <section className="relative min-h-[100svh] bg-black-primary grain flex flex-col">
      {/* Top meta bar (clears the fixed 72px nav) */}
      <div className="container-cin pt-[88px] md:pt-[96px] shrink-0">
        <div className="flex items-center justify-between border-b border-border-dark pb-3">
          <div className="flex items-center gap-3">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red" />
            </span>
            <span className="text-mono text-gray-light">Manama, Bahrain</span>
          </div>
          <span className="text-mono text-gray tabular-nums">{time || "--:--:--"}</span>
          <span className="hidden sm:inline text-mono text-gray">Cinematic Content Agency</span>
        </div>
      </div>

      {/* Center statement */}
      <div className="container-cin flex-1 flex flex-col justify-center py-8 md:py-6">
        <p className="text-label text-gray-light mb-3 md:mb-6 fade-in">Bahrain-based · GCC-wide</p>
        <h1 className="text-hero text-white-primary">
          We Scale<br />
          <span className="text-red">Your Brand.</span>
        </h1>

        <div className="mt-6 md:mt-10 grid grid-cols-1 lg:grid-cols-12 gap-5 md:gap-6 items-end">
          <p className="lg:col-span-6 text-lead text-gray-light max-w-xl">
            A creative agency from Bahrain building brands that compete internationally — in motion, in
            advertising, in every frame.
          </p>
          <div className="lg:col-span-6 lg:justify-self-end flex flex-col sm:flex-row gap-3 md:gap-4">
            <BookCallButton />
            <Link href="/work" className="btn btn-outline-dark">
              View Our Work →
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom stats ticker */}
      <div className="border-t border-border-dark shrink-0">
        <div className="container-cin grid grid-cols-2 md:grid-cols-4 divide-x divide-border-dark">
          {stats.map((s, i) => (
            <div key={s.label} className={`py-4 md:py-6 ${i === 0 ? "pr-4" : "px-4 md:px-6"}`}>
              <CountUp value={s.value} className="text-h2 text-white-primary block tabular-nums" />
              <div className="text-mono text-gray mt-1.5">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
