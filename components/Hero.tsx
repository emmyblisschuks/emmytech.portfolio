"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Github, Linkedin, Download, MessageSquare, ChevronRight, Zap } from "lucide-react";
import TypeWriter from "@/components/ui/TypeWriter";
import { siteConfig, roles } from "@/lib/data";

export default function Hero() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          {/* Left content */}
          <div className="flex-1 max-w-2xl">
            {/* Badge row */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap gap-3 mb-6"
            >
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/5 text-cyan-400 text-xs font-mono tracking-widest">
                <Zap size={11} />
                AI AUTOMATION
                <span className="text-slate-500 mx-1">•</span>
                WORKFLOW ENGINEERING
              </span>
              <span className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/5 text-emerald-400 text-xs font-medium">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                {siteConfig.status}
              </span>
            </motion.div>

            {/* Greeting */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-slate-400 text-lg mb-2 font-light"
            >
              Hello, It&apos;s Me
            </motion.p>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-3xl md:text-6xl font-black text-white leading-tight mb-4 tracking-tight break-words"

            >
              Chukwu Chidera
              <br />
              <span className="text-white">Emmanuel</span>
            </motion.h1>

            {/* Typewriter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-2xl font-medium mb-6 min-h-[2.5rem]"

            >
           <span className="text-slate-300">And I&apos;m </span>
<TypeWriter
  words={roles}
  className="text-cyan-400 font-semibold"
/>

            </motion.div>

            {/* Bio */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-slate-400 text-base leading-relaxed mb-8 max-w-lg"
            >
              {siteConfig.bio}
            </motion.p>

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex gap-3 mb-8"
            >
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Github size={18} />
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 flex items-center justify-center rounded-full bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-200"
              >
                <Linkedin size={18} />
              </a>
            </motion.div>

            {/* CTA buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href={siteConfig.cvPath}
                download
                className="flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 text-[#060d1a] font-bold text-sm px-6 py-3 rounded-full transition-all duration-200 shadow-lg shadow-cyan-500/25"
              >
                <Download size={16} />
                Download CV
              </a>
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 border border-white/20 hover:border-cyan-500/50 text-white hover:text-cyan-400 font-medium text-sm px-6 py-3 rounded-full transition-all duration-200"
              >
                <MessageSquare size={16} />
                Let&apos;s Talk
              </button>
              <button
                onClick={() => scrollTo("#projects")}
                className="flex items-center gap-1 text-slate-400 hover:text-cyan-400 text-sm font-medium transition-colors duration-200"
              >
                View Projects
                <ChevronRight size={16} />
              </button>
            </motion.div>
          </div>

          {/* Right: Photo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="flex-shrink-0"
          >
            <div className="relative w-60 h-60 md:w-80 md:h-80">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-600/20 blur-2xl animate-pulse" />
              {/* Spinning ring */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-cyan-500/30 animate-spin-slow" />
              {/* Static ring */}
              <div className="absolute inset-3 rounded-full border border-cyan-500/50" />
              {/* Photo */}
              <div className="absolute inset-4 rounded-full overflow-hidden border-2 border-cyan-500/60 shadow-2xl shadow-cyan-500/20">
                <Image
                  src="/photo.jpg"
                  alt="Chukwu Chidera Emmanuel"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>
              {/* Dot accents */}
              <div className="absolute top-4 right-4 w-3 h-3 rounded-full bg-cyan-400 shadow-lg shadow-cyan-400/50 animate-pulse" />
              <div className="absolute bottom-8 left-2 w-2 h-2 rounded-full bg-blue-400 shadow-lg shadow-blue-400/50 animate-pulse" style={{ animationDelay: "1s" }} />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
