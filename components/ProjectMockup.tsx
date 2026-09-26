"use client";

import Image from "next/image";
import { type PointerEvent, useRef } from "react";
import type { Project } from "@/lib/data";

/**
 * Shows the real screenshot if `project.image` is set,
 * otherwise a stylised browser mockup so the layout never looks empty.
 */
function Chrome({ children }: { children: React.ReactNode }) {
  return (
    <div className="absolute inset-x-[6%] bottom-0 top-[9%] overflow-hidden rounded-t-2xl border border-b-0 border-line bg-surface shadow-soft">
      <div className="flex items-center gap-1.5 border-b border-line bg-paper px-4 py-2.5">
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="h-2 w-2 rounded-full bg-ink/15" />
        <span className="ml-3 h-4 w-40 rounded-full bg-ink/[0.06]" />
      </div>
      <div className="relative h-full">{children}</div>
    </div>
  );
}

function UrbanMock() {
  const dots = [
    { l: "22%", t: "30%", c: "bg-accent" },
    { l: "38%", t: "52%", c: "bg-rose-500" },
    { l: "47%", t: "26%", c: "bg-amber-400" },
    { l: "58%", t: "60%", c: "bg-accent" },
    { l: "30%", t: "68%", c: "bg-amber-400" },
    { l: "52%", t: "42%", c: "bg-rose-500" },
  ];
  return (
    <Chrome>
      <div className="absolute inset-0 bg-[#EEF1F7]">
        {/* roads */}
        <div className="absolute left-0 top-[35%] h-[3px] w-full -rotate-6 bg-white" />
        <div className="absolute left-0 top-[62%] h-[3px] w-full rotate-3 bg-white" />
        <div className="absolute left-[40%] top-0 h-full w-[3px] rotate-12 bg-white" />
        <div className="absolute left-[18%] top-0 h-full w-[3px] -rotate-6 bg-white" />
        {dots.map((d, i) => (
          <span
            key={i}
            className={`project-ping absolute h-3.5 w-3.5 rounded-full ring-4 ring-white/80 ${d.c}`}
            style={{ left: d.l, top: d.t, animationDelay: `${i * 180}ms` }}
          />
        ))}
      </div>
      {/* side panel */}
        <div className="absolute bottom-4 right-4 top-4 hidden w-[30%] rounded-2xl border border-line bg-surface p-4 shadow-soft sm:block">
        <div className="h-2.5 w-2/3 rounded-full bg-ink" />
        <div className="mt-4 space-y-3">
          {[80, 56, 68, 34].map((w, i) => (
            <div key={i} className="h-2 rounded-full bg-ink/[0.07]">
              <div className="project-meter h-2 rounded-full bg-accent" style={{ width: `${w}%`, animationDelay: `${i * 140}ms` }} />
            </div>
          ))}
        </div>
        <div className="mt-6 flex items-end gap-1.5">
          {[30, 52, 40, 70, 48, 62].map((h, i) => (
            <div key={i} className="w-full rounded-md bg-accent/25" style={{ height: `${h}px` }} />
          ))}
        </div>
      </div>
    </Chrome>
  );
}

function VolunteerMock() {
  return (
    <Chrome>
      <div className="flex h-full items-start justify-center bg-paper pt-6">
        <div className="project-float-card w-[62%] rounded-2xl border border-line bg-surface p-5 shadow-soft">
          <div className="h-3 w-1/2 rounded-full bg-ink" />
          <div className="mt-2 h-2 w-3/4 rounded-full bg-ink/10" />
          <div className="mt-5 space-y-2.5">
            <div className="h-8 rounded-xl border border-line bg-paper" />
            <div className="h-8 rounded-xl border border-line bg-paper" />
            <div className="h-8 rounded-xl border-2 border-accent/60 bg-surface" />
          </div>
          <div className="mt-4 h-8 rounded-full bg-accent" />
        </div>
      </div>
    </Chrome>
  );
}

function ToolsMock() {
  return (
    <Chrome>
      <div className="h-full bg-paper p-5">
        <div className="grid grid-cols-3 gap-3">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className="project-tool-card rounded-2xl border border-line bg-surface p-3" style={{ animationDelay: `${i * 110}ms` }}>
              <div className={`h-6 w-6 rounded-lg ${i % 3 === 0 ? "bg-accent" : "bg-accent/20"}`} />
              <div className="mt-3 h-2 w-3/4 rounded-full bg-ink/80" />
              <div className="mt-1.5 h-1.5 w-1/2 rounded-full bg-ink/10" />
            </div>
          ))}
        </div>
      </div>
    </Chrome>
  );
}

export default function ProjectMockup({
  project,
  className = "",
}: {
  project: Project;
  className?: string;
}) {
  const previewRef = useRef<HTMLDivElement>(null);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const preview = previewRef.current;
    if (!preview) return;

    const bounds = preview.getBoundingClientRect();
    const x = (event.clientX - bounds.left) / bounds.width - 0.5;
    const y = (event.clientY - bounds.top) / bounds.height - 0.5;
    preview.style.setProperty("--tilt-x", `${y * -7}deg`);
    preview.style.setProperty("--tilt-y", `${x * 9}deg`);
    preview.style.setProperty("--glow-x", `${(x + 0.5) * 100}%`);
    preview.style.setProperty("--glow-y", `${(y + 0.5) * 100}%`);
  };

  const resetTilt = () => {
    const preview = previewRef.current;
    preview?.style.setProperty("--tilt-x", "0deg");
    preview?.style.setProperty("--tilt-y", "0deg");
  };

  return (
    <div
      ref={previewRef}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetTilt}
      className={`project-preview relative w-full overflow-hidden bg-gradient-to-br from-accent-soft via-[#F3F4FA] to-surface ${className}`}
    >
      <div className="project-preview-glow absolute inset-0" aria-hidden="true" />
      {project.video ? (
        <video
          src={project.video}
          poster={project.image}
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-label={`${project.title} demo`}
          className="absolute inset-0 h-full w-full object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : project.image ? (
        <Image
          src={project.image}
          alt={`${project.title} screenshot`}
          fill
          sizes="(min-width: 1024px) 1100px, 100vw"
          className="object-cover object-top transition duration-700 ease-out group-hover:scale-[1.04]"
        />
      ) : (
        <div className="absolute inset-0 transition duration-700 ease-out group-hover:scale-[1.04]" aria-hidden="true">
          {project.slug === "urban-sensing" && <UrbanMock />}
          {project.slug === "volunteer-system" && <VolunteerMock />}
          {project.slug === "devstudenttools" && <ToolsMock />}
          {!["urban-sensing", "volunteer-system", "devstudenttools"].includes(project.slug) && <ToolsMock />}
        </div>
      )}
    </div>
  );
}
