"use client";

import { motion } from "framer-motion";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function GlowCard({ children, className = "", hoverable = true }: GlowCardProps) {
  return (
    <motion.div
      whileHover={hoverable ? { borderColor: "rgba(6,182,212,0.5)", boxShadow: "0 0 30px rgba(6,182,212,0.15)" } : {}}
      transition={{ duration: 0.3 }}
      className={`glass-card p-6 ${className}`}
    >
      {children}
    </motion.div>
  );
}
