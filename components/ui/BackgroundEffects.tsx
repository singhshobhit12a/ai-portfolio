"use client";

import { useReducedMotion } from "framer-motion";
import { useEffect, useRef } from "react";

export function BackgroundEffects() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) return;
    const el = canvasRef.current;
    if (!el) return;
    const ctx = el.getContext("2d");
    if (!ctx) return;

    const surface: HTMLCanvasElement = el;
    const surfaceCtx: CanvasRenderingContext2D = ctx;

    let raf = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const nodes: { x: number; y: number; vx: number; vy: number }[] = [];
    const count = 42;

    function resize() {
      const { innerWidth: w, innerHeight: h } = window;
      surface.width = w * dpr;
      surface.height = h * dpr;
      surface.style.width = `${w}px`;
      surface.style.height = `${h}px`;
      surfaceCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      nodes.length = 0;
      for (let i = 0; i < count; i++) {
        nodes.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.35,
          vy: (Math.random() - 0.5) * 0.35,
        });
      }
    }

    function step() {
      const w = surface.clientWidth;
      const h = surface.clientHeight;
      surfaceCtx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > w) n.vx *= -1;
        if (n.y < 0 || n.y > h) n.vy *= -1;
      }

      const maxDist = 120;
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d = Math.hypot(dx, dy);
          if (d < maxDist) {
            const alpha = (1 - d / maxDist) * 0.12;
            surfaceCtx.strokeStyle = `rgba(34, 211, 238, ${alpha})`;
            surfaceCtx.lineWidth = 0.5;
            surfaceCtx.beginPath();
            surfaceCtx.moveTo(a.x, a.y);
            surfaceCtx.lineTo(b.x, b.y);
            surfaceCtx.stroke();
          }
        }
      }

      for (const n of nodes) {
        surfaceCtx.fillStyle = "rgba(168, 85, 247, 0.35)";
        surfaceCtx.beginPath();
        surfaceCtx.arc(n.x, n.y, 1.2, 0, Math.PI * 2);
        surfaceCtx.fill();
      }

      raf = requestAnimationFrame(step);
    }

    resize();
    window.addEventListener("resize", resize);
    raf = requestAnimationFrame(step);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, [reduce]);

  if (reduce) return null;

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0 opacity-70"
      aria-hidden
    />
  );
}
