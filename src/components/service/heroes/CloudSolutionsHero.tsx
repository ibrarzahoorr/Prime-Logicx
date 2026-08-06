"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Cloud, Database, Server, Shield, Globe } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const nodes = [
  { icon: Database, label: "Database", x: 10, y: 12 },
  { icon: Server, label: "Compute", x: 10, y: 82 },
  { icon: Shield, label: "Security", x: 90, y: 12 },
  { icon: Globe, label: "CDN", x: 90, y: 82 },
];

export default function CloudSolutionsHero({ service }: { service: Service }) {
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
              <Cloud size={13} /> {service.category}
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

          {/* Architecture diagram, facing the text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative card-surface p-8"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="relative h-[220px]">
              <svg viewBox="0 0 100 100" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                {nodes.map((n, i) => (
                  <motion.line
                    key={n.label}
                    x1={n.x}
                    y1={n.y}
                    x2={50}
                    y2={48}
                    stroke="var(--border-strong)"
                    strokeWidth="0.5"
                    strokeDasharray="3 2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1, strokeDashoffset: [0, -20] }}
                    transition={{
                      pathLength: { duration: 0.8, delay: 0.4 + i * 0.1 },
                      opacity: { duration: 0.8, delay: 0.4 + i * 0.1 },
                      strokeDashoffset: { duration: 1.5, repeat: Infinity, ease: "linear", delay: 1.2 },
                    }}
                  />
                ))}
              </svg>

              {nodes.map((n, i) => {
                const Icon = n.icon;
                return (
                  <motion.div
                    key={n.label}
                    className="absolute flex flex-col items-center gap-1.5"
                    style={{ left: `${n.x}%`, top: `${n.y}%`, transform: "translate(-50%,-50%)" }}
                    initial={{ opacity: 0, scale: 0.6 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div
                      className="w-11 h-11 rounded-xl flex items-center justify-center border border-[var(--border)]"
                      style={{ background: "var(--surface-2)" }}
                    >
                      <Icon size={17} className="text-[var(--text-2)]" />
                    </div>
                    <span className="text-[10px] font-semibold text-[var(--muted)]">{n.label}</span>
                  </motion.div>
                );
              })}

              <motion.div
                className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-2xl flex items-center justify-center text-white"
                style={{ background: "var(--grad-brand)" }}
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
              >
                <motion.div animate={{ y: [0, -3, 0] }} transition={{ duration: 2.5, repeat: Infinity }}>
                  <Cloud size={26} />
                </motion.div>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4 mt-4 pt-6 border-t border-[var(--border)]">
              {["99.9% uptime", "Auto-scaling", "24/7 monitoring"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                  className="text-center text-[11.5px] font-semibold text-[var(--text-2)]"
                >
                  {label}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
