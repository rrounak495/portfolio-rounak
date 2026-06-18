"use client";

import {
  Brain,
  Code2,
  Database,
  Layers,
  Sparkles,
  Wrench,
} from "lucide-react";
import { skillCategories } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { TiltCard } from "@/components/ui/TiltCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

const iconMap = {
  brain: Brain,
  code: Code2,
  layers: Layers,
  sparkles: Sparkles,
  database: Database,
  wrench: Wrench,
};

export function Skills() {
  return (
    <section id="skills" className="relative py-36 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/[0.06] to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Expertise"
          title="Skills & Technologies"
          description="A comprehensive toolkit spanning AI research, full-stack development, and modern DevOps practices."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon];
            return (
              <StaggerItem key={category.title}>
                <TiltCard
                  intensity={6}
                  float
                  floatDelay={index * 0.4}
                  className="h-full"
                >
                  <div
                    className={cn(
                      "group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-6 backdrop-blur-2xl transition-all duration-500",
                      "shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.05)]",
                      "hover:border-white/[0.14] hover:bg-white/[0.04] hover:shadow-[0_8px_40px_-12px_rgba(139,92,246,0.15)]",
                    )}
                  >
                    <div
                      className={cn(
                        "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                        category.gradient,
                      )}
                    />

                    <div className="relative">
                      <div className="mb-5 flex items-center gap-3">
                        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)]">
                          <Icon className={cn("h-5 w-5", category.accent)} />
                        </div>
                        <h3 className="text-lg font-semibold tracking-tight text-white">
                          {category.title}
                        </h3>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {category.skills.map((skill) => (
                          <span
                            key={skill}
                            className="rounded-lg border border-white/[0.06] bg-black/30 px-3 py-1.5 text-sm text-zinc-400 transition-all duration-300 group-hover:border-white/[0.1] group-hover:text-zinc-300"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
