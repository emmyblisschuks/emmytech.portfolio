"use client";

import { useState, useEffect } from "react";

interface TypeWriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  pause?: number;
  className?: string;
}

export default function TypeWriter({
  words,
  speed = 80,
  deleteSpeed = 40,
  pause = 2000,
  className = "",
}: TypeWriterProps) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const current = words[wordIndex];

    if (isPaused) {
      const timeout = setTimeout(() => {
        setIsPaused(false);
        setIsDeleting(true);
      }, pause);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting) {
      if (displayed.length < current.length) {
        const timeout = setTimeout(() => {
          setDisplayed(current.slice(0, displayed.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        setIsPaused(true);
      }
    } else {
      if (displayed.length > 0) {
        const timeout = setTimeout(() => {
          setDisplayed(displayed.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }
  }, [displayed, isDeleting, isPaused, wordIndex, words, speed, deleteSpeed, pause]);

  return (
    <span className={className}>
      {displayed}
      <span className="animate-pulse text-cyan-400">|</span>
    </span>
  );
}
