"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Smartphone, Wifi, Battery, Signal, Bell, Home, Search, User } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const cards = [
  { label: "Today's Steps", value: "8,240" },
  { label: "Active Sessions", value: "312" },
  { label: "New Signups", value: "56" },
];

export default function MobileAppDevelopmentHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: "radial-gradient(#111 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="container">
        <ServiceBreadcrumb serviceName={service.name} />

        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
              style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
            >
              <Smartphone size={13} /> {service.category}
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
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button href={waLink(`Hi Prime Logicx, I'd like a quote for ${service.name}.`)} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Get a Free Quote
              </Button>
              <Button href="#features" variant="ghost" icon={<ArrowRight size={16} />}>
                See What&apos;s Included
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <div>
                <div className="text-[26px] font-extrabold grad-text leading-none">{service.startingPrice}</div>
                <div className="text-[12.5px] text-[var(--muted)] mt-1">{service.priceNote}</div>
              </div>
              <div className="h-10 w-px bg-[var(--border)]" />
              <div className="flex items-center gap-2 text-[13px] text-[var(--text-2)]">
                <span className="font-semibold text-[var(--text)]">iOS</span> &amp; <span className="font-semibold text-[var(--text)]">Android</span> from one codebase
              </div>
            </motion.div>
          </div>

          {/* Phone mockup with animated app UI */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto"
          >
            <div
              className="relative w-[270px] h-[550px] rounded-[42px] border-[6px] p-2.5 bg-[#0a0a0a]"
              style={{ borderColor: "#0a0a0a", boxShadow: "var(--shadow-lg)" }}
            >
              {/* notch */}
              <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-5 bg-[#0a0a0a] rounded-b-2xl z-20 flex items-center justify-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-white/20" />
              </div>

              <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-white">
                {/* status bar */}
                <div className="flex items-center justify-between px-6 pt-3 pb-1 text-[10px] font-semibold text-[var(--text)]">
                  <span>9:41</span>
                  <div className="flex items-center gap-1">
                    <Signal size={11} />
                    <Wifi size={11} />
                    <Battery size={12} />
                  </div>
                </div>

                {/* app header */}
                <div className="px-5 pt-3 pb-4 flex items-center justify-between">
                  <div>
                    <div className="text-[11px] text-[var(--muted)]">Welcome back</div>
                    <div className="text-[15px] font-bold">Your Dashboard</div>
                  </div>
                  <motion.div
                    className="w-8 h-8 rounded-full flex items-center justify-center"
                    style={{ background: "var(--surface-3)" }}
                    animate={{ scale: [1, 1.12, 1] }}
                    transition={{ duration: 2.2, repeat: Infinity }}
                  >
                    <Bell size={14} />
                  </motion.div>
                </div>

                {/* sliding cards */}
                <div className="px-5 flex flex-col gap-3">
                  {cards.map((c, i) => (
                    <motion.div
                      key={c.label}
                      initial={{ opacity: 0, x: 60 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.55, delay: 0.7 + i * 0.16, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-2xl p-4 flex items-center justify-between"
                      style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}
                    >
                      <span className="text-[12px] text-[var(--text-2)] font-medium">{c.label}</span>
                      <span className="text-[15px] font-extrabold">{c.value}</span>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.3 }}
                    className="rounded-2xl p-4 mt-1 text-white flex items-center justify-between"
                    style={{ background: "var(--grad-brand)" }}
                  >
                    <span className="text-[12px] font-semibold">Sync status</span>
                    <motion.span
                      className="w-2 h-2 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    />
                  </motion.div>
                </div>

                {/* tab bar */}
                <div
                  className="absolute bottom-0 left-0 right-0 flex items-center justify-around py-4 border-t"
                  style={{ borderColor: "var(--border)", background: "rgba(255,255,255,0.92)" }}
                >
                  {[Home, Search, Bell, User].map((Icon, i) => (
                    <Icon key={i} size={17} className={i === 0 ? "text-[var(--text)]" : "text-[var(--muted)]"} />
                  ))}
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -top-4 -right-6 card-surface px-4 py-2.5 text-[12.5px] font-semibold flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 1.5, duration: 0.5 }, scale: { delay: 1.5, duration: 0.5 }, y: { duration: 4, repeat: Infinity, delay: 1.8 } }}
            >
              <Smartphone size={13} /> Cross-platform
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
