"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import BookCallButton from "@/components/BookCallButton";

type NavTone = "dark" | "light" | "red";
type NavTheme = NavTone | "split";

/** Vertical point on the bar used to decide which section is behind it. */
const NAV_PROBE_Y = 36;

const TONES = {
  dark: {
    logo: "text-white-primary",
    metaStrong: "text-gray-light",
    metaMuted: "text-gray",
    link: "text-white-primary/85 hover:text-white-primary",
    divider: "border-border-dark",
    scrolledBg: "bg-black-primary/90 backdrop-blur-md border-b border-border-dark",
    // White pill on a dark bar.
    cta: "btn-solid-light",
  },
  light: {
    logo: "text-ink",
    metaStrong: "text-ink-muted",
    metaMuted: "text-gray",
    link: "text-ink/85 hover:text-ink",
    divider: "border-border-light",
    scrolledBg: "bg-white-primary/90 backdrop-blur-md border-b border-border-light",
    // Black pill on a white bar.
    cta: "btn-solid-dark",
  },
  red: {
    logo: "text-white-primary",
    metaStrong: "text-white-primary/80",
    metaMuted: "text-white-primary/60",
    link: "text-white-primary/85 hover:text-white-primary",
    divider: "border-white-primary/25",
    scrolledBg: "bg-red/95 backdrop-blur-md border-b border-red-dark",
    // Same white pill as the dark bar -- the brief keeps it white on red too.
    cta: "btn-solid-light",
  },
} as const;

/** Parsed [r, g, b, a] from a computed color string, or null if unparseable. */
function parseRgba(color: string): [number, number, number, number] | null {
  const parts = color.match(/[\d.]+/g);
  if (!parts || parts.length < 3) return null;
  const [r, g, b] = parts.map(Number);
  const a = parts.length > 3 ? Number(parts[3]) : 1;
  return [r, g, b, a];
}

function luminanceOf([r, g, b]: [number, number, number, number]) {
  return (0.2126 * r + 0.7152 * g + 0.0722 * b) / 255;
}

/** True for the brand red and its pressed/dark variants (not for e.g. gray). */
function isBrandRed([r, g, b]: [number, number, number, number]) {
  return r > 90 && r - g > 70 && r - b > 50;
}

