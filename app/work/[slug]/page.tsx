import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Arrow from "@/components/Arrow";
import CTA from "@/components/CTA";
import ProjectMockup from "@/components/ProjectMockup";
import { projects } from "@/lib/data";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const p = projects.find((x) => x.slug === params.slug);
  return p ? { title: p.title, description: p.summary } : {};
}

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="grid gap-4 border-t border-line py-10 md:grid-cols-[220px_1fr] md:gap-12 md:py-14">
      <h2 className="text-xl font-semibold tracking-[-0.02em]">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

export default function CaseStudy({ params }: Props) {
  const idx = projects.findIndex((x) => x.slug === params.slug);
  if (idx === -1) notFound();
  const p = projects[idx];
  const next = projects[(idx + 1) % projects.length];

  return (
    <>
      <article className="container-x pb-24 pt-8 md:pb-32 md:pt-12">
        <Link href="/work" className="inline-flex items-center gap-2 text-[15px] text-ink-mute transition hover:text-accent">
          <Arrow className="rotate-180" /> All work
        </Link>

        <header className="mt-8 max-w-4xl">
          <p className="text-sm font-medium text-accent">{p.category}</p>
          <h1 className="h-display mt-3 text-5xl md:text-7xl">{p.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft md:text-xl">{p.summary}</p>
          {p.liveUrl && (
            <a href={p.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-primary mt-8">
              View Live Demo
              <Arrow />
            </a>
          )}
        </header>

        <div className="group mt-12 overflow-hidden rounded-card border border-line">
          {p.video ? (
            <video
              src={p.video}
              poster={p.image}
              controls
              playsInline
              preload="metadata"
              aria-label={`${p.title} demo video`}
              className="block aspect-[1896/914] h-auto w-full object-cover"
            />
          ) : (
            <ProjectMockup project={p} className="aspect-[16/9] md:aspect-[2/1]" />
          )}
        </div>

        <div className="mt-10">
          <Block title="The problem">
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{p.problem}</p>
          </Block>
          <Block title="The solution">
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{p.solution}</p>
          </Block>
          <Block title="Key features">
            <ul className="grid max-w-2xl gap-3 text-lg text-ink-soft sm:grid-cols-2">
              {p.features.map((f) => (
                <li key={f} className="flex gap-3">
                  <span className="mt-[11px] h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Technology">
            <ul className="flex flex-wrap gap-2">
              {p.stack.map((s) => (
                <li key={s} className="rounded-full border border-line bg-surface px-4 py-1.5 text-[15px] text-ink-soft">
                  {s}
                </li>
              ))}
            </ul>
          </Block>
          <Block title="Result">
            <p className="max-w-2xl text-lg leading-relaxed text-ink-soft">{p.result}</p>
            {p.liveUrl && (
              <a href={p.liveUrl} target="_blank" rel="noreferrer" className="btn-primary mt-8">
                View live project
                <Arrow />
              </a>
            )}
          </Block>
        </div>

        <Link
          href={`/work/${next.slug}`}
          className="group mt-6 flex items-center justify-between rounded-card border border-line bg-surface p-8 transition hover:border-accent/40 hover:shadow-lift md:p-10"
        >
          <div>
            <p className="text-sm text-ink-mute">Next project</p>
            <p className="mt-1 text-2xl font-semibold tracking-[-0.025em] md:text-3xl">{next.title}</p>
          </div>
          <Arrow className="h-6 w-6 shrink-0 transition group-hover:translate-x-1 group-hover:text-accent" />
        </Link>
      </article>
      <CTA />
    </>
  );
}
