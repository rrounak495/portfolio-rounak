"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  glow?: string;
}

export function GlassCard({
  children,
  className,
  hover = true,
  glow,
}: GlassCardProps) {
  return (
    <motion.div
      whileHover={hover ? { y: -3 } : undefined}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] backdrop-blur-2xl",
        "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.06)]",
        "before:absolute before:inset-0 before:bg-gradient-to-b before:from-white/[0.05] before:to-transparent before:opacity-0 before:transition-opacity before:duration-500",
        hover &&
          "hover:border-white/[0.12] hover:bg-white/[0.04] hover:before:opacity-100",
        glow && "hover:shadow-[0_8px_48px_-12px]",
        className,
      )}
      style={glow ? { ["--tw-shadow-color" as string]: glow } : undefined}
    >
      <div className="relative z-10">{children}</div>
    </motion.div>
  );
}
