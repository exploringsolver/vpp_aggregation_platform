"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function TextReveal({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      initial={{ y: 24, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="text-2xl font-semibold tracking-tight text-slate-50 sm:text-3xl"
    >
      {children}
    </motion.h2>
  );
}

export function SafariMockup({ children }: { children: ReactNode }) {
  return (
    <div className="relative w-full max-w-4xl overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-950/80 shadow-[0_24px_90px_rgba(15,23,42,0.95)]">
      <div className="flex items-center gap-1 border-b border-slate-800/80 bg-slate-950/90 px-4 py-2 text-xs text-slate-400">
        <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
        <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
        <span className="ml-3 rounded-full bg-slate-900/90 px-2 py-0.5 text-[10px] text-slate-500">
          vusio.grid | Sovereign Grid Resilience
        </span>
      </div>
      <BorderBeam />
      <div className="relative h-[260px] bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950/80 p-4">
        {children}
      </div>
    </div>
  );
}

export function BorderBeam() {
  return (
    <motion.div
      aria-hidden
      className="pointer-events-none absolute inset-0 rounded-3xl border border-slate-800/80"
    >
      <motion.div
        className="absolute inset-0 rounded-3xl border-2 border-transparent"
        animate={{
          background:
            [
              "conic-gradient(from_0deg_at_50%_50%,rgba(56,189,248,0.3),transparent,rgba(251,191,36,0.3),transparent,rgba(56,189,248,0.3))",
              "conic-gradient(from_360deg_at_50%_50%,rgba(56,189,248,0.3),transparent,rgba(251,191,36,0.3),transparent,rgba(56,189,248,0.3))",
            ],
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
        style={{ mask: "linear-gradient(#000,transparent 30%,transparent 70%,#000)" }}
      />
    </motion.div>
  );
}

export function ParticlesBackground() {
  const particles = Array.from({ length: 30 }, (_, index) => ({
    x: `${(index * 13) % 100}%`,
    duration: 10 + (index % 5),
    delay: (index % 7) * 0.6,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-emerald-400/80 shadow-[0_0_20px_rgba(52,211,153,0.8)]"
          initial={{ x: p.x, y: "110%", opacity: 0 }}
          animate={{ y: ["110%", "-10%"], opacity: [0, 1, 0] }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export function MagicCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-slate-900/70 p-5 shadow-[0_18px_60px_rgba(15,23,42,0.9)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.28),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(251,191,36,0.22),transparent_55%)] opacity-70" />
      <div className="relative z-10 space-y-2">
        <h3 className="text-sm font-semibold text-slate-50">{title}</h3>
        <p className="text-xs text-slate-200/90">{children}</p>
      </div>
    </div>
  );
}

export function Meteors() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px w-32 bg-gradient-to-r from-transparent via-sky-400/80 to-transparent opacity-0"
          initial={{
            x: `${-20 - i * 40}%`,
            y: `${i * 15}%`,
          }}
          animate={{
            x: ["-20%", "130%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + i,
            delay: i * 1.2,
            repeat: Infinity,
            ease: "easeOut",
          }}
        />
      ))}
    </div>
  );
}

export function SparklesText({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="bg-gradient-to-r from-sky-400 via-slate-50 to-amber-300 bg-clip-text text-center text-2xl font-semibold tracking-tight text-transparent sm:text-3xl"
    >
      {children}
    </motion.h2>
  );
}

export function Marquee({ logos }: { logos: string[] }) {
  return (
    <div className="relative mt-6 overflow-hidden">
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-slate-950 via-slate-950/80 to-transparent" />
      <motion.div
        className="flex gap-10 whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      >
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo}-${i}`}
            className="flex items-center justify-center text-sm font-medium text-slate-500"
          >
            <span className="rounded-full bg-slate-900/80 px-4 py-1 text-slate-400">
              {logo}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function AvatarCircles({ reviews }: { reviews: { name: string; role: string; quote: string }[] }) {
  return (
    <div className="mt-6 flex flex-wrap justify-center gap-4">
      {reviews.map((review) => (
        <motion.div
          key={review.name}
          whileHover={{ scale: 1.05 }}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-tr from-sky-500 to-emerald-400 text-xs font-semibold text-slate-950"
        >
          {review.name[0]}
          <div className="pointer-events-none absolute left-1/2 top-full z-20 mt-3 hidden w-64 -translate-x-1/2 rounded-2xl border border-slate-700/80 bg-slate-950/95 p-3 text-left shadow-xl group-hover:block">
            <p className="text-[11px] font-medium text-slate-100">{review.name}</p>
            <p className="text-[10px] text-slate-400">{review.role}</p>
            <p className="mt-2 text-[11px] text-slate-200/90">“{review.quote}”</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

export function WarpBackground({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.35),transparent_55%),repeating-linear-gradient(120deg,rgba(15,23,42,0.2)_0,rgba(15,23,42,0.2)_2px,transparent_3px,transparent_5px)]",
        className,
      )}
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(15,23,42,0),rgba(15,23,42,0.9))]"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}

export function HyperText({ children }: { children: ReactNode }) {
  return (
    <motion.h2
      initial={{ letterSpacing: "0.2em", opacity: 0 }}
      whileInView={{ letterSpacing: "0.05em", opacity: 1 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="relative z-10 text-center text-sm font-semibold uppercase tracking-[0.2em] text-sky-300 sm:text-base"
    >
      {children}
    </motion.h2>
  );
}

export function RainbowButton({ label }: { label: string }) {
  return (
    <motion.button
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
      className="relative inline-flex items-center justify-center overflow-hidden rounded-full bg-[conic-gradient(from_0deg,rgba(56,189,248,0.85),rgba(251,191,36,0.9),rgba(45,212,191,0.9),rgba(56,189,248,0.85))] p-[1px] shadow-[0_0_40px_rgba(56,189,248,0.8)]"
    >
      <span className="relative z-10 rounded-full bg-slate-950 px-6 py-2 text-sm font-semibold text-sky-100">
        {label}
      </span>
    </motion.button>
  );
}

export function InteractiveHoverButton({
  primary,
  hover,
}: {
  primary: string;
  hover: string;
}) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      className="relative inline-flex items-center justify-center overflow-hidden rounded-full border border-slate-600/80 bg-slate-900/80 px-6 py-2 text-sm font-medium text-slate-100"
    >
      <span className="relative z-10 group-hover:hidden">{primary}</span>
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-500/10 via-emerald-400/10 to-amber-300/10" />
      <motion.span
        className="absolute inset-0 flex items-center justify-center text-sm font-medium text-sky-200"
        initial={{ opacity: 0 }}
        whileHover={{ opacity: 1 }}
      >
        {hover}
      </motion.span>
    </motion.button>
  );
}

export function DottedMap() {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 flex justify-center">
      <div className="h-32 w-full max-w-xl bg-[radial-gradient(circle_at_center,rgba(148,163,184,0.35),transparent_60%)] opacity-30 [mask-image:radial-gradient(circle_at_center,black,transparent_70%)]" />
    </div>
  );
}
