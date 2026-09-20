import { stack } from "@/lib/data";

export default function TrustStrip() {
  return (
    <section className="border-y border-line bg-surface/60" aria-label="Technologies we use">
      <div className="container-x flex flex-col items-start gap-4 py-8 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-ink-mute">Built with modern technologies</p>
        <ul className="flex flex-wrap gap-x-9 gap-y-2 text-lg font-medium tracking-tight text-ink/45 md:text-xl">
          {stack.map((s) => (
            <li key={s}>{s}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
