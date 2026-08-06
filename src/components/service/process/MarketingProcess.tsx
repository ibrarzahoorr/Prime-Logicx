"use client";

import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { ProcessStep } from "@/data/services";

export default function MarketingProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <Reveal className="max-w-[560px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4">Process</div>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold">From strategy to measurable growth</h2>
        </Reveal>

        <div className="max-w-[900px] mx-auto flex flex-col gap-3">
          {steps.map((step, i) => {
            const widthPct = 100 - i * 9;
            return (
              <Reveal key={step.title} delay={i * 0.1}>
                <motion.div
                  className="mx-auto flex items-center gap-5 card-surface px-6 py-5"
                  style={{ width: `${widthPct}%` }}
                  whileHover={{ scale: 1.01 }}
                >
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center font-extrabold text-[14px] shrink-0"
                    style={{ background: "var(--text)", color: "var(--surface)" }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[15.5px] font-bold mb-1">{step.title}</h4>
                    <p className="text-[13.5px] text-[var(--text-2)] leading-relaxed">{step.description}</p>
                  </div>
                  {i === steps.length - 1 && (
                    <motion.div
                      className="shrink-0 text-emerald-600"
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <TrendingUp size={22} />
                    </motion.div>
                  )}
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
