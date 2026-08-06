"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Palette } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const swatches = ["#111111", "#3a3a3a", "#5c5c5c", "#8a8a8a", "#d1d1d1", "#f5f5f5"];

export default function BrandingHero({ service }: { service: Service }) {
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
              <Palette size={13} /> {service.category}
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

          {/* Brand exploration panel: morphing mark, swatches, type samples */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-8"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="flex items-center gap-8 mb-8">
              <motion.div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-white shrink-0"
                style={{ background: "var(--grad-brand)" }}
                animate={{ rotate: [0, 90, 180, 270, 360], borderRadius: ["24px", "50%", "24px", "50%", "24px"] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              >
                <span className="text-[26px] font-extrabold">P</span>
              </motion.div>
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.4 }}
                  className="text-[22px] font-extrabold tracking-tight"
                >
                  Aa Bb Cc
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75, duration: 0.4 }}
                  className="text-[13px] text-[var(--muted)] mt-1"
                >
                  Display / Headline
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9, duration: 0.4 }}
                  className="text-[13px] text-[var(--text-2)] mt-2"
                  style={{ fontFamily: "var(--font-body, inherit)" }}
                >
                  The quick brown fox jumps.
                </motion.div>
              </div>
            </div>

            <div className="text-[11.5px] font-bold uppercase tracking-wider text-[var(--muted)] mb-3">Color System</div>
            <div className="flex gap-2.5 mb-7">
              {swatches.map((c, i) => (
                <motion.div
                  key={c}
                  className="flex-1 aspect-square rounded-xl border border-[var(--border)]"
                  style={{ background: c }}
                  initial={{ opacity: 0, y: 14, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  whileHover={{ y: -4 }}
                />
              ))}
            </div>

            <div className="flex items-center gap-4 pt-5 border-t border-[var(--border)]">
              {["Logo Suite", "Guidelines", "Collateral"].map((label, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 1.6 + i * 0.1 }}
                  className="text-[12px] font-semibold text-[var(--text-2)] px-3 py-1.5 rounded-full"
                  style={{ background: "var(--surface-2)" }}
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
