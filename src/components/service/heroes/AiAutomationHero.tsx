"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Sparkles, Zap } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const nodePositions = [
  [50, 15], [15, 50], [85, 50], [30, 85], [70, 85], [50, 50],
];

export default function AiAutomationHero({ service }: { service: Service }) {
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
              <Sparkles size={13} /> {service.category}
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

          {/* Neural network panel, facing the text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative card-surface p-8"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="relative h-[200px]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {nodePositions.flatMap((n, i) =>
                  nodePositions.slice(i + 1).map((m, j) => (
                    <motion.line
                      key={`${i}-${j}`}
                      x1={n[0]} y1={n[1]} x2={m[0]} y2={m[1]}
                      stroke="var(--border-strong)" strokeWidth="0.3"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ duration: 1, delay: 0.4 + (i + j) * 0.05 }}
                    />
                  ))
                )}
              </svg>
              {nodePositions.map((pos, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full"
                  style={{
                    left: `${pos[0]}%`,
                    top: `${pos[1]}%`,
                    transform: "translate(-50%,-50%)",
                    background: i === 5 ? "var(--text)" : "var(--text-2)",
                  }}
                  animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-2xl flex items-center justify-center text-white"
                style={{ background: "var(--grad-brand)" }}
                animate={{ rotate: [0, 8, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
              >
                <Zap size={24} />
              </motion.div>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-[var(--border)]">
              {["Trigger", "Automate", "Deliver"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="text-[13px] font-bold">{label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
