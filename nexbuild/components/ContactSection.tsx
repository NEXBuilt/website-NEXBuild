import ContactForm from "./ContactForm";
import { site } from "@/lib/data";

export default function ContactSection() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-[1.2fr_1fr] lg:gap-20">
        <div>
          <h2 className="h-section">Let&apos;s build something</h2>
          <p className="mt-5 max-w-md text-lg text-ink-soft md:text-xl">
            Have a project in mind? Tell us about it and we&apos;ll get back to you.
          </p>
          <div className="mt-10">
            <ContactForm />
          </div>
        </div>

        <aside className="lg:pt-40">
          <h3 className="text-2xl font-semibold tracking-[-0.025em]">Prefer a direct conversation?</h3>
          <dl className="mt-8 divide-y divide-line border-y border-line">
            <div className="py-5">
              <dt className="text-sm text-ink-mute">Email</dt>
              <dd className="mt-1">
                <a href={`mailto:${site.email}`} className="text-lg font-medium transition hover:text-accent">
                  {site.email}
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-sm text-ink-mute">LinkedIn</dt>
              <dd className="mt-1">
                <a href={site.links.linkedin} target="_blank" rel="noreferrer" className="text-lg font-medium transition hover:text-accent">
                  NEXBuild
                </a>
              </dd>
            </div>
            <div className="py-5">
              <dt className="text-sm text-ink-mute">GitHub</dt>
              <dd className="mt-1">
                <a href={site.links.github} target="_blank" rel="noreferrer" className="text-lg font-medium transition hover:text-accent">
                  NEXBuild
                </a>
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
