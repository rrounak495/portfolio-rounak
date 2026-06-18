"use client";

import { useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
} from "framer-motion";

export function MouseGradient() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.5 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [x, y]);

  return (
    <div className="pointer-events-none fixed inset-0 z-[1] overflow-hidden">
      <motion.div
        className="absolute h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40"
        style={{
          left: springX,
          top: springY,
          background:
            "radial-gradient(circle, rgba(139,92,246,0.12) 0%, rgba(59,130,246,0.06) 35%, transparent 70%)",
        }}
      />
      <motion.div
        className="absolute h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30"
        style={{
          left: springX,
          top: springY,
          background:
            "radial-gradient(circle, rgba(236,72,153,0.08) 0%, transparent 60%)",
        }}
      />
    </div>
  );
}
