"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, FileText, Clock } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const lines = [100, 88, 94, 62, 100, 78, 90, 40];

export default function ContentMarketingHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />

      <div className="container">
        <ServiceBreadcrumb serviceName={service.name} />

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          {/* Document mockup on the LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="card-surface p-8" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="flex items-center gap-2 mb-6">
                <FileText size={16} className="text-[var(--text-2)]" />
                <div className="h-2.5 w-32 rounded-full" style={{ background: "var(--surface-3)" }} />
              </div>

              {/* title line */}
              <motion.div
                className="h-4 rounded-full mb-4"
                style={{ background: "var(--text)" }}
                initial={{ width: 0 }}
                animate={{ width: "85%" }}
                transition={{ duration: 0.7, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />

              <div className="flex flex-col gap-2.5 mb-6">
                {lines.map((w, i) => (
                  <motion.div
                    key={i}
                    className="h-2.5 rounded-full"
                    style={{ background: "var(--surface-3)" }}
                    initial={{ width: 0 }}
                    animate={{ width: `${w}%` }}
                    transition={{ duration: 0.55, delay: 0.9 + i * 0.13, ease: [0.16, 1, 0.3, 1] }}
                  />
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 2.2 }}
                className="flex items-center gap-4 pt-5 border-t border-[var(--border)]"
              >
                <div className="flex items-center gap-1.5 text-[12px] font-semibold text-[var(--text-2)]">
                  <Clock size={13} /> 6 min read
                </div>
                <div className="h-4 w-px bg-[var(--border)]" />
                <div className="text-[12px] font-semibold text-[var(--text-2)]">1,840 words</div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -top-5 -right-5 rounded-full w-16 h-16 flex flex-col items-center justify-center text-white"
              style={{ background: "var(--grad-brand)", boxShadow: "var(--shadow-lg)" }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1, rotate: [0, 8, -8, 0] }}
              transition={{ opacity: { delay: 1.4, duration: 0.5 }, scale: { delay: 1.4, duration: 0.5 }, rotate: { duration: 5, repeat: Infinity, delay: 1.8 } }}
            >
              <span className="text-[16px] font-extrabold leading-none">#1</span>
              <span className="text-[8px] font-semibold mt-0.5">on Google</span>
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
              style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
            >
              <FileText size={13} /> {service.category}
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
        </div>
      </div>
    </section>
  );
}
