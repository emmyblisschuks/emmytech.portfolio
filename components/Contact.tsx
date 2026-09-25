"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Github, Linkedin, Send, Copy, Check } from "lucide-react";
import ScrollReveal from "@/components/ui/ScrollReveal";
import { supabase } from "@/lib/supabaseClient";
import { siteConfig } from "@/lib/data";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError("");
    try {
      const { error: sbError } = await supabase.from("contact_messages").insert([
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
      ]);
      if (sbError) throw sbError;
      setSent(true);
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setError("Something went wrong. Please try again or email me directly.");
    } finally {
      setSending(false);
    }
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(siteConfig.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-pad px-6">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-mono text-cyan-400 tracking-widest border border-cyan-500/30 px-3 py-1 rounded-full bg-cyan-500/5">
              START A CONVERSATION
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-black text-white mb-4 tracking-tight">
            Let&apos;s Build Something
            <br />
            <span className="text-cyan-400">Intelligent.</span>
          </h2>
          <p className="text-slate-400 text-base mb-16 max-w-xl">
            Have an automation challenge, a project idea, or just want to connect? Send a message below and I will get back to you directly.
          </p>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Left info */}
          <ScrollReveal direction="left">
            <div className="space-y-4">
              {/* Email card */}
              <div className="glass-card p-5 flex items-center justify-between gap-4 border border-white/5 hover:border-cyan-500/20 transition-colors duration-300">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Direct Email</p>
                    <p className="text-white text-sm font-medium">{siteConfig.email}</p>
                  </div>
                </div>
                <button
                  onClick={copyEmail}
                  className="w-9 h-9 flex items-center justify-center rounded-lg bg-white/5 border border-white/10 text-slate-400 hover:text-cyan-400 hover:border-cyan-500/30 transition-all"
                >
                  {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                </button>
              </div>

              {/* Location card */}
              <div className="glass-card p-5 flex items-center justify-between gap-4 border border-white/5">
                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-blue-400" />
                  </div>
                  <div>
                    <p className="text-slate-500 text-xs mb-0.5">Location</p>
                    <p className="text-white text-sm font-medium">{siteConfig.location}</p>
                  </div>
                </div>
                <span className="flex items-center gap-1.5 text-xs text-emerald-400 border border-emerald-500/30 bg-emerald-500/5 px-3 py-1 rounded-full">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  Open for Work
                </span>
              </div>

              {/* Socials */}
              <div className="flex gap-3 pt-2">
                <a
                  href={siteConfig.socials.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/30 transition-all text-sm font-medium"
                >
                  <Github size={15} />
                  GitHub
                </a>
                <a
                  href={siteConfig.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-5 py-3 rounded-xl glass-card border border-white/10 text-slate-300 hover:text-white hover:border-cyan-500/30 transition-all text-sm font-medium"
                >
                  <Linkedin size={15} />
                  LinkedIn
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* Right form */}
          <ScrollReveal direction="right">
            <form onSubmit={handleSubmit} className="glass-card p-6 border border-white/5 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-2 block">
                    Your Name <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="e.g. John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                  />
                </div>
                <div>
                  <label className="text-slate-400 text-xs font-medium mb-2 block">
                    Email Address <span className="text-cyan-400">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="you@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                  />
                </div>
              </div>

              <div>
                <label className="text-slate-400 text-xs font-medium mb-2 block">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={form.subject}
                  onChange={handleChange}
                  placeholder="What is this about?"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all"
                />
              </div>

              <div>
                <label className="text-slate-400 text-xs font-medium mb-2 block">
                  Message <span className="text-cyan-400">*</span>
                </label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  placeholder="Tell me about your project or idea..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:bg-cyan-500/5 transition-all resize-none"
                />
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              {sent ? (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-emerald-400 text-sm font-medium py-3"
                >
                  <Check size={16} />
                  Message sent! I will get back to you soon.
                </motion.div>
              ) : (
                <button
                  type="submit"
                  disabled={sending}
                  className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-400 hover:to-blue-400 disabled:opacity-50 text-[#060d1a] font-bold text-sm py-3.5 rounded-xl transition-all duration-200 shadow-lg shadow-cyan-500/20"
                >
                  {sending ? (
                    <span className="w-4 h-4 border-2 border-[#060d1a]/30 border-t-[#060d1a] rounded-full animate-spin" />
                  ) : (
                    <Send size={15} />
                  )}
                  {sending ? "Sending..." : "Send Message"}
                </button>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
