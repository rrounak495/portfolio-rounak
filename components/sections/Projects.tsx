"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { GitHubIcon } from "@/components/ui/BrandIcons";
import { projects } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Badge } from "@/components/ui/Badge";
import { StaggerContainer, StaggerItem } from "@/components/ui/FadeIn";
import { cn } from "@/lib/utils";

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [spotlight, setSpotlight] = useState({ x: 0, y: 0, visible: false });

  const handleMove = (e: React.MouseEvent) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setSpotlight({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
      visible: true,
    });
  };

  return (
    <motion.article
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={() => setSpotlight((s) => ({ ...s, visible: false }))}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02] shadow-[0_4px_32px_-12px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.05)] backdrop-blur-xl"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* Mouse spotlight */}
      {spotlight.visible && (
        <div
          className="pointer-events-none absolute inset-0 z-10 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          style={{
            background: `radial-gradient(500px circle at ${spotlight.x}px ${spotlight.y}px, rgba(139,92,246,0.08), transparent 40%)`,
          }}
        />
      )}

      {/* Animated border glow */}
      <div className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100">
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-500/20 via-transparent to-blue-500/20" />
      </div>

      {/* Header */}
      <div
        className={cn(
          "relative h-52 overflow-hidden bg-gradient-to-br",
          project.gradient,
        )}
      >
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)
            `,
            backgroundSize: "28px 28px",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

        {/* AI node decoration */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-8 top-8 h-16 w-16 rounded-full border border-dashed border-white/10"
        />
        <div className="absolute right-14 top-14 h-2 w-2 rounded-full bg-violet-400/60 shadow-[0_0_12px_rgba(139,92,246,0.6)]" />

        <div className="absolute bottom-7 left-7 right-7">
          <span className="font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-zinc-500">
            0{index + 1} / 04
          </span>
          <h3 className="mt-2 text-2xl font-semibold tracking-[-0.02em] text-white">
            {project.title}
          </h3>
          <p className="mt-1.5 text-sm text-zinc-400">{project.subtitle}</p>
        </div>
      </div>

      {/* Body */}
      <div className="relative p-7 lg:p-8">
        <p className="text-sm leading-[1.75] text-zinc-500 lg:text-[15px]">
          {project.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <Badge key={tech}>{tech}</Badge>
          ))}
        </div>

        <div className="mt-8 flex gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/[0.08] bg-white/[0.03] px-4 py-3 text-sm font-medium text-zinc-300 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300 hover:border-white/[0.15] hover:bg-white/[0.07] hover:text-white"
          >
            <GitHubIcon size={16} />
            GitHub
          </a>
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-medium text-black transition-all duration-300 hover:bg-zinc-100 hover:shadow-[0_0_30px_-6px_rgba(255,255,255,0.4)]"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        </div>
      </div>

      <ArrowUpRight
        size={18}
        className="absolute right-7 top-7 text-white/0 transition-all duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white/50"
      />
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-36 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-950/[0.05] to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Portfolio"
          title="Featured Projects"
          description="Production-grade AI systems and full-stack applications built to solve real-world problems."
        />

        <StaggerContainer className="grid gap-7 lg:grid-cols-2">
          {projects.map((project, index) => (
            <StaggerItem key={project.id}>
              <ProjectCard project={project} index={index} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
