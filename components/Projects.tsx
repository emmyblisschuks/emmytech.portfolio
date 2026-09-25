"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, CheckCircle2 } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { projects } from "@/lib/data";

const categories = ["All", "Workflow Automation", "AI Development", "AI Automation", "Web Development"];

export default function Projects() {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              WHAT I HAVE BUILT
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Projects
          </h2>
          <p className="text-slate-400 text-base mb-10 max-w-xl">
            Real-world systems built to solve actual problems. Each one is a production workflow or live product.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal delay={0.1}>
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === cat
                    ? "bg-cyan-500/20 text-cyan-400 border border-cyan-500/40"
                    : "bg-white/5 text-slate-400 border border-white/10 hover:text-white hover:border-white/20"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Project grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 gap-6"
          >
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ borderColor: "rgba(6,182,212,0.4)", boxShadow: "0 0 30px rgba(6,182,212,0.1)" }}
                className="glass-card p-6 flex flex-col gap-4 border border-white/5 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs font-mono text-cyan-400/70">#{project.id}</span>
                      <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400">
                        {project.category}
                      </span>
                    </div>
                    <h3 className="text-white font-bold text-lg leading-tight">{project.title}</h3>
                  </div>
                  <div className="flex gap-2 shrink-0">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-8 h-8 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-white hover:border-white/30 transition-all"
                    >
                      <Github size={14} />
                    </a>
                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 flex items-center justify-center rounded-lg bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all"
                      >
                        <ExternalLink size={14} />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-sm leading-relaxed">{project.description}</p>

                {/* Features */}
                <ul className="space-y-1.5">
                  {project.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                      {f}
                    </li>
                  ))}
                </ul>

                {/* Stack tags */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-white/5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-white/5 border border-white/10 text-slate-400"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
