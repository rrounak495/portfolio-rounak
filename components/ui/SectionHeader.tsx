"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  className?: string;
  align?: "left" | "center";
}

export function SectionHeader({
  label,
  title,
  description,
  className,
  align = "left",
}: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "mb-20 max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      <div
        className={cn(
          "mb-4 flex items-center gap-3",
          align === "center" && "justify-center",
        )}
      >
        <span className="h-px w-8 bg-gradient-to-r from-violet-500/60 to-transparent" />
        <p className="text-xs font-medium uppercase tracking-[0.25em] text-violet-400/90">
          {label}
        </p>
      </div>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl lg:text-5xl lg:leading-[1.08]">
        {title}
      </h2>
      {description && (
        <p className="mt-5 text-base leading-relaxed text-zinc-500 sm:text-lg">
          {description}
        </p>
      )}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        className={cn(
          "mt-6 h-px max-w-[120px] origin-left bg-gradient-to-r from-violet-500/40 via-white/10 to-transparent",
          align === "center" && "mx-auto origin-center",
        )}
      />
    </motion.div>
  );
}
