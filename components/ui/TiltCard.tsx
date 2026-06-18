"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  intensity?: number;
  float?: boolean;
  floatDelay?: number;
}

export function TiltCard({
  children,
  className,
  intensity = 8,
  float = false,
  floatDelay = 0,
}: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [intensity, -intensity]), {
    stiffness: 300,
    damping: 30,
  });
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-intensity, intensity]), {
    stiffness: 300,
    damping: 30,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    setHovering(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovering(true)}
      onMouseLeave={handleLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        perspective: 1000,
      }}
      animate={
        float
          ? { y: [0, -8, 0] }
          : undefined
      }
      transition={
        float
          ? { duration: 5 + floatDelay, repeat: Infinity, ease: "easeInOut", delay: floatDelay }
          : undefined
      }
      className={cn("relative", className)}
    >
      {hovering && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] opacity-60 transition-opacity"
          style={{
            background: `radial-gradient(400px circle at ${(x.get() + 0.5) * 100}% ${(y.get() + 0.5) * 100}%, rgba(139,92,246,0.15), transparent 40%)`,
          }}
        />
      )}
      <div style={{ transform: "translateZ(20px)" }}>{children}</div>
    </motion.div>
  );
}
