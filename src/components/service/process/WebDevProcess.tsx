"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/shared/Reveal";
import type { ProcessStep } from "@/data/services";

export default function WebDevProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <Reveal className="max-w-[560px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4">Process</div>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold">How we ship this, step by step</h2>
        </Reveal>

        <div className="relative max-w-[920px] mx-auto">
          {/* connecting line */}
          <div className="hidden lg:block absolute top-[27px] left-[10%] right-[10%] h-px" style={{ background: "var(--border-strong)" }}>
            <motion.div
              className="h-full"
              style={{ background: "var(--text)" }}
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="relative">
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center font-mono text-[13px] font-bold mb-5 relative z-10"
                    style={{ background: "var(--text)", color: "var(--surface)" }}
                  >
                    <span className="opacity-50">&lt;</span>
                    {String(i + 1).padStart(2, "0")}
                    <span className="opacity-50">/&gt;</span>
                  </div>
                  <h4 className="text-[15.5px] font-bold mb-2 font-mono">{step.title}</h4>
                  <p className="text-[13.5px] text-[var(--text-2)] leading-relaxed">{step.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
