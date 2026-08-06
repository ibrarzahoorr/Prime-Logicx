"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, BrainCircuit } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const points = [
  [8, 78], [16, 62], [24, 70], [30, 55], [38, 58], [46, 42],
  [52, 48], [60, 32], [68, 36], [76, 22], [84, 26], [92, 14],
];

export default function MachineLearningHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />

      <div className="container">
        <ServiceBreadcrumb serviceName={service.name} />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
              style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
            >
              <BrainCircuit size={13} /> {service.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.06] mb-5"
            >
              {service.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17.5px] text-[var(--text-2)] leading-relaxed mb-9 max-w-[520px]"
            >
              {service.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href={waLink(`Hi Prime Logicx, I'd like a quote for ${service.name}.`)} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Get a Free Quote
              </Button>
              <Button href="#features" variant="ghost" icon={<ArrowRight size={16} />}>
                See What&apos;s Included
              </Button>
            </motion.div>
          </div>

          {/* Scatter-plot / regression-line panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-7"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="flex items-center justify-between mb-5">
              <div className="text-[12px] font-bold uppercase tracking-wider text-[var(--muted)]">Prediction Accuracy</div>
              <div className="text-[12.5px] font-bold text-emerald-600">R² = 0.94</div>
            </div>

            <div className="relative h-[220px] w-full">
              <svg viewBox="0 0 100 90" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {/* axes */}
                <line x1="2" y1="88" x2="98" y2="88" stroke="var(--border)" strokeWidth="0.5" />
                <line x1="2" y1="0" x2="2" y2="88" stroke="var(--border)" strokeWidth="0.5" />

                {/* regression line drawing through points */}
                <motion.line
                  x1="6" y1="82" x2="94" y2="10"
                  stroke="var(--text)"
                  strokeWidth="0.8"
                  strokeDasharray="2 2"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1.2, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
                />

                {points.map(([x, y], i) => (
                  <motion.circle
                    key={i}
                    cx={x}
                    cy={y}
                    r="1.8"
                    fill="var(--text-2)"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.35, delay: 0.5 + i * 0.06 }}
                    style={{ transformOrigin: `${x}px ${y}px` }}
                  />
                ))}

                {/* pulsing highlighted point */}
                <motion.circle
                  cx={92}
                  cy={16}
                  r="2.4"
                  fill="var(--text)"
                  animate={{ opacity: [1, 0.4, 1], r: [2.4, 3.2, 2.4] }}
                  transition={{ duration: 1.8, repeat: Infinity, delay: 1.8 }}
                />
              </svg>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-5 mt-2 border-t border-[var(--border)]">
              {[
                { label: "Model type", value: "Regression" },
                { label: "Data points", value: "50K+" },
                { label: "Latency", value: "80ms" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 2 + i * 0.1 }}
                >
                  <div className="text-[16px] font-extrabold">{stat.value}</div>
                  <div className="text-[11.5px] text-[var(--muted)] leading-tight mt-0.5">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
