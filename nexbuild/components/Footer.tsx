import Link from "next/link";
import Logo from "./Logo";
import { nav, site } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-paper">
      <div className="container-x py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-[15px] leading-relaxed text-ink-mute">{site.tagline}</p>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap gap-x-8 gap-y-3 text-[15px] text-ink-soft">
            {nav.map((n) => (
              <Link key={n.href} href={n.href} className="transition hover:text-accent">
                {n.label}
              </Link>
            ))}
          </nav>

          <div className="flex gap-5 text-[15px] text-ink-soft">
            <a href={site.links.github} target="_blank" rel="noreferrer" className="transition hover:text-accent">
              GitHub
            </a>
            <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="transition hover:text-accent">
              LinkedIn
            </a>
            <a href={site.links.instagram} target="_blank" rel="noreferrer" className="transition hover:text-accent">
              Instagram
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-line pt-6 text-sm text-ink-mute">
          © {new Date().getFullYear()} NEXBuild. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
