"use client";

import { useEffect, useRef } from "react";

/** Lightweight CSS 3D visual. It deliberately avoids a persistent WebGL canvas. */
export default function HeroOrbital() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const onPointerMove = (event: PointerEvent) => {
      const bounds = element.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width - 0.5;
      const y = (event.clientY - bounds.top) / bounds.height - 0.5;
      element.style.setProperty("--orbit-x", `${x * 14}deg`);
      element.style.setProperty("--orbit-y", `${y * -12}deg`);
    };
    const onScroll = () => element.style.setProperty("--orbit-scroll", `${Math.min(window.scrollY * 0.025, 14)}px`);

    window.addEventListener("pointermove", onPointerMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => {
      window.removeEventListener("pointermove", onPointerMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div ref={ref} className="hero-orbital" aria-hidden="true">
      <div className="hero-orbital-halo" />
      <div className="hero-orbital-ring hero-orbital-ring-one" />
      <div className="hero-orbital-ring hero-orbital-ring-two" />
      <div className="hero-orbital-core">
        <span />
        <span />
        <span />
      </div>
      <i className="hero-orbital-particle hero-orbital-particle-one" />
      <i className="hero-orbital-particle hero-orbital-particle-two" />
      <i className="hero-orbital-particle hero-orbital-particle-three" />
    </div>
  );
}
