"use client";

import { Award } from "lucide-react";
import { certifications } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { TiltCard } from "@/components/ui/TiltCard";
import { cn } from "@/lib/utils";

export function Certifications() {
  return (
    <section id="certifications" className="relative py-36 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-violet-950/[0.05] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Credentials"
          title="Certifications"
          description="Industry-recognized certifications validating expertise across cloud, AI, and data science."
        />

        <StaggerContainer className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => (
            <StaggerItem key={cert.title}>
              <TiltCard intensity={5}>
                <div className="group relative overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] p-7 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5),inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-2xl transition-all duration-500 hover:border-white/[0.12]">
                  <div
                    className={cn(
                      "absolute inset-0 bg-gradient-to-br opacity-0 transition-opacity duration-500 group-hover:opacity-100",
                      cert.gradient,
                    )}
                  />

                  <div className="relative">
                    <div className="mb-5 flex items-center justify-between">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 shadow-[0_0_20px_-8px_rgba(245,158,11,0.3)]">
                        <Award className="h-5 w-5 text-amber-400" />
                      </div>
                      <span className="font-mono text-xs text-zinc-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="text-base font-semibold leading-snug tracking-tight text-white lg:text-lg">
                      {cert.title}
                    </h3>
                    <p className="mt-2.5 text-sm text-zinc-600">{cert.issuer}</p>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
