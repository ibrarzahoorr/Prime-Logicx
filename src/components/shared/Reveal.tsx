"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  once?: boolean;
  direction?: "up" | "left" | "right" | "none";
}

export default function Reveal({ children, delay = 0, y = 28, className, once = true, direction = "up" }: RevealProps) {
  const offset: Record<string, { x?: number; y?: number }> = {
    up: { y },
    left: { x: -y },
    right: { x: y },
    none: {},
  };

  const variants: Variants = {
    hidden: { opacity: 0, ...offset[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.2 }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}
