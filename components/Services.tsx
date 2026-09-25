"use client";

import { Bot, Workflow, Plug, MessageSquare, BarChart2, Video } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import { services } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot size={22} className="text-cyan-400" />,
  workflow: <Workflow size={22} className="text-cyan-400" />,
  plug: <Plug size={22} className="text-cyan-400" />,
  "message-square": <MessageSquare size={22} className="text-cyan-400" />,
  "bar-chart": <BarChart2 size={22} className="text-cyan-400" />,
  video: <Video size={22} className="text-cyan-400" />,
};

export default function Services() {
  return (
    <section id="services" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              WHAT I OFFER
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Services
          </h2>
          <p className="text-slate-400 text-base mb-16 max-w-xl">
            Practical, intelligent solutions built around your business goals. No fluff, just systems that work.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ScrollReveal key={service.title} delay={i * 0.08}>
              <GlowCard className="h-full flex flex-col gap-4">
                <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                  {iconMap[service.icon]}
                </div>
                <h3 className="text-white font-bold text-base">{service.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed flex-1">{service.description}</p>
                <div className="pt-3 border-t border-white/5">
                  <span className="text-xs font-mono text-cyan-400/60">
                    MODULE {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
              </GlowCard>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
