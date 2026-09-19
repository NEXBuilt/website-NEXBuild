"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Logo from "./Logo";
import { nav } from "@/lib/data";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu on navigation
  useEffect(() => setOpen(false), [pathname]);

  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? "border-b border-line/80 bg-paper/75 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <div className="container-x flex h-[72px] items-center justify-between">
        <Logo />

        <nav className="hidden items-center gap-1 md:flex" aria-label="Main">
          {nav
            .filter((n) => n.label !== "Contact")
            .map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className={`rounded-full px-4 py-2 text-[15px] transition ${
                  isActive(n.href)
                    ? "bg-ink/[0.06] text-ink"
                    : "text-ink-soft hover:bg-ink/[0.04] hover:text-ink"
                }`}
              >
                {n.label}
              </Link>
            ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/contact"
            className="inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-[15px] font-medium text-white transition hover:bg-accent"
          >
            Let&apos;s talk
          </Link>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4l10 10M14 4L4 14" stroke="#0B0D14" strokeWidth="1.7" strokeLinecap="round" />
            ) : (
              <path d="M3 6h12M3 12h12" stroke="#0B0D14" strokeWidth="1.7" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="container-x flex flex-col gap-1 pb-6 pt-2 md:hidden" aria-label="Mobile">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="rounded-2xl px-4 py-3.5 text-xl font-medium tracking-tight text-ink hover:bg-ink/[0.04]"
            >
              {n.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-3">
            Start a project
          </Link>
        </nav>
      )}
    </header>
  );
}
