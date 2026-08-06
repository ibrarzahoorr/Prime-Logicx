"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Plug, Database, Layers as LayersIcon } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

export default function ApiIntegrationHero({ service }: { service: Service }) {
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
              <Plug size={13} /> {service.category}
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

          {/* Two system panels with animated data packets flowing between */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-8"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="relative flex items-center justify-between h-[160px]">
              <motion.div
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="w-24 h-24 rounded-2xl border border-[var(--border)] flex flex-col items-center justify-center gap-1.5"
                style={{ background: "var(--surface-2)" }}
              >
                <Database size={22} className="text-[var(--text-2)]" />
                <span className="text-[10px] font-bold text-[var(--muted)]">Your CRM</span>
              </motion.div>

              {/* connecting path with flowing packets */}
              <svg className="absolute left-[96px] right-[96px] top-1/2 -translate-y-1/2 w-[calc(100%-192px)] h-6" viewBox="0 0 200 24" preserveAspectRatio="none">
                <motion.path
                  d="M0,12 Q50,-6 100,12 T200,12"
                  fill="none"
                  stroke="var(--border-strong)"
                  strokeWidth="1.5"
                  strokeDasharray="4 4"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 1, delay: 0.7 }}
                />
                {[0, 1, 2].map((i) => (
                  <motion.circle
                    key={i}
                    r="3"
                    fill="var(--text)"
                    initial={{ cx: 0, cy: 12, opacity: 0 }}
                    animate={{
                      cx: [0, 50, 100, 150, 200],
                      cy: [12, -6, 12, -6, 12],
                      opacity: [0, 1, 1, 1, 0],
                    }}
                    transition={{ duration: 1.8, repeat: Infinity, delay: 1.2 + i * 0.6, ease: "linear" }}
                  />
                ))}
              </svg>

              <motion.div
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-24 h-24 rounded-2xl flex flex-col items-center justify-center gap-1.5 text-white"
                style={{ background: "var(--grad-brand)" }}
              >
                <LayersIcon size={22} />
                <span className="text-[10px] font-bold text-white/80">Your App</span>
              </motion.div>
            </div>

            <div className="grid grid-cols-3 gap-4 pt-6 mt-2 border-t border-[var(--border)]">
              {[
                { label: "Sync latency", value: "<300ms" },
                { label: "Uptime SLA", value: "99.9%" },
                { label: "Systems connected", value: "12+" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
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
