import Image from "next/image";
import { services, ServiceIcon } from "@/lib/data";

function Icon({ name }: { name: ServiceIcon }) {
  const common = {
    width: 24,
    height: 24,
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

const serviceImages: Record<ServiceIcon, string> = {
  web: "/services/web-dev.jpg",
  chart: "/services/dashboard.jpg",
  spark: "/services/ai.jpg",
  server: "/services/backend.jpg",
};

const serviceGradients: Record<ServiceIcon, string> = {
  web: "from-indigo-900/80 via-indigo-800/40 to-transparent",
  chart: "from-violet-900/80 via-violet-800/40 to-transparent",
  spark: "from-purple-900/80 via-purple-800/40 to-transparent",
  server: "from-blue-900/80 via-indigo-800/40 to-transparent",
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32">
      {/* Subtle section bg */}
      <div className="absolute inset-0 bg-paper/60 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="container-x relative">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">What we build</p>
          <h2 className="h-section">Services</h2>
          <p className="mt-5 text-lg text-ink-soft md:text-xl">
            From your first idea to a production-ready product.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((s) => (
            <article
              key={s.title}
              className="service-card group relative overflow-hidden rounded-card border border-line bg-surface shadow-soft transition duration-300 hover:-translate-y-1.5 hover:border-accent/40 hover:shadow-lift"
            >
              {/* Top accent line on hover */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10"
                aria-hidden="true"
              />

              {/* Image header */}
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={serviceImages[s.icon]}
                  alt={s.title}
                  fill
                  sizes="(min-width: 768px) 580px, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {/* gradient overlay */}
                <div
                  className={`absolute inset-0 bg-gradient-to-b ${serviceGradients[s.icon]}`}
                />
                {/* Icon badge */}
                <div className="absolute bottom-4 left-5 z-10 flex h-11 w-11 items-center justify-center rounded-2xl bg-accent text-white shadow-lg shadow-accent/30">
                  <Icon name={s.icon} />
                </div>
              </div>

              {/* Content */}
              <div className="p-7 md:p-8">
                <h3 className="text-2xl font-semibold tracking-[-0.025em] md:text-[26px]">
                  {s.title}
                </h3>
                <p className="mt-3 max-w-md text-[16px] leading-relaxed text-ink-soft">{s.blurb}</p>
                <ul className="mt-6 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="rounded-full border border-accent/20 bg-accent-soft px-3 py-1 text-sm font-medium text-accent"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
