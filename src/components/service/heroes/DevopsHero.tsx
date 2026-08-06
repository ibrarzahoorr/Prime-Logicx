"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, GitBranch, Hammer, FlaskConical, Rocket } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const stages = [
  { icon: Hammer, label: "Build" },
  { icon: FlaskConical, label: "Test" },
  { icon: GitBranch, label: "Merge" },
  { icon: Rocket, label: "Deploy" },
];

export default function DevopsHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />

      <div className="container">
        <ServiceBreadcrumb serviceName={service.name} />

        <div className="max-w-[760px] mb-16">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
            style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
          >
            <GitBranch size={13} /> {service.category}
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
            className="text-[17.5px] text-[var(--text-2)] leading-relaxed mb-9 max-w-[560px]"
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

        {/* Horizontal pipeline visualization, full-width below text */}
        <motion.div
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="card-surface p-8 md:p-10 max-w-[860px]"
          style={{ boxShadow: "var(--shadow-lg)" }}
        >
          <div className="relative">
            {/* base track */}
            <div className="absolute top-[26px] left-[26px] right-[26px] h-[3px] rounded-full" style={{ background: "var(--border)" }} />
            {/* animated progress fill */}
            <motion.div
              className="absolute top-[26px] left-[26px] h-[3px] rounded-full"
              style={{ background: "var(--text)" }}
              initial={{ width: "0%" }}
              animate={{ width: "calc(100% - 52px)" }}
              transition={{ duration: 2.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />
            {/* traveling dot */}
            <motion.div
              className="absolute top-[20px] w-4 h-4 rounded-full"
              style={{ background: "var(--grad-brand)", boxShadow: "var(--shadow)" }}
              initial={{ left: "26px" }}
              animate={{ left: "calc(100% - 42px)" }}
              transition={{ duration: 2.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
            />

            <div className="relative grid grid-cols-4 gap-4">
              {stages.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.label}
                    className="flex flex-col items-center gap-3"
                    initial={{ opacity: 0.4 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + i * 0.65 }}
                  >
                    <motion.div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center border"
                      initial={{ background: "var(--surface-2)", borderColor: "var(--border)" }}
                      animate={{
                        background: ["var(--surface-2)", "var(--surface-2)"],
                        borderColor: ["var(--border)", "var(--border-strong)"],
                      }}
                      transition={{ delay: 0.8 + i * 0.65, duration: 0.4 }}
                    >
                      <Icon size={20} className="text-[var(--text-2)]" />
                    </motion.div>
                    <span className="text-[12.5px] font-bold">{s.label}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mt-9 pt-6 border-t border-[var(--border)]">
            {[
              { label: "Deploy frequency", value: "Daily" },
              { label: "Rollback time", value: "<2 min" },
              { label: "Pipeline success", value: "99.2%" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 3.2 + i * 0.1 }}
              >
                <div className="text-[16px] font-extrabold">{stat.value}</div>
                <div className="text-[11.5px] text-[var(--muted)] leading-tight mt-0.5">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
