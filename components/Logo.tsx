import Link from "next/link";

export function LogoMark({ size = 30, invert = false }: { size?: number; invert?: boolean }) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true">
      <rect width="32" height="32" rx="9" fill={invert ? "#fff" : "#4F46FF"} />
      {/* an "N" made of connected blocks */}
      <polygon points="9,9 13,9 23,23 19,23" fill={invert ? "#4F46FF" : "#fff"} />
      <rect x="9" y="9" width="4" height="14" rx="1" fill={invert ? "#4F46FF" : "#fff"} />
      <rect x="19" y="9" width="4" height="14" rx="1" fill={invert ? "#4F46FF" : "#fff"} />
    </svg>
  );
}

export default function Logo({ invert = false }: { invert?: boolean }) {
  return (
    <Link href="/" className="flex items-center gap-2.5" aria-label="NEXBuild home">
      <LogoMark invert={invert} />
      <span className={`text-[19px] tracking-[-0.03em] ${invert ? "text-white" : "text-ink"}`}>
        <span className="font-bold">NEX</span>
        <span className="font-normal">Build</span>
      </span>
    </Link>
  );
}