function toneOf(color: string): NavTone | null {
  const rgba = parseRgba(color);
  if (!rgba || rgba[3] === 0) return null;
  if (isBrandRed(rgba)) return "red";
  return luminanceOf(rgba) > 0.5 ? "light" : "dark";
}

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [theme, setTheme] = useState<NavTheme>("dark");

  /**
   * Drives both the bar's tone and its scrolled state from one passive,
   * rAF-throttled listener.
   *
   * Section bounds and their resolved tone are measured once and cached, so a
   * scroll frame only compares numbers -- no layout reads -- and setState runs
   * solely when a value actually flips, so React does no work on the vast
   * majority of frames. Tone comes from each section's computed background
   * luminance, which means new sections and other pages theme themselves with
   * no annotation; `data-nav-theme` is only needed to override (the process
   * section declares "split" for its two-tone desktop layout).
   */
  useEffect(() => {
    const isDesktop = window.matchMedia("(min-width: 1024px)");
    let bands: { top: number; bottom: number; theme: NavTheme }[] = [];
    let current: NavTheme | null = null;
    let wasScrolled: boolean | null = null;
    let frame = 0;

    const resolveTone = (el: HTMLElement): NavTheme => {
      const declared = el.dataset.navTheme as NavTheme | undefined;
      if (declared) return declared;
      let node: HTMLElement | null = el;
      while (node) {
        const tone = toneOf(getComputedStyle(node).backgroundColor);
        if (tone) return tone;
        node = node.parentElement;
      }
      return "dark";
    };

    const update = () => {
      frame = 0;
      const y = window.scrollY;

      const isScrolled = y > 12;
      if (isScrolled !== wasScrolled) {
        wasScrolled = isScrolled;
        setScrolled(isScrolled);
      }

      const probe = y + NAV_PROBE_Y;
      const band = bands.find((b) => probe >= b.top && probe < b.bottom);
      let next: NavTheme = band ? band.theme : "dark";
      // The two-tone bar only exists where the section is actually split.
      if (next === "split" && !isDesktop.matches) next = "dark";
      if (next !== current) {
        current = next;
        setTheme(next);
      }
    };

    const measure = () => {
      const main = document.querySelector("main");
      if (!main) return;
      bands = Array.from(main.children).map((child) => {
        const el = child as HTMLElement;
        const rect = el.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        return { top, bottom: top + rect.height, theme: resolveTone(el) };
      });
      update();
    };

    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", measure);
    isDesktop.addEventListener("change", measure);
    const observer = new ResizeObserver(measure);
    observer.observe(document.body);

    return () => {
      if (frame) cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", measure);
      isDesktop.removeEventListener("change", measure);
      observer.disconnect();
    };
  }, [pathname]);

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // A split section is dark on its left, so the base bar stays dark and a
  // clipped light copy is laid over the right-hand portion.
  const baseTone: NavTone = theme === "split" ? "dark" : theme;
  const tone = TONES[baseTone];

  const background = mobileOpen
    ? "bg-black-primary border-b border-border-dark"
    : scrolled
      ? tone.scrolledBg
      : "bg-transparent border-b border-transparent";

  const brand = (t: (typeof TONES)[NavTone]) => (
    <span className="flex items-center gap-3">
      <span className={`text-h4 font-semibold tracking-tight leading-none ${t.logo}`}>
        CIN<span className="text-red">MACH</span>
      </span>
      <span className={`hidden sm:flex flex-col leading-none border-l pl-3 ${t.divider}`}>
        <span className={`text-mono ${t.metaStrong}`}>EST. MANAMA</span>
        <span className={`text-mono ${t.metaMuted}`}>BAHRAIN 10—26©</span>
      </span>
    </span>
  );

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${background}`}
    >
      <div className="container-cin flex h-[72px] items-center justify-between gap-6">
        {/* Brand lockup with meta */}
        <Link href="/" aria-label="Cinmach Productions -- Home" className="z-10">
          {brand(tone)}
        </Link>

        {/*
          Nav + CTA grouped and pushed to the right as one cluster (rather than
          spread across the bar with justify-between) so both land inside the
          section's actual light-toned area on the split layout instead of
          straddling into the dark rail.
        */}
        <div className="hidden lg:flex items-center gap-10">
          <nav className="flex items-center gap-8">
            {nav.map((item) =>
              item.dropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => setServicesOpen(true)}
                  onMouseLeave={() => setServicesOpen(false)}
                >
                  <Link
                    href={item.href}
                    className={`link-sweep text-label transition-colors flex items-center gap-1.5 ${tone.link}`}
                  >
                    {item.label}
                    <svg width="9" height="6" viewBox="0 0 9 6" fill="none" aria-hidden="true">
                      <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </Link>
                  {servicesOpen && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-5 w-64">
                      <div className="bg-black-secondary border border-border-dark p-2 shadow-2xl">
                        {item.dropdown.map((d) => (
                          <Link
                            key={d.label}
                            href={d.comingSoon ? "#" : d.href}
                            aria-disabled={d.comingSoon}
                            onClick={(e) => d.comingSoon && e.preventDefault()}
                            className={`flex items-center justify-between px-4 py-3 text-body-sm transition-colors ${
                              d.comingSoon
                                ? "text-gray cursor-not-allowed"
                                : "text-white-primary/85 hover:bg-black-surface hover:text-white-primary"
                            }`}
                          >
                            {d.label === "All Services" ? "All Services →" : d.label}
                            {d.comingSoon && <span className="text-mono text-red">Soon</span>}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`link-sweep text-label transition-colors ${tone.link}`}
                >
                  {item.label}
                </Link>
              )
            )}
          </nav>

          <BookCallButton className={`btn ${tone.cta} !py-3 !px-6`}>Get a Quote</BookCallButton>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className={`lg:hidden z-10 flex items-center gap-2.5 ${mobileOpen ? "text-white-primary" : tone.logo}`}
        >
          <span className="text-label">{mobileOpen ? "Close" : "Menu"}</span>
          <span className="relative h-3.5 w-5">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                mobileOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              }`}
            />
            <span
              className={`absolute left-0 bottom-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                mobileOpen ? "bottom-1/2 translate-y-1/2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/*
        Two-tone bar for the split section: a purely decorative copy clipped to
        the white 7/12 of the viewport, so the bar reads dark over the black
        rail and light over the white column. Desktop only -- on mobile the
        section is black behind the bar, so the base tone already fits.
      */}
      {theme === "split" && !mobileOpen && (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 hidden lg:block"
          style={{ clipPath: "inset(0 0 0 41.6667%)" }}
        >
          <div
            className={`absolute inset-0 transition-colors duration-500 ${
              scrolled ? TONES.light.scrolledBg : "bg-transparent border-b border-transparent"
            }`}
          />
          <div className="container-cin relative flex h-[72px] items-center justify-between gap-6">
            {brand(TONES.light)}
            <div className="hidden lg:flex items-center gap-10">
              <nav className="flex items-center gap-8">
                {nav.map((item) => (
                  <span
                    key={item.label}
                    className={`text-label flex items-center gap-1.5 ${TONES.light.link}`}
                  >
                    {item.label}
                    {item.dropdown && (
                      <svg width="9" height="6" viewBox="0 0 9 6" fill="none">
                        <path d="M1 1L4.5 4.5L8 1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
                      </svg>
                    )}
                  </span>
                ))}
              </nav>
              <span className={`btn ${TONES.light.cta} !py-3 !px-6`}>Get a Quote</span>
            </div>
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      <div
        aria-hidden={!mobileOpen}
        className={`lg:hidden fixed inset-x-0 top-[72px] bottom-0 z-40 bg-black-primary transition-transform duration-500 ease-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full pointer-events-none"
        }`}
        style={{ backgroundColor: "var(--color-black-primary)" }}
      >
        <div className="container-cin flex h-full flex-col justify-between py-10 overflow-y-auto">
          <nav className="flex flex-col">
            {nav.map((item, i) =>
              item.dropdown ? (
                <div key={item.label} className="border-b border-border-dark">
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="flex items-baseline gap-3">
                      <span className="text-mono text-red">0{i + 1}</span>
                      <span className="text-h2 text-white-primary">{item.label}</span>
                    </span>
                    <svg
                      width="14"
                      height="9"
                      viewBox="0 0 9 6"
                      fill="none"
                      className={`transition-transform duration-300 ${mobileServicesOpen ? "rotate-180" : ""}`}
                    >
                      <path d="M1 1L4.5 4.5L8 1" stroke="#B8B5B0" strokeWidth="1.3" strokeLinecap="round" />
                    </svg>
                  </button>
                  {mobileServicesOpen && (
                    <div className="flex flex-col gap-1 pb-5 pl-9">
                      {item.dropdown.map((d) => (
                        <Link
                          key={d.label}
                          href={d.comingSoon ? "#" : d.href}
                          onClick={(e) => d.comingSoon && e.preventDefault()}
                          className={`py-2 text-body ${d.comingSoon ? "text-gray" : "text-white-primary/80"}`}
                        >
                          {d.label} {d.comingSoon && <span className="text-red text-mono">(Soon)</span>}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="border-b border-border-dark py-5 flex items-baseline gap-3"
                >
                  <span className="text-mono text-red">0{i + 1}</span>
                  <span className="text-h2 text-white-primary">{item.label}</span>
                </Link>
              )
            )}
          </nav>
          <div className="flex flex-col gap-6">
            <BookCallButton className="btn btn-solid-light w-full">Get a Quote</BookCallButton>
            <p className="text-mono text-gray">© 2026 Cinmach Productions — Manama, Bahrain</p>
          </div>
        </div>
      </div>
    </header>
  );
}
