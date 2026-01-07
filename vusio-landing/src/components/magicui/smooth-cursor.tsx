"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export function SmoothCursor() {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const trailX = useSpring(cursorX, { stiffness: 120, damping: 18, mass: 0.4 });
  const trailY = useSpring(cursorY, { stiffness: 120, damping: 18, mass: 0.4 });

  useEffect(() => {
    const move = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [cursorX, cursorY]);

  return (
    <>
      {/* Core cursor */}
      <motion.div
        className="pointer-events-none fixed z-[60] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/70 bg-sky-400/20 shadow-[0_0_40px_rgba(56,189,248,0.6)] mix-blend-screen"
        style={{ x: cursorX, y: cursorY }}
      />
      {/* Electric trail */}
      <motion.div
        className="pointer-events-none fixed z-[59] h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-500/10 blur-xl"
        style={{ x: trailX, y: trailY }}
      />
    </>
  );
}
