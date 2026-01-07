"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/lib/utils";

const items = [
  { label: "Mission", href: "#mission" },
  { label: "Technology", href: "#technology" },
  { label: "Impact", href: "#impact" },
  { label: "Demo", href: "#demo" },
  { label: "Contact", href: "#contact" },
];

export function Dock({ className }: { className?: string }) {
  return (
    <motion.nav
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut", delay: 0.6 }}
      className={cn(
        "fixed inset-x-0 bottom-6 z-40 flex items-center justify-center",
        className,
      )}
    >
      <div className="flex items-center gap-2 rounded-3xl border border-slate-700/60 bg-slate-900/80 px-3 py-2 shadow-[0_18px_60px_rgba(15,23,42,0.9)] backdrop-blur-xl">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="group relative flex items-center justify-center rounded-2xl px-3 py-1.5 text-xs font-medium text-slate-200 transition hover:bg-slate-800/70"
          >
            <span className="relative z-10">{item.label}</span>
            <span className="pointer-events-none absolute inset-0 -z-0 rounded-2xl bg-gradient-to-tr from-sky-500/0 via-sky-500/20 to-amber-400/0 opacity-0 blur-xl transition group-hover:opacity-100" />
          </Link>
        ))}
      </div>
    </motion.nav>
  );
}
