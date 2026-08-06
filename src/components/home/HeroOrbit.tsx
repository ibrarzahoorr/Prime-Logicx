"use client";

import { motion } from "framer-motion";
import { Code2, Sparkles, TrendingUp, Cloud, Smartphone, BrainCircuit, Palette, ShieldCheck } from "lucide-react";

const orbitIcons = [
  { Icon: Code2, angle: 0 },
  { Icon: Sparkles, angle: 45 },
  { Icon: TrendingUp, angle: 90 },
  { Icon: Cloud, angle: 135 },
  { Icon: Smartphone, angle: 180 },
  { Icon: BrainCircuit, angle: 225 },
  { Icon: Palette, angle: 270 },
  { Icon: ShieldCheck, angle: 315 },
];

const dotAngles = [20, 65, 110, 155, 200, 245, 290, 335];

export default function HeroOrbit() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 hidden md:flex items-center justify-center">
      {/* Outermost dashed ring, slow drift */}
      <motion.div
        className="absolute rounded-full"
        style={{ width: 960, height: 960, border: "1px dashed var(--border-strong)", opacity: 0.35 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 140, repeat: Infinity, ease: "linear" }}
      />

      {/* Icon ring */}
      <motion.div
        className="relative"
        style={{ width: 780, height: 780 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-[var(--border)] opacity-60" />
        {orbitIcons.map(({ Icon, angle }, i) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 390;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <motion.div
              key={i}
              className="absolute w-11 h-11 rounded-xl flex items-center justify-center card-surface"
              style={{
                left: `calc(50% + ${x}px - 22px)`,
                top: `calc(50% + ${y}px - 22px)`,
              }}
              animate={{ rotate: -360 }}
              transition={{ duration: 90, repeat: Infinity, ease: "linear" }}
            >
              <Icon size={18} className="text-[var(--text-2)]" />
            </motion.div>
          );
        })}
      </motion.div>

      {/* Mid ring */}
      <div className="absolute rounded-full border border-[var(--border)] opacity-40" style={{ width: 560, height: 560 }} />

      {/* Innermost pulsing dot ring, counter-rotating */}
      <motion.div
        className="absolute"
        style={{ width: 340, height: 340 }}
        animate={{ rotate: -360 }}
        transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
      >
        <div className="absolute inset-0 rounded-full border border-[var(--border)] opacity-30" />
        {dotAngles.map((angle, i) => {
          const rad = (angle * Math.PI) / 180;
          const radius = 170;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;
          return (
            <motion.span
              key={i}
              className="absolute w-2 h-2 rounded-full"
              style={{
                left: `calc(50% + ${x}px - 4px)`,
                top: `calc(50% + ${y}px - 4px)`,
                background: "var(--text)",
              }}
              animate={{ opacity: [0.15, 0.5, 0.15], scale: [1, 1.4, 1] }}
              transition={{ duration: 2.8, repeat: Infinity, delay: i * 0.2, ease: "easeInOut" }}
            />
          );
        })}
      </motion.div>
    </div>
  );
}
