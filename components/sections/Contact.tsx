"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Send } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "@/components/ui/BrandIcons";
import { personalInfo } from "@/lib/data";
import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";

const contactLinks = [
  {
    label: "Email",
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: Mail,
  },
  {
    label: "WhatsApp",
    value: "+91 9309775855",
    href: "https://wa.me/919309775855?text=Hi%20Rounak,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect.",
    icon: Send,
    },
    
  {
    label: "GitHub",
    value: "github.com/rrounak495",
    href: personalInfo.github,
    icon: GitHubIcon,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/rounak-rathod-052950251",
    href: personalInfo.linkedin,
    icon: LinkedInIcon,
  },
  {
    label: "Location",
    value: personalInfo.location,
    href: null,
    icon: MapPin,
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative py-36 lg:py-44">
      <div className="absolute inset-0 bg-gradient-to-t from-violet-950/[0.15] via-transparent to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-1/2 h-[300px] w-[600px] -translate-x-1/2 rounded-full bg-violet-600/8 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader
          label="Connect"
          title="Let's build something extraordinary"
          description="Open to AI engineering roles, freelance projects, and collaborations. Reach out — I'd love to hear from you."
          align="center"
          className="mx-auto text-center"
        />

        <FadeIn delay={0.15}>
          <div className="mx-auto max-w-3xl">
            <div className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.025] shadow-[0_8px_48px_-16px_rgba(0,0,0,0.6),inset_0_1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-2xl">
              <div className="grid md:grid-cols-2">
                <div className="space-y-0.5 p-6 lg:p-8">
                  {contactLinks.map((link) => {
                    const Icon = link.icon;
                    const content = (
                      <div className="group flex items-center gap-4 rounded-xl p-4 transition-all duration-300 hover:bg-white/[0.04]">
                        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-white/[0.07] bg-white/[0.03] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.04)] transition-all duration-300 group-hover:border-white/[0.12] group-hover:bg-white/[0.06]">
                          <Icon className="h-5 w-5 text-zinc-500 transition-colors group-hover:text-zinc-300" />
                        </div>
                        <div>
                          <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-zinc-600">
                            {link.label}
                          </p>
                          <p className="mt-1 text-sm text-zinc-300 transition-colors group-hover:text-white">
                            {link.value}
                          </p>
                        </div>
                      </div>
                    );

                    if (link.href) {
                      return (
                        <a
                          key={link.label}
                          href={link.href}
                          target={link.href.startsWith("http") ? "_blank" : undefined}
                          rel={
                            link.href.startsWith("http")
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          {content}
                        </a>
                      );
                    }

                    return <div key={link.label}>{content}</div>;
                  })}
                </div>

                <div className="relative flex flex-col items-center justify-center overflow-hidden border-t border-white/[0.06] p-8 md:border-l md:border-t-0 lg:p-12">
                  <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.08] via-transparent to-blue-500/[0.06]" />
                  <motion.div
                    animate={{ scale: [1, 1.06, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative mb-7 flex h-16 w-16 items-center justify-center rounded-2xl border border-white/[0.1] bg-white/[0.05] shadow-[0_0_40px_-10px_rgba(139,92,246,0.4)]"
                  >
                    <Send className="h-7 w-7 text-violet-400" />
                  </motion.div>
                  <p className="relative mb-7 text-center text-sm leading-relaxed text-zinc-500">
                  Ready to build the future with AI?
                  </p>
                  <Button
  href="https://wa.me/919309775855?text=Hi%20Rounak,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
  size="lg"
>
  <Send size={18} />
  Message on WhatsApp
</Button>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
