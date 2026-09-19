import { reasons } from "@/lib/data";

const icons = [
  // fast
  <path key="a" d="M14 3L5 15h7l-1 8 9-12h-7z" />,
  // technical
  <g key="b">
    <path d="M9 8l-5 5 5 5M17 8l5 5-5 5" />
    <path d="M15 5l-4 16" />
  </g>,
  // direct
  <g key="c">
    <path d="M4 6h16a2 2 0 012 2v8a2 2 0 01-2 2h-7l-5 4v-4H4a2 2 0 01-2-2V8a2 2 0 012-2z" />
  </g>,
];

export default function Why() {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container-x">
        <div className="max-w-3xl">
          <h2 className="h-section">Small team. Serious builds.</h2>
          <p className="mt-5 text-lg text-ink-soft md:text-xl">
            Why businesses work with NEXBuild instead of a big agency.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reasons.map((r, i) => (
            <div key={r.title} className="rounded-card border border-line bg-paper p-8 md:p-10">
              <svg
                width="28"
                height="28"
                viewBox="0 0 26 26"
                fill="none"
                stroke="#4F46FF"
                strokeWidth="1.7"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {icons[i]}
              </svg>
              <h3 className="mt-10 text-2xl font-semibold tracking-[-0.025em]">{r.title}</h3>
              <p className="mt-3 text-[17px] leading-relaxed text-ink-soft">{r.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
