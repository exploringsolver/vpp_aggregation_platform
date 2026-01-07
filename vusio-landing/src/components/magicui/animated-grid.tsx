"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface AnimatedGridProps {
  className?: string;
}

export function AnimatedGrid({ className }: AnimatedGridProps) {
  return (
    <div
      className={cn(
        "pointer-events-none fixed inset-0 z-0 overflow-hidden bg-slate-950",
        className,
      )}
    >
      <motion.div
        aria-hidden
        className="absolute inset-[-40%] bg-[radial-gradient(circle_at_1px_1px,#020617_1px,transparent_0)] opacity-40 [background-size:32px_32px]"
        animate={{
          opacity: [0.15, 0.25, 0.15],
          y: [0, -10, 0],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.25),transparent_60%),radial-gradient(circle_at_bottom,_rgba(249,115,22,0.1),transparent_60%)] mix-blend-screen"
        animate={{ opacity: [0.2, 0.35, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
