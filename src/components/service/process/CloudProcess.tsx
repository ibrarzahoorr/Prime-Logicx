"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/shared/Reveal";
import type { ProcessStep } from "@/data/services";

export default function CloudProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <Reveal className="max-w-[560px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4">Process</div>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold">A staged rollout, not a big-bang change</h2>
        </Reveal>

        <div className="max-w-[980px] mx-auto rounded-2xl p-8 md:p-10" style={{ background: "#0a0a0a" }}>
          <div className="relative">
            <div className="hidden md:block absolute top-[23px] left-[6%] right-[6%] h-[2px]" style={{ background: "rgba(255,255,255,.14)" }}>
              <motion.div
                className="h-full"
                style={{ background: "#ffffff" }}
                initial={{ width: "0%" }}
                whileInView={{ width: "100%" }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, ease: [0.16, 1, 0.3, 1] }}
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-10 gap-x-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div
                    className="w-11 h-11 rounded-lg flex items-center justify-center font-mono font-bold text-[13px] mb-5 relative z-10"
                    style={{ background: "#ffffff", color: "#0a0a0a" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h4 className="text-[15px] font-bold mb-2 text-white">{step.title}</h4>
                  <p className="text-[13px] leading-relaxed" style={{ color: "rgba(255,255,255,.55)" }}>{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
