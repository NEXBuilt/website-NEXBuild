import Reveal from "./Reveal";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="h-section">From idea to reality</h2>
          <p className="mt-5 text-lg text-ink-soft md:text-xl">
            Five steps, no surprises. You see progress at every stage.
          </p>
        </div>

        <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
          {/* horizontal line (desktop) */}
          <div
            className="absolute left-0 right-0 top-[27px] hidden h-px bg-gradient-to-r from-accent via-accent/40 to-line lg:block"
            aria-hidden="true"
          />
          {/* vertical line (mobile) */}
          <div
            className="absolute bottom-4 left-[27px] top-4 w-px bg-gradient-to-b from-accent via-accent/40 to-line lg:hidden"
            aria-hidden="true"
          />

          {processSteps.map((p, i) => (
            <li key={p.step} className="relative">
              <Reveal delay={i * 110}>
                <div className="flex gap-6 lg:block">
                  <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border border-line bg-white font-mono text-[15px] font-medium text-accent shadow-soft">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="lg:mt-8">
                    <h3 className="text-2xl font-semibold tracking-[-0.025em]">{p.step}</h3>
                    <p className="mt-2 max-w-xs text-[16px] leading-relaxed text-ink-soft">{p.text}</p>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
