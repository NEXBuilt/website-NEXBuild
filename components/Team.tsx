import Image from "next/image";
import Reveal from "./Reveal";
import { site, team } from "@/lib/data";

type SocialIconName = "linkedin" | "github" | "instagram" | "email";
function SocialIcon({ name }: { name: SocialIconName }) {
  if (name === "email") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="1.8"
      >
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    );
  }

  if (name === "linkedin") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M4.98 3.5a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM3 9h4v12H3V9Zm6 0h3.83v1.64h.05c.53-1 1.83-2.05 3.77-2.05 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.59c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94V21H9V9Z" />
      </svg>
    );
  }

  if (name === "github") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-current"
      >
        <path d="M12 2.5a9.5 9.5 0 0 0-3 18.51c.48.09.66-.21.66-.47v-1.67c-2.7.59-3.27-1.14-3.27-1.14-.44-1.12-1.08-1.42-1.08-1.42-.88-.6.07-.59.07-.59.97.07 1.48 1 1.48 1 .87 1.48 2.28 1.05 2.84.8.09-.63.34-1.05.62-1.29-2.16-.25-4.43-1.08-4.43-4.8 0-1.06.38-1.92 1-2.6-.1-.25-.43-1.3.1-2.57 0 0 .82-.26 2.68 1a9.3 9.3 0 0 1 4.88 0c1.86-1.26 2.68-1 2.68-1 .53 1.27.2 2.32.1 2.57.62.68 1 1.54 1 2.6 0 3.73-2.27 4.55-4.44 4.8.35.3.66.87.66 1.76v2.55c0 .26.18.57.67.47A9.5 9.5 0 0 0 12 2.5Z" />
      </svg>
    );
  }

  if (name === "instagram") {
    return (
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="h-5 w-5 fill-none stroke-current"
        strokeWidth="1.8"
      >
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          className="fill-current stroke-none"
        />
      </svg>
    );
  }

  return null;
}

const socialLinks = [
  { label: "LinkedIn", href: site.links.linkedin, icon: "linkedin" as const },
  { label: "GitHub", href: site.links.github, icon: "github" as const },
  { label: "Instagram", href: site.links.instagram, icon: "instagram" as const },
  { label: "Gmail", href: `mailto:${site.email}`, icon: "email" as const },
];

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
                  <div className="mt-6 flex gap-2 border-t border-line pt-5">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.href}
                        target={social.icon === "email" ? undefined : "_blank"}
                        rel={social.icon === "email" ? undefined : "noreferrer"}
                        aria-label={`${m.name} on ${social.label}`}
                        title={social.label}
                        className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-accent hover:text-accent"
                      >
                        <SocialIcon name={social.icon} />
                      </a>
                    ))}
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-5 grid overflow-hidden rounded-card border border-line bg-surface md:grid-cols-[1.05fr_.95fr]">
          <div className="relative min-h-[270px] overflow-hidden photo-tint md:min-h-[340px]">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1400&q=85"
              alt="A team collaborating around a table"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col justify-center p-8 md:p-12">
            <p className="text-sm font-medium text-accent">Small team, close collaboration</p>
            <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em] md:text-4xl">
              The people in the room are the people doing the work.
            </h3>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-soft">
              We keep the feedback loop short, share progress early, and make technical decisions with your goals in view.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
