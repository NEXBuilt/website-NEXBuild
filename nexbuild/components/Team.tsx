import Image from "next/image";
import Reveal from "./Reveal";
import { team } from "@/lib/data";

export default function Team() {
  return (
    <section id="team" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="h-section">Meet the builders</h2>
          <p className="mt-5 text-lg text-ink-soft md:text-xl">
            Three developers. Everyone here writes code for your project.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {team.map((m, i) => (
            <Reveal key={m.name} delay={i * 100}>
              <article className="card overflow-hidden">
                <div className="relative aspect-[4/3] bg-gradient-to-br from-accent-soft to-[#E1E4F5]">
                  {m.photo ? (
                    <Image
                      src={m.photo}
                      alt={`Portrait of ${m.name}`}
                      fill
                      sizes="(min-width: 768px) 380px, 100vw"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center text-[88px] font-semibold tracking-[-0.06em] text-accent/70">
                      {m.name[0]}
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <h3 className="text-2xl font-semibold tracking-[-0.025em]">{m.name}</h3>
                  <p className="mt-1 text-[15px] text-ink-mute">{m.role}</p>
                  <ul className="mt-5 flex flex-wrap gap-2">
                    {m.skills.map((s) => (
                      <li key={s} className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-soft">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
