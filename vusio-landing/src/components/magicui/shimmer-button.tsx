"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShimmerButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  label: string;
}

export function ShimmerButton({ label, className, ...props }: ShimmerButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative inline-flex items-center justify-center overflow-hidden rounded-full border border-sky-300/60 bg-sky-500/90 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-[0_0_40px_rgba(56,189,248,0.8)] backdrop-blur focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/80",
        className,
      )}
      {...props}
    >
      <span className="relative z-10">{label}</span>
      <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(255,255,255,0.7),transparent_55%)] opacity-60" />
      <motion.span
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-[-40%] w-1/2 bg-gradient-to-r from-transparent via-white/60 to-transparent opacity-70 mix-blend-overlay"
        animate={{ x: ["-50%", "130%"] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.button>
  );
}
