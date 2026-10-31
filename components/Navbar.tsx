"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import Image from "next/image";
import { siteConfig } from "@/lib/data";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificate", href: "#certificate" },
  { label: "Journey", href: "#journey" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {const [scrolled, setScrolled] = useState(false);
const [menuOpen, setMenuOpen] = useState(false);
const [active, setActive] = useState("Home");


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const link = navLinks.find((l) => l.href === `#${entry.target.id}`);
            if (link) setActive(link.label);
          }
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navLinks.forEach((l) => {
      const el = document.querySelector(l.href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href: string, label: string) => {
    setActive(label);
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "py-3 bg-[#060d1a]/90 backdrop-blur-xl border-b border-cyan-500/10" : "py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => handleNav("#home", "Home")}
            className="flex items-center gap-3"
          >
            <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-cyan-500/40">
              <Image src="/photo.jpg" alt="Emmy" width={36} height={36} className="object-cover w-full h-full" />
            </div>
            <span className="font-bold text-xl tracking-tight">
              <span className="text-white">Emmy</span>
              <span className="text-cyan-400">Tech</span>
              <span className="text-cyan-400">.</span>
            </span>
          </button>

          {/* Desktop nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNav(link.href, link.label)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  active === link.label
                    ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/30"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

       {/* Desktop right actions */}
<div className="hidden lg:flex items-center gap-3">
  <button
    onClick={() => handleNav("#contact", "Contact")}
    className="text-sm text-slate-300 hover:text-white transition-colors px-4 py-2"
  >
    Get in Touch
  </button>
  <a
    href={siteConfig.cvPath}
    download
    className="flex items-center gap-2 bg-cyan-500 hover:bg-cyan-400 text-[#060d1a] font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200"
  >
    CV
  </a>
</div>


          {/* Mobile hamburger */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href={siteConfig.cvPath}
              download
              className="hidden sm:inline-flex bg-cyan-500 hover:bg-cyan-400 text-[#060d1a] font-semibold text-sm px-4 py-2 rounded-full transition-all duration-200"
            >
              CV
            </a>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 border border-white/10 text-white"
          >
            <Menu size={18} />
          </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 lg:hidden"
          >
            <div className="absolute inset-0 bg-[#060d1a]/95 backdrop-blur-xl" />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 bottom-0 w-72 bg-[#0a1628]/95 border-l border-cyan-500/15 p-8 flex flex-col"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="font-bold text-lg">
                  <span className="text-white">Emmy</span>
                  <span className="text-cyan-400">Tech.</span>
                </span>
                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-9 h-9 flex items-center justify-center rounded-xl bg-white/5 border border-white/10"
                >
                  <X size={16} />
                </button>
              </div>

              <div className="flex flex-col gap-2 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNav(link.href, link.label)}
                    className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                      active === link.label
                        ? "bg-cyan-500/15 text-cyan-400 border border-cyan-500/25"
                        : "text-slate-300 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </div>

              <div className="flex flex-col gap-3 pt-6 border-t border-white/10">
  <a
    href={siteConfig.cvPath}
    download
    className="w-full py-3 rounded-xl bg-cyan-500 text-[#060d1a] font-semibold text-sm text-center transition-all hover:bg-cyan-400"
  >
    Download CV
  </a>
</div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
