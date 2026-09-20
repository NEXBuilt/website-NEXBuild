import { reasons } from "@/lib/data";

const whyConfig = [
  {
    gradient: "from-[#1a1460] via-[#312ab0] to-[#4F46FF]",
    bgGlow: "#4F46FF",
    accentIcon: "⚡",
    badge: "Speed",
  },
  {
    gradient: "from-[#0d1440] via-[#1b2a6b] to-[#3730d6]",
    bgGlow: "#3730d6",
    accentIcon: "⌨️",
    badge: "Tech",
  },
  {
    gradient: "from-[#160f3a] via-[#2d1f80] to-[#6158ff]",
    bgGlow: "#6158ff",
    accentIcon: "💬",
    badge: "Direct",
  },
];

const icons = [
  // fast — lightning bolt
  <path key="a" d="M14 3L5 15h7l-1 8 9-12h-7z" />,
  // technical — code brackets
  <g key="b">
    <path d="M9 8l-5 5 5 5M17 8l5 5-5 5" />
    <path d="M15 5l-4 16" />
  </g>,
  // direct — speech bubble
  <g key="c">
    <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2h-7l-5 4v-4H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
  </g>,
];

export default function Why() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="absolute inset-0 bg-paper/60 backdrop-blur-[2px]" aria-hidden="true" />

      <div className="container-x relative">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-widest text-accent mb-3">Why us</p>
          <h2 className="h-section">Small team. Serious builds.</h2>
          <p className="mt-5 text-lg text-ink-soft md:text-xl">
            Why businesses work with NEXBuild instead of a big agency.
          </p>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {reasons.map((r, i) => {
            const cfg = whyConfig[i];
            return (
              <div
                key={r.title}
                className="why-card group relative overflow-hidden rounded-card border border-line bg-surface shadow-soft transition-all duration-500 hover:-translate-y-2 hover:border-accent/40 hover:shadow-lift"
              >
                {/* Dark gradient background that reveals on hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${cfg.gradient} opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
                  aria-hidden="true"
                />
                {/* Glow spot */}
                <div
                  className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-30"
                  style={{ background: cfg.bgGlow }}
                  aria-hidden="true"
                />

                {/* Top accent line on hover */}
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  aria-hidden="true"
                />

                <div className="relative p-8 md:p-10">
                  {/* Icon circle */}
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent-soft text-accent transition-colors duration-500 group-hover:bg-white/15 group-hover:text-white">
                    <svg
                      width="28"
                      height="28"
                      viewBox="0 0 26 26"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      {icons[i]}
                    </svg>
                  </div>

                  {/* Badge */}
                  <span className="mt-5 inline-block rounded-full border border-accent/30 bg-accent-soft px-3 py-0.5 text-xs font-semibold uppercase tracking-widest text-accent transition-colors duration-500 group-hover:border-white/20 group-hover:bg-white/10 group-hover:text-white/80">
                    {cfg.badge}
                  </span>

                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.025em] transition-colors duration-500 group-hover:text-white">
                    {r.title}
                  </h3>
                  <p className="mt-3 text-[17px] leading-relaxed text-ink-soft transition-colors duration-500 group-hover:text-white/75">
                    {r.text}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
