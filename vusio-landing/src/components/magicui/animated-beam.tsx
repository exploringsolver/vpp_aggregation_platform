"use client";

import { motion } from "framer-motion";
import { ReactNode, useRef } from "react";

interface EndpointProps {
  children: ReactNode;
  label: string;
}

function Endpoint({ children, label }: EndpointProps) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-800/80 ring-1 ring-slate-600/80">
        {children}
      </div>
      <span className="text-xs text-slate-300/80">{label}</span>
    </div>
  );
}

export function AnimatedBeam() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={containerRef}
      className={"relative flex flex-col items-center gap-6 rounded-3xl bg-slate-900/70 px-6 py-6 shadow-[0_24px_80px_rgba(15,23,42,0.9)]"}
    >
      <div className="flex w-full items-center justify-between gap-4">
        <Endpoint label="Grid Stress">
          <span className="h-6 w-6 rounded-md bg-gradient-to-tr from-red-500 to-amber-500 text-xs font-bold text-white shadow-lg shadow-red-500/50" />
        </Endpoint>
        <Endpoint label="Vusio Orchestrator">
          <span className="h-6 w-6 rounded-md bg-gradient-to-tr from-sky-400 to-emerald-400 text-xs font-bold text-slate-900 shadow-lg shadow-sky-400/50" />
        </Endpoint>
        <Endpoint label="Data Center">
          <span className="h-6 w-6 rounded-md bg-gradient-to-tr from-emerald-400 to-lime-300 text-xs font-bold text-slate-900 shadow-lg shadow-emerald-400/50" />
        </Endpoint>
      </div>
      <div className="relative mt-2 h-10 w-full max-w-xl">
        <motion.div
          className="absolute left-0 right-0 top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-red-500/60 via-amber-400/70 to-emerald-400/70 opacity-70"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 h-2 w-10 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_22px_rgba(251,191,36,0.9)]"
          animate={{ x: ["0%", "45%", "90%"], backgroundColor: ["#ef4444", "#fbbf24", "#22c55e"] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <p className="mt-2 max-w-xl text-center text-xs text-slate-300/80">
        Real-time orchestration shifts workloads and battery dispatch from stressed grid nodes into
        stabilized, revenue-generating virtual power plants.
      </p>
    </div>
  );
}
