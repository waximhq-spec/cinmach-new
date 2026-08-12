"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav } from "@/lib/content";
import BookCallButton from "@/components/BookCallButton";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

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

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-500 ${
        mobileOpen
          ? "bg-black-primary border-b border-border-dark"
          : scrolled
            ? "bg-black-primary/90 backdrop-blur-md border-b border-border-dark"
            : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container-cin flex h-[72px] items-center justify-between gap-6">
        {/* Brand lockup with meta */}
        <Link href="/" aria-label="Cinmach Productions -- Home" className="flex items-center gap-3 z-10">
          <span className="text-h4 font-semibold tracking-tight text-white-primary leading-none">
            CIN<span className="text-red">MACH</span>
          </span>
          <span className="hidden sm:flex flex-col leading-none border-l border-border-dark pl-3">
            <span className="text-mono text-gray-light">EST. MANAMA</span>
            <span className="text-mono text-gray">BAHRAIN 10—26©</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
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
                  className="link-sweep text-label text-white-primary/85 hover:text-white-primary transition-colors flex items-center gap-1.5"
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
                className="link-sweep text-label text-white-primary/85 hover:text-white-primary transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
        </nav>

        <div className="hidden lg:block">
          <BookCallButton className="btn btn-primary !py-3 !px-6" />
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden z-10 flex items-center gap-2.5 text-white-primary"
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
            <BookCallButton className="btn btn-primary w-full" />
            <p className="text-mono text-gray">© 2026 Cinmach Productions — Manama, Bahrain</p>
          </div>
        </div>
      </div>
    </header>
  );
}
