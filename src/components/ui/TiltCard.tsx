"use client";

import React, { PropsWithChildren, useEffect, useMemo, useRef } from "react";

type TiltCardProps = PropsWithChildren<{
  className?: string;
  maxTilt?: number; // degrees
}>;

function clamp(n: number, min: number, max: number) {
  return Math.max(min, Math.min(max, n));
}

export function TiltCard({ className, children, maxTilt = 8 }: TiltCardProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const raf = useRef<number | null>(null);

  const reduceMotion = useMemo(() => {
    if (typeof window === "undefined") return false;
    return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches;
  }, []);

  useEffect(() => {
    return () => {
      if (raf.current) cancelAnimationFrame(raf.current);
    };
  }, []);

  function setTransform(xPct: number, yPct: number) {
    const el = ref.current;
    if (!el) return;

    // xPct/yPct are 0..1
    const rx = (0.5 - yPct) * (maxTilt * 2); // invert Y for rotateX
    const ry = (xPct - 0.5) * (maxTilt * 2);

    el.style.setProperty("--rx", `${clamp(rx, -maxTilt, maxTilt)}deg`);
    el.style.setProperty("--ry", `${clamp(ry, -maxTilt, maxTilt)}deg`);
    el.style.setProperty("--mx", `${Math.round(xPct * 100)}%`);
    el.style.setProperty("--my", `${Math.round(yPct * 100)}%`);
    el.setAttribute("data-hover", "true");
  }

  function reset() {
    const el = ref.current;
    if (!el) return;
    el.style.setProperty("--rx", `0deg`);
    el.style.setProperty("--ry", `0deg`);
    el.style.setProperty("--mx", `50%`);
    el.style.setProperty("--my", `45%`);
    el.removeAttribute("data-hover");
  }

  return (
    <div
      ref={ref}
      className={[
        "group relative",
        // 3D base
        "[transform-style:preserve-3d]",
        "[perspective:1200px]",
        // motion / transform
        "transition-[transform,box-shadow] duration-150 ease-out will-change-transform",
        // subtle lift + shadow on hover
        "data-[hover=true]:-translate-y-[6px]",
        "data-[hover=true]:shadow-[0_30px_60px_rgba(0,0,0,0.45)]",
        className ?? "",
      ].join(" ")}
      style={{
        transform:
          "perspective(1200px) rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg))",
      }}
      onMouseMove={(e) => {
        if (reduceMotion) return;
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width;
        const y = (e.clientY - rect.top) / rect.height;

        // throttle with RAF
        if (raf.current) cancelAnimationFrame(raf.current);
        raf.current = requestAnimationFrame(() => setTransform(x, y));
      }}
      onMouseLeave={() => {
        if (reduceMotion) return;
        reset();
      }}
    >
      {/* Reflection layer (very subtle, only on hover) */}
      <div
        aria-hidden
        className={[
          "pointer-events-none absolute inset-0 rounded-[inherit] opacity-0 transition-opacity duration-150",
          "group-data-[hover=true]:opacity-100",
        ].join(" ")}
        style={{
          background:
            "radial-gradient(1200px circle at var(--mx,50%) var(--my,45%), rgba(255,255,255,0.10), transparent 55%)",
        }}
      />

      {children}
    </div>
  );
}

