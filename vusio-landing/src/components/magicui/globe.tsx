"use client";

import { useEffect, useRef } from "react";
import createGlobe from "cobe";
import { cn } from "@/lib/utils";

interface GlobeProps {
  className?: string;
}

export function Globe({ className }: GlobeProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    let phi = 1.2; // rotation
    if (!canvasRef.current) return;

    const globe = createGlobe(canvasRef.current, {
      devicePixelRatio: 2,
      width: 600 * 2,
      height: 600 * 2,
      phi,
      theta: 0.35,
      dark: 1,
      diffuse: 1.2,
      mapSamples: 16000,
      mapBrightness: 1.2,
      baseColor: [10 / 255, 20 / 255, 40 / 255],
      markerColor: [56 / 255, 189 / 255, 248 / 255],
      glowColor: [56 / 255, 189 / 255, 248 / 255],
      offset: [0, 0],
      markers: [
        // Approx markers for major metros
        { location: [19.076, 72.8777], size: 0.13 }, // Mumbai
        { location: [13.0827, 80.2707], size: 0.12 }, // Chennai
        { location: [17.385, 78.4867], size: 0.11 }, // Hyderabad
      ],
      onRender: (state) => {
        state.phi = phi;
        phi += 0.003;
      },
    });

    return () => {
      globe.destroy();
    };
  }, []);

  return (
    <div
      className={cn(
        "relative flex h-[260px] w-[260px] items-center justify-center rounded-full bg-[radial-gradient(circle_at_30%_0%,rgba(56,189,248,0.4),transparent_55%),radial-gradient(circle_at_bottom,rgba(249,115,22,0.3),transparent_60%)] shadow-[0_0_80px_rgba(56,189,248,0.5)]",
        className,
      )}
    >
      <canvas
        ref={canvasRef}
        className="h-[220px] w-[220px] rounded-full bg-transparent"
      />
      {/* Orbiting circles */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-4 rounded-full border border-sky-400/20" />
        <div className="absolute inset-1 rounded-full border border-amber-300/20" />
      </div>
    </div>
  );
}
