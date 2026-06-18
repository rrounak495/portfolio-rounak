"use client";

import { Trophy, Users } from "lucide-react";
import { achievements } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TiltCard } from "@/components/ui/TiltCard";

const iconMap = {
  trophy: Trophy,
  users: Users,
};

export function Achievements() {
  return (
    <section id="achievements" className="relative py-36 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-amber-950/[0.04] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Recognition"
          title="Achievements"
          description="Leadership and innovation recognized at national hackathons and team competitions."
        />

        <StaggerContainer className="grid gap-6 md:grid-cols-2">
          {achievements.map((achievement, i) => {
            const Icon = iconMap[achievement.icon];
            return (
              <StaggerItem key={achievement.title}>
                <TiltCard intensity={4} float floatDelay={i * 0.5}>
                  <GlassCard className="relative overflow-hidden p-9">
                    <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-amber-500/8 blur-3xl" />
                    <div className="relative">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-amber-500/20 bg-amber-500/10 shadow-[0_0_30px_-8px_rgba(245,158,11,0.35)]">
                        <Icon className="h-6 w-6 text-amber-400" />
                      </div>
                      <h3 className="text-xl font-semibold tracking-tight text-white lg:text-2xl">
                        {achievement.title}
                      </h3>
                      <p className="mt-4 text-sm leading-[1.8] text-zinc-500 lg:text-base">
                        {achievement.description}
                      </p>
                    </div>
                  </GlassCard>
                </TiltCard>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}
