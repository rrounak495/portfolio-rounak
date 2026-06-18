"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks, personalInfo } from "@/lib/data";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 },
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 lg:px-6"
      >
        <nav
          className={cn(
            "mx-auto flex max-w-5xl items-center justify-between rounded-2xl border px-4 py-2.5 transition-all duration-500 lg:px-5",
            scrolled
              ? "border-white/[0.08] bg-black/60 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.8),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-2xl"
              : "border-white/[0.04] bg-black/20 backdrop-blur-xl",
          )}
        >
          <a
            href="#"
            className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white"
          >
            <span className="relative flex h-8 w-8 items-center justify-center overflow-hidden rounded-lg border border-white/[0.1] bg-white/[0.05] text-[11px] font-bold transition-all duration-300 group-hover:border-violet-500/40 group-hover:shadow-[0_0_20px_-4px_rgba(139,92,246,0.4)]">
              <span className="absolute inset-0 bg-gradient-to-br from-violet-500/20 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <span className="relative">RR</span>
            </span>
            <span className="hidden text-zinc-300 transition-colors group-hover:text-white sm:inline">
              {personalInfo.name.split(" ")[0]}
            </span>
          </a>

          <div className="hidden items-center gap-0.5 md:flex">
            {navLinks.map((link) => {
              const id = link.href.replace("#", "");
              const isActive = activeSection === id;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-3.5 py-2 text-[13px] font-medium transition-colors duration-300",
                    isActive ? "text-white" : "text-zinc-500 hover:text-zinc-300",
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 rounded-lg border border-white/[0.08] bg-white/[0.06]"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span className="relative">{link.label}</span>
                </a>
              );
            })}
          </div>

          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-xl border border-white/[0.1] bg-white/[0.06] px-4 py-2 text-[13px] font-medium text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)] transition-all duration-300 hover:border-white/[0.18] hover:bg-white/[0.1] md:inline-flex"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            Get in Touch
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/[0.08] bg-white/[0.04] text-zinc-300 transition-colors hover:bg-white/[0.08] md:hidden"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={17} /> : <Menu size={17} />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black/90 backdrop-blur-md md:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 32, stiffness: 320 }}
              className="absolute right-0 top-0 flex h-full w-[300px] flex-col border-l border-white/[0.06] bg-black/95 p-8 pt-28"
              onClick={(e) => e.stopPropagation()}
            >
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="border-b border-white/[0.05] py-4 text-base text-zinc-400 transition-colors hover:text-white"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                onClick={() => setMobileOpen(false)}
                className="mt-6 rounded-xl border border-white/[0.1] bg-white/[0.06] px-5 py-3 text-center text-sm font-medium text-white"
              >
                Get in Touch
              </motion.a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
