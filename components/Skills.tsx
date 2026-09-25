"use client";

import { Bot, Code2, Wrench, Sparkles } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import GlowCard from "@/components/ui/GlowCard";
import { skills } from "@/lib/data";

const iconMap: Record<string, React.ReactNode> = {
  bot: <Bot size={20} className="text-cyan-400" />,
  code: <Code2 size={20} className="text-cyan-400" />,
  wrench: <Wrench size={20} className="text-cyan-400" />,
  sparkles: <Sparkles size={20} className="text-cyan-400" />,
};

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              WHAT I KNOW
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Skills and Technologies
          </h2>
          <p className="text-slate-400 text-base mb-16 max-w-xl">
            Tools and technologies I work with daily to build intelligent systems and automation pipelines.
          </p>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 gap-6">
          {skills.map((group, i) => (
            <ScrollReveal key={group.category} delay={i * 0.1}>
              <GlowCard className="h-full">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    {iconMap[group.icon]}
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-base">{group.category}</h3>
                    <p className="text-slate-500 text-xs font-mono">{group.items.length} competencies</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-5">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="px-3 py-1.5 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-slate-300 hover:border-cyan-500/40 hover:text-cyan-400 hover:bg-cyan-500/5 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-slate-500 text-xs">Verified Stack</span>
                  <span className="text-emerald-400 text-xs font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Active Practice
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
