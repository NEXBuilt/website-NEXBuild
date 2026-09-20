import { services, ServiceIcon } from "@/lib/data";

function Icon({ name }: { name: ServiceIcon }) {
  const common = {
    width: 26,
    height: 26,
    viewBox: "0 0 26 26",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.7,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "web":
      return (
        <svg {...common}>
          <rect x="3" y="5" width="20" height="16" rx="3" />
          <path d="M3 10h20M7 7.5h.01M10 7.5h.01" />
        </svg>
      );
    case "chart":
      return (
        <svg {...common}>
          <path d="M4 21V5M4 21h18" />
          <path d="M9 17v-5M14 17V8M19 17v-8" />
        </svg>
      );
    case "spark":
      return (
        <svg {...common}>
          <path d="M13 3l2.4 6.6L22 12l-6.6 2.4L13 21l-2.4-6.6L4 12l6.6-2.4z" />
        </svg>
      );
    case "server":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="18" height="7" rx="2" />
          <rect x="4" y="15" width="18" height="7" rx="2" />
          <path d="M8 7.5h.01M8 18.5h.01" />
        </svg>
      );
  }
}

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-2xl">
          <h2 className="h-section">What we build</h2>
          <p className="mt-5 text-lg text-ink-soft md:text-xl">
            From your first idea to a production-ready product.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="group relative overflow-hidden rounded-card border border-line bg-surface p-8 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-lift md:p-10"
            >
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                aria-hidden="true"
              />
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Icon name={s.icon} />
              </div>
              <h3 className="mt-16 text-2xl font-semibold tracking-[-0.025em] md:text-[28px]">
                {s.title}
              </h3>
              <p className="mt-3 max-w-md text-[17px] leading-relaxed text-ink-soft">{s.blurb}</p>
              <ul className="mt-8 flex flex-wrap gap-2">
                {s.tags.map((t) => (
                  <li
                    key={t}
                    className="rounded-full border border-line bg-paper px-3 py-1 text-sm text-ink-soft"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
