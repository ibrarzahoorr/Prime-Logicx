"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShieldCheck, Lock } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

export default function CybersecurityHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-[0.04]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "34px 34px",
        }}
      />

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
              <ShieldCheck size={13} /> {service.category}
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

          {/* Shield with scanning sweep + status panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-8"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="relative h-[190px] flex items-center justify-center">
              <div
                className="relative w-[130px] h-[150px] flex items-center justify-center overflow-hidden"
                style={{
                  clipPath: "polygon(50% 0%, 100% 20%, 100% 60%, 50% 100%, 0% 60%, 0% 20%)",
                  background: "var(--grad-brand)",
                }}
              >
                <Lock size={34} className="text-white z-10" />
                {/* scanning sweep */}
                <motion.div
                  className="absolute left-0 right-0 h-8"
                  style={{ background: "linear-gradient(180deg, transparent, rgba(255,255,255,0.35), transparent)" }}
                  initial={{ top: "-20%" }}
                  animate={{ top: "120%" }}
                  transition={{ duration: 2.2, repeat: Infinity, ease: "linear", repeatDelay: 0.4 }}
                />
              </div>

              {/* pulsing ring */}
              <motion.div
                className="absolute w-[150px] h-[150px] rounded-full border"
                style={{ borderColor: "var(--border-strong)" }}
                animate={{ scale: [1, 1.35], opacity: [0.5, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 1 }}
              className="rounded-xl p-4 flex items-center justify-between mb-5"
              style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
            >
              <span className="text-[12.5px] font-semibold text-[var(--text-2)]">Vulnerabilities found</span>
              <span className="flex items-center gap-1.5 text-[13px] font-extrabold text-emerald-600">
                <motion.span
                  className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                  animate={{ opacity: [1, 0.3, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity }}
                />
                0
              </span>
            </motion.div>

            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[var(--border)]">
              {[
                { label: "OWASP checks", value: "42/42" },
                { label: "Last scan", value: "2h ago" },
                { label: "Compliance", value: "Ready" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.3 + i * 0.1 }}
                >
                  <div className="text-[15px] font-extrabold">{stat.value}</div>
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
