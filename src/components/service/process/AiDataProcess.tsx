"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/shared/Reveal";
import type { ProcessStep } from "@/data/services";

export default function AiDataProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <Reveal className="max-w-[560px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4">Process</div>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold">How the pipeline comes together</h2>
        </Reveal>

        <div className="max-w-[980px] mx-auto card-surface p-8 md:p-12">
          <div className="relative">
            {/* flow line */}
            <div className="hidden md:block absolute top-[26px] left-0 right-0 h-[2px] overflow-hidden" style={{ background: "var(--border)" }}>
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  className="absolute top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full"
                  style={{ background: "var(--text)" }}
                  animate={{ left: ["0%", "100%"] }}
                  transition={{ duration: 3.2, repeat: Infinity, delay: i * 1.05, ease: "linear" }}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
              {steps.map((step, i) => (
                <Reveal key={step.title} delay={i * 0.1}>
                  <div className="flex flex-col items-start">
                    <motion.div
                      className="w-13 h-13 rounded-full flex items-center justify-center font-extrabold text-[15px] mb-5 relative z-10"
                      style={{ width: 52, height: 52, background: "var(--surface)", border: "2px solid var(--text)", color: "var(--text)" }}
                      animate={{ scale: [1, 1.08, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                    >
                      {i + 1}
                    </motion.div>
                    <h4 className="text-[15.5px] font-bold mb-2">{step.title}</h4>
                    <p className="text-[13.5px] text-[var(--text-2)] leading-relaxed">{step.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
