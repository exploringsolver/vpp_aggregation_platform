"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface WordRotateProps {
  words: string[];
  duration?: number; // seconds per word
  className?: string;
}

export function WordRotate({ words, duration = 2.8, className }: WordRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!words.length) return;
    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, duration * 1000);
    return () => clearInterval(id);
  }, [words, duration]);

  const current = words[index] ?? "";

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.span
          key={current}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-80%", opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="inline-block bg-gradient-to-r from-sky-400 via-sky-300 to-amber-300 bg-clip-text text-transparent"
        >
          {current}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
