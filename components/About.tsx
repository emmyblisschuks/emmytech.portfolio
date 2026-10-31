"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { siteConfig } from "@/lib/data";
import { MapPin, Mail, GraduationCap, Briefcase } from "lucide-react";


const stats = [
  { label: "Projects Built", value: "7+" },
  { label: "Automation Tools", value: "3+" },
  { label: "AI Systems", value: "5+" },
  { label: "Years Learning", value: "2+" },
];

export default function About() {
  return (
    <section id="about" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              WHO I AM
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-16 tracking-tight">
            About Me
          </h2>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Photo side */}
          <ScrollReveal direction="left">
            <div className="relative mx-auto w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-xl" />
              <div className="relative w-full h-full rounded-2xl overflow-hidden border border-cyan-500/20">
                <Image
                  src="/photo.jpg"
                  alt="Chukwu Chidera Emmanuel"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#060d1a]/60 via-transparent to-transparent" />
              </div>

              {/* Floating stat card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-5 -right-5 glass-card px-5 py-3 border border-cyan-500/30"
              >
                <p className="text-2xl font-black text-cyan-400">7+</p>
                <p className="text-xs text-slate-400 font-medium">Projects Delivered</p>
              </motion.div>
            </div>
          </ScrollReveal>

          {/* Text side */}
          <ScrollReveal direction="right">
            <div className="space-y-6">
        <p className="text-slate-300 text-base leading-relaxed">
  I am a self-taught AI and Automation specialist based in Lagos, Nigeria. My work sits at the
  intersection of intelligent systems and practical business operations. I build things that actually
  work in the real world, not just demos.
</p>
<p className="text-slate-400 text-base leading-relaxed">
  I work remotely as a Growth Marketer and Automation Analyst at TavCorp, designing workflows that
  power marketing and business operations.
</p>
<p className="text-slate-400 text-base leading-relaxed">
  I graduated from TSAcademy's AI and Automation programme on a scholarship, and I am studying Computer Science at the
  National Open University of Nigeria. Everything I build comes from a genuine obsession with making
  systems smarter and processes leaner.
</p>


              {/* Info cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-3 glass-card px-4 py-3">
                  <MapPin size={16} className="text-cyan-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{siteConfig.location}</span>
                </div>
                <div className="flex items-center gap-3 glass-card px-4 py-3">
                  <Mail size={16} className="text-cyan-400 shrink-0" />
                  <span className="text-slate-300 text-sm">{siteConfig.email}</span>
                </div>
                <div className="flex items-center gap-3 glass-card px-4 py-3">
  <GraduationCap size={16} className="text-cyan-400 shrink-0" />
  <span className="text-slate-300 text-sm">BSc Computer Science, NOUN</span>
</div>
<div className="flex items-center gap-3 glass-card px-4 py-3">
  <Briefcase size={16} className="text-cyan-400 shrink-0" />
  <span className="text-slate-300 text-sm">Growth Marketer, TavCorp</span>
</div>

              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16">
          {stats.map((stat, i) => (
            <ScrollReveal key={stat.label} delay={i * 0.1}>
              <div className="glass-card p-6 text-center border border-cyan-500/10 hover:border-cyan-500/30 transition-colors duration-300">
                <p className="text-3xl font-black text-cyan-400 mb-1">{stat.value}</p>
                <p className="text-slate-400 text-sm">{stat.label}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
