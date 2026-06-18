"use client";

import { motion } from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { AIOrbitalVisual } from "@/components/ui/AIOrbitalVisual";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";

const titleParts = personalInfo.title.split("|").map((s) => s.trim());

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: 40, filter: "blur(12px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export function Hero() {
  const [firstName, lastName] = personalInfo.name.split(" ");

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 mx-auto flex w-full max-w-6xl items-center gap-12 px-6 pt-28 pb-24 lg:px-8 lg:pt-36 lg:pb-32">
        <div className="flex-1">
          <motion.div
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mb-10 flex justify-center sm:justify-start"
          >
            <Badge variant="accent" className="px-4 py-2">
              <span className="relative mr-2.5 flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Available for opportunities
            </Badge>
          </motion.div>

          {/* Display name */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="overflow-hidden"
          >
            <div className="flex flex-col">
              <motion.span
                variants={wordVariants}
                className="text-center text-[clamp(3rem,8vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-left"
              >
                {firstName}
              </motion.span>
              <motion.span
                variants={wordVariants}
                className="gradient-text text-center text-[clamp(3rem,8vw,5rem)] font-semibold leading-[0.95] tracking-[-0.04em] sm:text-left"
              >
                {lastName}
              </motion.span>
            </div>
          </motion.div>

          {/* Role tags — Linear-style */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-2 sm:justify-start"
          >
            {titleParts.map((part, i) => (
              <span key={part} className="flex items-center gap-2">
                <span
                  className={
                    i === 0
                      ? "rounded-lg border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 font-mono text-sm text-violet-300"
                      : "rounded-lg border border-white/[0.06] bg-white/[0.03] px-3 py-1.5 font-mono text-sm text-zinc-400"
                  }
                >
                  {part}
                </span>
                {i < titleParts.length - 1 && (
                  <span className="hidden text-zinc-700 sm:inline">/</span>
                )}
              </span>
            ))}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 24, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 max-w-xl text-center text-base leading-[1.75] text-zinc-500 sm:text-left sm:text-lg"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 flex flex-col items-center gap-3 sm:flex-row sm:items-start"
          >
            <Button href="#projects" size="lg">
              View Projects
            </Button>
            <Button href={personalInfo.resumeUrl} variant="secondary" size="lg" download>
              <Download size={18} />
              Download Resume
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              <Mail size={18} />
              Contact Me
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.8 }}
            className="mt-28 flex justify-center sm:justify-start"
          >
            <a
              href="#about"
              className="group flex flex-col items-center gap-2.5 text-zinc-600 transition-colors hover:text-zinc-400"
            >
              <span className="text-[10px] font-medium uppercase tracking-[0.3em]">
                Explore
              </span>
              <motion.span
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                className="flex h-8 w-5 items-start justify-center rounded-full border border-white/[0.1] p-1"
              >
                <span className="h-1.5 w-1 rounded-full bg-zinc-500" />
              </motion.span>
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, filter: "blur(20px)" }}
          animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ duration: 1, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="hidden flex-1 justify-end xl:flex"
        >
          <AIOrbitalVisual />
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
}
