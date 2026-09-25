"use client";

import ScrollReveal from "@/components/ui/ScrollReveal";
import { journey } from "@/lib/data";

export default function Journey() {
  return (
    <section id="journey" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              MY STORY
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            The Journey
          </h2>
          <p className="text-slate-400 text-base mb-16 max-w-xl">
            Every milestone that shaped who I am and how I build today.
          </p>
        </ScrollReveal>

        <div className="relative max-w-3xl mx-auto">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-cyan-500/20 to-transparent" />

          <div className="space-y-10">
            {journey.map((item, i) => {
              const isLeft = i % 2 === 0;
              return (
                <ScrollReveal key={`${item.year}-${i}`} delay={i * 0.1} direction={isLeft ? "left" : "right"}>
                  <div className={`relative flex items-start gap-6 md:gap-0 ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}>
                    {/* Dot */}
                    <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-cyan-400 border-2 border-[#060d1a] shadow-lg shadow-cyan-400/50 -translate-x-1/2 mt-5 z-10" />

                    {/* Spacer for desktop */}
                    <div className="hidden md:block w-1/2" />

                    {/* Card */}
                    <div className={`ml-14 md:ml-0 md:w-1/2 ${isLeft ? "md:pl-10" : "md:pr-10"}`}>
                      <div className="glass-card p-5 border border-white/5 hover:border-cyan-500/20 transition-colors duration-300">
                        <span className="text-xs font-mono text-cyan-400 mb-2 block">{item.year}</span>
                        <h3 className="text-white font-bold text-base mb-2">{item.title}</h3>
                        <p className="text-slate-400 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
