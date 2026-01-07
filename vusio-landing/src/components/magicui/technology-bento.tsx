"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function BentoGrid({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "grid gap-4 md:grid-cols-2 xl:grid-cols-4",
        className,
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.01 }}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-3xl border border-slate-800/80 bg-slate-900/70 p-4 shadow-[0_18px_60px_rgba(15,23,42,0.9)]",
        className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-sky-500/5 via-transparent to-amber-400/5 opacity-0 transition group-hover:opacity-100" />
      <div className="relative z-10 h-full">{children}</div>
    </motion.div>
  );
}

export function Terminal({ code }: { code: string }) {
  return (
    <div className="h-full rounded-2xl bg-slate-950/70 p-3 text-xs font-mono text-slate-100">
      <div className="mb-2 flex items-center gap-1">
        <span className="h-2 w-2 rounded-full bg-red-500/80" />
        <span className="h-2 w-2 rounded-full bg-amber-400/80" />
        <span className="h-2 w-2 rounded-full bg-emerald-400/80" />
        <span className="ml-2 text-[10px] text-slate-400">vusio@edge-node:~</span>
      </div>
      <pre className="whitespace-pre-wrap text-[11px] leading-relaxed text-slate-100/90">
        {code}
      </pre>
    </div>
  );
}

export function NumberTicker({
  value,
  label,
}: {
  value: string;
  label: string;
}) {
  return (
    <div className="flex h-full flex-col justify-between gap-3">
      <div>
        <p className="text-xs font-medium text-slate-400">{label}</p>
        <p className="mt-2 bg-gradient-to-r from-emerald-400 via-sky-400 to-amber-300 bg-clip-text text-3xl font-semibold text-transparent">
          {value}
        </p>
      </div>
      <p className="text-[11px] text-slate-400/90">
        Revenue share from grid services, frequency support, and demand response
        for data center operators.
      </p>
    </div>
  );
}

export function IconCloud() {
  const icons = ["Kubernetes", "Docker", "Solar", "Battery", "Server", "Azure", "AWS", "Python"];
  return (
    <div className="flex h-full flex-col items-center justify-center gap-4">
      <div className="relative h-32 w-32">
        <div className="absolute inset-0 rounded-full bg-slate-900/80" />
        <motion.div
          className="absolute inset-3 rounded-full border border-sky-400/30"
          animate={{ rotate: 360 }}
          transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute inset-6 rounded-full border border-amber-300/20"
          animate={{ rotate: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-0 flex items-center justify-center text-[11px] text-slate-200">
          Vusio Stack
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-1 text-[10px] text-slate-400">
        {icons.map((icon) => (
          <span
            key={icon}
            className="rounded-full border border-slate-700/70 bg-slate-900/80 px-2 py-0.5"
          >
            {icon}
          </span>
        ))}
      </div>
    </div>
  );
}

export function PulsatingStatus({ label }: { label: string }) {
  return (
    <button className="relative inline-flex items-center gap-2 rounded-full border border-emerald-400/50 bg-emerald-500/20 px-4 py-2 text-[11px] font-medium text-emerald-200 shadow-[0_0_24px_rgba(34,197,94,0.6)]">
      <span className="relative flex h-2 w-2">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400/70 opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
      </span>
      {label}
    </button>
  );
}
