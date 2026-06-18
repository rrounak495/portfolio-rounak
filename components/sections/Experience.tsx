"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Briefcase } from "lucide-react";
import { experiences } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";

export function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative py-36 lg:py-44">
      <div className="pointer-events-none absolute right-0 top-1/3 h-[400px] w-[400px] rounded-full bg-violet-600/5 blur-[100px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Career"
          title="Experience"
          description="Hands-on experience through industry simulations and professional internships."
        />

        <div ref={containerRef} className="relative">
          <StaggerContainer className="relative space-y-0">
            {/* Animated timeline track */}
            <div className="absolute left-[27px] top-0 hidden h-full w-px overflow-hidden bg-white/[0.04] lg:block">
              <motion.div
                style={{ height: lineHeight }}
                className="w-full bg-gradient-to-b from-violet-500/60 via-violet-400/30 to-transparent"
              />
            </div>

            {experiences.map((exp, index) => (
              <StaggerItem key={exp.title}>
                <div className="relative flex gap-6 pb-16 last:pb-0 lg:gap-12">
                  {/* Timeline node */}
                  <div className="relative z-10 hidden shrink-0 lg:block">
                    <motion.div
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                        delay: index * 0.15,
                      }}
                      className="relative"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-violet-500/25 bg-violet-500/10 shadow-[0_0_30px_-8px_rgba(139,92,246,0.4),inset_0_1px_0_0_rgba(255,255,255,0.08)] backdrop-blur-xl">
                        <Briefcase className="h-6 w-6 text-violet-400" />
                      </div>
                      <motion.div
                        animate={{ scale: [1, 1.4, 1], opacity: [0.4, 0, 0.4] }}
                        transition={{ duration: 2.5, repeat: Infinity, delay: index * 0.5 }}
                        className="absolute inset-0 rounded-2xl border border-violet-500/30"
                      />
                    </motion.div>
                  </div>

                  {/* Card */}
                  <motion.div
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="group flex-1 overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04] lg:p-9"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.04] to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                    <div className="relative flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <p className="text-xs font-medium uppercase tracking-[0.15em] text-violet-400/80">
                          {exp.company}
                        </p>
                        <h3 className="mt-2 text-xl font-semibold tracking-tight text-white lg:text-2xl">
                          {exp.title}
                        </h3>
                        <p className="mt-1.5 text-sm text-zinc-600">{exp.type}</p>
                      </div>
                      <span className="shrink-0 self-start rounded-xl border border-white/[0.08] bg-black/40 px-4 py-2 font-mono text-sm text-zinc-400">
                        {exp.period}
                      </span>
                    </div>
                    <p className="relative mt-5 text-sm leading-[1.8] text-zinc-500 lg:text-base">
                      {exp.description}
                    </p>
                  </motion.div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
