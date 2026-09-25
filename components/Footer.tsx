"use client";

import { Github, Linkedin, Heart } from "lucide-react";
import { siteConfig } from "@/lib/data";

export default function Footer() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/5 px-6 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <button onClick={() => scrollTo("#home")} className="font-bold text-xl tracking-tight">
            <span className="text-white">Emmy</span>
            <span className="text-cyan-400">Tech</span>
            <span className="text-cyan-400">.</span>
          </button>

          {/* Nav links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-slate-500">
            {["#about", "#skills", "#projects", "#journey", "#services", "#contact"].map((href) => (
              <button
                key={href}
                onClick={() => scrollTo(href)}
                className="hover:text-cyan-400 transition-colors capitalize"
              >
                {href.replace("#", "")}
              </button>
            ))}
          </div>

          {/* Socials */}
          <div className="flex gap-3">
            <a
              href={siteConfig.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <Github size={15} />
            </a>
            <a
              href={siteConfig.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/20 transition-all"
            >
              <Linkedin size={15} />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-slate-600 text-xs flex items-center justify-center gap-1.5">
            Built with <Heart size={11} className="text-cyan-400" /> by Chukwu Chidera Emmanuel
            <span className="mx-2 text-slate-700">|</span>
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
