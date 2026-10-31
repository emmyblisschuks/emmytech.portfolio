"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Award, BadgeCheck, CalendarCheck, Clock, Hash, Maximize2, X } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { certificate } from "@/lib/data";

const details = [
  { icon: Award, label: "Issued by", value: certificate.issuer },
  { icon: Clock, label: "Duration", value: certificate.duration },
  { icon: CalendarCheck, label: "Certified on", value: certificate.date },
  { icon: Hash, label: "Credential ID", value: certificate.credentialId, mono: true },
];

export default function Certificate() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <section id="certificate" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              CREDENTIALS
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Certification
          </h2>
          <p className="text-slate-400 text-base mb-16 max-w-xl">
            Formal training behind the systems I build.
          </p>
        </ScrollReveal>

        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Certificate image */}
          <ScrollReveal direction="left" className="lg:col-span-3">
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="View certificate full size"
              className="group relative block w-full rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/10 blur-2xl" />
              <div className="relative glass-card p-2 md:p-3 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors duration-300">
                <Image
                  src={certificate.image}
                  alt={certificate.alt}
                  width={828}
                  height={477}
                  sizes="(min-width: 1024px) 60vw, 100vw"
                  className="w-full h-auto rounded-xl"
                />
                <span className="absolute bottom-5 right-5 flex items-center gap-2 text-xs font-medium text-white bg-[#060d1a]/80 backdrop-blur px-3 py-1.5 rounded-full border border-white/10 opacity-100 lg:opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 size={12} /> View full size
                </span>
              </div>
            </button>
          </ScrollReveal>

          {/* Details */}
          <ScrollReveal direction="right" className="lg:col-span-2">
            <div className="space-y-6">
              <span className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
                <BadgeCheck size={14} /> CERTIFIED
              </span>

              <div>
                <h3 className="text-2xl md:text-3xl font-black text-white tracking-tight">
                  {certificate.title}
                </h3>
                <p className="text-cyan-400 text-sm font-medium mt-1">{certificate.issuer}</p>
              </div>

              <p className="text-white text-lg font-medium leading-snug border-l-2 border-cyan-500 pl-4">
                {certificate.caption}
              </p>
              <p className="text-slate-400 text-sm leading-relaxed">{certificate.description}</p>

              <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {details.map(({ icon: Icon, label, value, mono }) => (
                  <div key={label} className="glass-card px-4 py-3 flex items-start gap-3">
                    <Icon size={16} className="text-cyan-400 shrink-0 mt-0.5" />
                    <div className="min-w-0">
                      <dt className="text-xs text-slate-500">{label}</dt>
                      <dd className={`text-slate-200 text-sm break-all ${mono ? "font-mono" : ""}`}>
                        {value}
                      </dd>
                    </div>
                  </div>
                ))}
              </dl>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-label="Certificate full size"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-[#060d1a]/90 backdrop-blur-md cursor-zoom-out"
          >
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Close"
              className="absolute top-5 right-5 w-10 h-10 flex items-center justify-center rounded-full bg-white/10 border border-white/20 text-white hover:bg-white/20 transition-colors"
            >
              <X size={18} />
            </button>
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="w-full max-w-4xl"
            >
              <Image
                src={certificate.image}
                alt={certificate.alt}
                width={828}
                height={477}
                className="w-full h-auto rounded-xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
