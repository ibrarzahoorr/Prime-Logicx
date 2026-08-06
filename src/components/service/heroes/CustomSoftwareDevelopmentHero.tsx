"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Terminal, BarChart3, Table2, Gauge } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

export default function CustomSoftwareDevelopmentHero({ service }: { service: Service }) {
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
              <Terminal size={13} /> {service.category}
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

          {/* Dashboard widget stack, facing the text */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative card-surface p-7"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="grid grid-cols-2 gap-4 mb-4">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="rounded-xl p-4"
                style={{ background: "var(--surface-2)" }}
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--muted)]">Revenue</span>
                  <BarChart3 size={13} className="text-[var(--text-2)]" />
                </div>
                <div className="flex items-end gap-1 h-[52px]">
                  {[30, 55, 40, 70, 60, 85, 95].map((h, i) => (
                    <motion.div
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{ background: i === 6 ? "var(--text)" : "var(--surface-3)" }}
                      initial={{ height: 0 }}
                      animate={{ height: `${h}%` }}
                      transition={{ duration: 0.5, delay: 0.6 + i * 0.05 }}
                    />
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="rounded-xl p-4"
                style={{ background: "var(--surface-2)" }}
              >
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--muted)]">Active Users</span>
                  <Gauge size={13} className="text-[var(--text-2)]" />
                </div>
                <div className="text-[24px] font-extrabold mb-1">4,812</div>
                <div className="flex items-center gap-1.5 text-[11.5px] font-semibold text-emerald-600">
                  <motion.span
                    className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                    animate={{ opacity: [1, 0.3, 1] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  />
                  +12.4%
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="rounded-xl p-4 mb-4"
              style={{ background: "var(--surface-2)" }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="text-[11px] font-bold uppercase tracking-wide text-[var(--muted)]">Recent Orders</span>
                <Table2 size={13} className="text-[var(--text-2)]" />
              </div>
              <div className="flex flex-col gap-2">
                {["#4821 — Processing", "#4820 — Shipped", "#4819 — Completed"].map((row, i) => (
                  <motion.div
                    key={row}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + i * 0.1 }}
                    className="text-[12.5px] text-[var(--text-2)] flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--text)]" />
                    {row}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="rounded-xl flex items-center gap-3 p-4 text-white"
              style={{ background: "var(--grad-brand)" }}
            >
              <motion.div animate={{ rotate: [0, 6, -6, 0] }} transition={{ duration: 5, repeat: Infinity }}>
                <Terminal size={20} />
              </motion.div>
              <div className="text-[13px] font-semibold leading-tight">Built around your workflow</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
