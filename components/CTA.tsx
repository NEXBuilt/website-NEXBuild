import Link from "next/link";
import Arrow from "./Arrow";

export default function CTA({ href = "/contact" }: { href?: string }) {
  return (
    <section className="relative overflow-hidden bg-night py-28 text-white md:py-40">
      <div className="grid-bg animate-gridmove absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/30 blur-[120px]"
        aria-hidden="true"
      />
      <div className="container-x relative text-center">
        <h2 className="h-display text-5xl sm:text-7xl md:text-[96px]">
          Have an idea?
          <br />
          Let&apos;s build it.
        </h2>
        <p className="mx-auto mt-8 max-w-xl text-balance text-lg leading-relaxed text-white/65 md:text-xl">
          Tell us what you&apos;re trying to build. We&apos;ll figure out the technology.
        </p>
        <div className="mt-10">
          <Link
            href={href}
            className="btn bg-white text-ink hover:-translate-y-0.5 hover:bg-accent-soft"
          >
            Start a project
            <Arrow />
          </Link>
        </div>
      </div>
    </section>
  );
}
