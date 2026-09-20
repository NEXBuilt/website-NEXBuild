import Link from "next/link";
import Image from "next/image";
import Arrow from "./Arrow";
import ProjectMockup from "./ProjectMockup";
import { projects } from "@/lib/data";

export default function FeaturedWork() {
  const [lead, ...rest] = projects;

  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-surface/70 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Portfolio</p>
          <h2 className="h-section">Things we&apos;ve built</h2>
          <p className="mt-5 text-lg text-ink-soft md:text-xl">
            A few projects we shipped, and what we learned making them.
          </p>
        </div>

        {/* Lead project */}
        <Link
          href={`/work/${lead.slug}`}
          className="group mt-14 block overflow-hidden rounded-card border border-line bg-paper transition duration-300 hover:border-accent/40 hover:shadow-lift"
        >
          <div className="relative aspect-[16/9] md:aspect-[2/1] overflow-hidden">
            {lead.image ? (
              <>
                <Image
                  src={lead.image}
                  alt={lead.title}
                  fill
                  sizes="100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-paper/60 via-transparent to-transparent" />
              </>
            ) : (
              <ProjectMockup project={lead} className="aspect-[16/9] md:aspect-[2/1]" />
            )}
          </div>
          <div className="flex flex-col gap-6 p-8 md:flex-row md:items-end md:justify-between md:p-10">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-accent">{lead.category}</p>
              <h3 className="mt-2 text-3xl font-semibold tracking-[-0.03em] md:text-4xl">{lead.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{lead.summary}</p>
              <p className="mt-4 text-sm text-ink-mute">{lead.stack.join("  ·  ")}</p>
            </div>
            <span className="inline-flex shrink-0 items-center gap-2 text-[15px] font-medium text-ink transition group-hover:gap-3 group-hover:text-accent">
              View case study <Arrow />
            </span>
          </div>
        </Link>

        {/* Other projects */}
        <div className="mt-6 grid gap-6 md:grid-cols-2">
          {rest.map((p) => (
            <Link
              key={p.slug}
              href={`/work/${p.slug}`}
              className="group block overflow-hidden rounded-card border border-line bg-paper transition duration-300 hover:border-accent/40 hover:shadow-lift"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                {p.image ? (
                  <>
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 768px) 580px, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-paper/50 via-transparent to-transparent" />
                  </>
                ) : (
                  <ProjectMockup project={p} className="aspect-[16/10]" />
                )}
              </div>
              <div className="p-8">
                <p className="text-sm font-semibold text-accent">{p.category}</p>
                <h3 className="mt-2 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">{p.title}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{p.summary}</p>
                <div className="mt-6 flex items-center justify-between gap-4">
                  <p className="text-sm text-ink-mute">{p.stack.join("  ·  ")}</p>
                  <span className="inline-flex shrink-0 items-center gap-2 text-[15px] font-medium transition group-hover:gap-3 group-hover:text-accent">
                    View <Arrow />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
