"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, TrendingUp } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const bars = [32, 48, 40, 62, 58, 74, 70, 88, 82, 96];

export default function SeoHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />

      <div className="container">
        <ServiceBreadcrumb serviceName={service.name} />

        <div className="grid lg:grid-cols-[1fr_0.95fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
              style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
            >
              <TrendingUp size={13} /> {service.category}
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

          {/* Growth chart dashboard panel */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="card-surface p-7"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="flex items-center justify-between mb-1">
              <div className="text-[12px] font-bold uppercase tracking-wider text-[var(--muted)]">Organic Traffic</div>
              <div className="flex items-center gap-1 text-[12.5px] font-bold text-emerald-600">
                <TrendingUp size={13} /> +187%
              </div>
            </div>
            <div className="text-[34px] font-extrabold mb-6">24,890 <span className="text-[15px] font-medium text-[var(--muted)]">visits/mo</span></div>

            <div className="flex items-end gap-2 h-[110px] mb-6">
              {bars.map((h, i) => (
                <motion.div
                  key={i}
                  className="flex-1 rounded-t-md"
                  style={{ background: i === bars.length - 1 ? "var(--text)" : "var(--surface-3)" }}
                  initial={{ height: 0 }}
                  animate={{ height: `${h}%` }}
                  transition={{ duration: 0.6, delay: 0.5 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                />
              ))}
            </div>

            <div className="grid grid-cols-3 gap-4 pt-5 border-t border-[var(--border)]">
              {[
                { label: "Keywords ranked", value: "340+" },
                { label: "Avg. position", value: "#4.2" },
                { label: "Domain rating", value: "58" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 1.1 + i * 0.1 }}
                >
                  <div className="text-[17px] font-extrabold">{stat.value}</div>
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
