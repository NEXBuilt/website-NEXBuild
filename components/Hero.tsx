import Link from "next/link";
import Arrow from "./Arrow";

function Ecosystem() {
  return (
    <div className="relative mx-auto aspect-[520/480] w-full max-w-[520px]" aria-hidden="true">
      {/* connectors */}
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <path
          d="M50 38 C50 49 23.5 46 23.5 58"
          fill="none"
          stroke="#4F46FF"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke"
          className="animate-dash"
        />
        <path
          d="M50 38 C50 50 76.5 49 76.5 62"
          fill="none"
          stroke="#4F46FF"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeDasharray="4 6"
          vectorEffect="non-scaling-stroke"
          className="animate-dash"
        />
      </svg>
      <span className="absolute left-1/2 top-[38%] h-2.5 w-2.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent ring-4 ring-accent/15" />

      {/* Analytics */}
      <div
        className="absolute left-[22%] top-0 h-[38%] w-[56%] animate-float"
        style={{ animationDelay: "-2s" }}
      >
        <div className="card flex h-full flex-col justify-between p-4 sm:p-5">
          <div className="flex items-center justify-between text-[12px] font-medium text-ink-mute">
            <span>Analytics</span>
            <span className="rounded-full bg-accent-soft px-2 py-0.5 text-accent">This month</span>
          </div>
          <div className="flex items-end justify-between">
            <div className="flex items-baseline gap-1.5">
              <span className="text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">84%</span>
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" className="text-emerald-500">
                <path d="M4 13L13 4M6 4h7v7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <svg width="86" height="38" viewBox="0 0 86 38" fill="none" className="hidden sm:block">
              <path
                d="M2 32 L16 24 L28 27 L42 14 L56 18 L70 7 L84 4"
                stroke="#4F46FF"
                strokeWidth="2.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Website */}
      <div
        className="absolute left-0 top-[58%] h-[38%] w-[47%] animate-float-slow"
        style={{ animationDelay: "-4s" }}
      >
        <div className="card flex h-full flex-col overflow-hidden">
          <div className="flex items-center gap-1 border-b border-line px-3 py-2">
            <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
            <span className="h-1.5 w-1.5 rounded-full bg-ink/15" />
            <span className="ml-2 text-[11px] font-medium text-ink-mute">Website</span>
          </div>
          <div className="flex flex-1 flex-col justify-center gap-2 p-3 sm:p-4">
            <div className="h-2.5 w-4/5 rounded-full bg-ink" />
            <div className="h-2 w-3/5 rounded-full bg-ink/15" />
            <div className="mt-1 h-5 w-16 rounded-full bg-accent" />
          </div>
        </div>
      </div>

      {/* AI engine */}
      <div
        className="absolute right-0 top-[62%] h-[38%] w-[47%] animate-float"
        style={{ animationDelay: "-5.5s" }}
      >
        <div className="flex h-full flex-col justify-between rounded-card bg-night p-4 text-white shadow-lift sm:p-5">
          <div className="flex items-center gap-2 text-[12px] font-medium text-white/70">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M8 1l1.6 4.4L14 7l-4.4 1.6L8 13l-1.6-4.4L2 7l4.4-1.6z" fill="#8B85FF" />
            </svg>
            AI engine
          </div>
          <div className="space-y-2">
            <div className="h-2 w-full rounded-full bg-white/20" />
            <div className="h-2 w-2/3 rounded-full bg-white/20" />
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-white/60">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Running
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="dots-bg pointer-events-none absolute inset-0" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-24 top-32 h-[420px] w-[420px] rounded-full bg-accent/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative grid items-center gap-14 pb-20 pt-10 md:pt-16 lg:grid-cols-[1.15fr_1fr] lg:gap-8 lg:pb-28 lg:pt-20">
        <div>
          <h1 className="h-display animate-rise text-[56px] sm:text-7xl lg:text-[88px]">
            We build
            <br />
            what&apos;s next.
          </h1>
          <p
            className="mt-7 max-w-[32rem] animate-rise text-lg leading-relaxed text-ink-soft md:text-xl"
            style={{ animationDelay: "120ms" }}
          >
            Digital products, websites, dashboards and AI&#8209;powered solutions for growing businesses.
          </p>
          <div
            className="mt-10 flex animate-rise flex-wrap gap-3"
            style={{ animationDelay: "240ms" }}
          >
            <Link href="/contact" className="btn-primary">
              Start a project
              <Arrow />
            </Link>
            <Link href="/work" className="btn-ghost">
              View our work
            </Link>
          </div>
        </div>

        <div className="animate-rise" style={{ animationDelay: "360ms" }}>
          <Ecosystem />
        </div>
      </div>

      <div className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 text-xs text-ink-mute lg:flex">
        Scroll to explore
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="animate-float">
          <path d="M7 2v10M3 8l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
}
