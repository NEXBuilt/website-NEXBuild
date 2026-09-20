import Link from "next/link";
import Arrow from "./Arrow";

export default function CTA({ href = "/contact" }: { href?: string }) {
  return (
    <section className="relative overflow-hidden bg-night py-28 text-white md:py-40">
      {/* Animated grid */}
      <div className="grid-bg animate-gridmove absolute inset-0" aria-hidden="true" />

      {/* Multiple layered glows for depth */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[120px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute left-1/4 top-1/4 h-[260px] w-[260px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/15 blur-[80px]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 bottom-1/4 h-[200px] w-[200px] translate-x-1/2 translate-y-1/2 rounded-full bg-indigo-400/10 blur-[60px]"
        aria-hidden="true"
      />

      <div className="container-x relative text-center">
        {/* Label */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-medium text-white/70 backdrop-blur-sm">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />
          Let&apos;s build something amazing
        </div>

        <h2 className="h-display text-5xl sm:text-7xl md:text-[96px] glow-text">
          Have an idea?
          <br />
          Let&apos;s build it.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-white/65 md:text-xl">
          Tell us what you&apos;re trying to build. We&apos;ll figure out the technology.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href={href}
            className="btn bg-surface text-ink hover:-translate-y-0.5 hover:bg-accent-soft shadow-[0_8px_32px_-8px_rgba(255,255,255,0.15)]"
          >
            Start a project
            <Arrow />
          </Link>
          <Link
            href="/work"
            className="btn-ghost-dark"
          >
            See our work
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 text-sm text-white/40">
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            No account managers
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Direct access to developers
          </span>
          <span className="flex items-center gap-2">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            Fast turnaround
          </span>
        </div>
      </div>
    </section>
  );
}
