"use client";

import { Brain, Sparkles } from "lucide-react";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { GlassCard } from "@/components/ui/GlassCard";
import { FadeIn, RevealLine } from "@/components/ui/FadeIn";
import { TiltCard } from "@/components/ui/TiltCard";

export function About() {
  return (
    <section id="about" className="relative py-36 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/[0.06] to-transparent" />
      <RevealLine className="absolute inset-x-0 top-0 mx-auto max-w-6xl" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="About"
          title="Engineering intelligence at scale"
          description="Transforming complex AI research into products that deliver real-world impact."
        />

        <div className="grid gap-8 lg:grid-cols-5 lg:gap-10">
          <FadeIn className="lg:col-span-3" delay={0.1}>
            <TiltCard intensity={4}>
              <GlassCard className="h-full p-9 lg:p-11" glow="rgba(139,92,246,0.2)">
                <p className="text-lg leading-[1.85] text-zinc-300 lg:text-xl lg:leading-[1.85]">
                  {personalInfo.bio}
                </p>
                <div className="mt-10 flex flex-wrap gap-2.5">
                  {[
                    "Production AI",
                    "Scalable Systems",
                    "Computer Vision",
                    "Generative AI",
                  ].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-xl border border-white/[0.07] bg-white/[0.03] px-4 py-2 text-sm text-zinc-400 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </GlassCard>
            </TiltCard>
          </FadeIn>

          <FadeIn className="lg:col-span-2" delay={0.2}>
            <div className="flex h-full flex-col gap-5">
              <TiltCard intensity={5} float floatDelay={0}>
                <GlassCard className="flex-1 p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-violet-500/20 bg-violet-500/10 shadow-[0_0_24px_-8px_rgba(139,92,246,0.4)]">
                    <Brain className="h-5 w-5 text-violet-400" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    AI-First Mindset
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-zinc-500">
                    Designing ML pipelines and AI architectures with production
                    reliability, performance, and maintainability at the core.
                  </p>
                </GlassCard>
              </TiltCard>

              <TiltCard intensity={5} float floatDelay={0.6}>
                <GlassCard className="flex-1 p-7">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-fuchsia-500/20 bg-fuchsia-500/10 shadow-[0_0_24px_-8px_rgba(217,70,239,0.3)]">
                    <Sparkles className="h-5 w-5 text-fuchsia-400" />
                  </div>
                  <h3 className="text-lg font-semibold tracking-tight text-white">
                    GenAI Integration
                  </h3>
                  <p className="mt-3 text-sm leading-[1.75] text-zinc-500">
                    Building intelligent applications powered by LLMs, prompt
                    engineering, and seamless API integrations.
                  </p>
                </GlassCard>
              </TiltCard>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
