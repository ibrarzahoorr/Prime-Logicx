"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, PenTool, MousePointer2, Image as ImageIcon } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const frames = [
  { rotate: -6, x: -30, tone: "var(--surface-2)", label: "Wireframe" },
  { rotate: -2, x: -10, tone: "var(--surface-3)", label: "UI Kit" },
  { rotate: 2, x: 10, tone: "var(--surface)", label: "Prototype" },
  { rotate: 6, x: 30, tone: "var(--surface-2)", label: "Final Design" },
];

export default function UiUxDesignHero({ service }: { service: Service }) {
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
              <PenTool size={13} /> {service.category}
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

          {/* Fanned artboard cards, facing the text */}
          <div className="relative h-[320px] flex items-center justify-center">
            {frames.map((f, i) => (
              <motion.div
                key={f.label}
                initial={{ opacity: 0, y: 30, rotate: 0, x: 0 }}
                animate={{ opacity: 1, y: 0, rotate: f.rotate, x: f.x }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="absolute w-[170px] h-[220px] rounded-xl border border-[var(--border)] overflow-hidden"
                style={{ background: "var(--surface)", boxShadow: "var(--shadow-lg)", zIndex: i }}
              >
                <div className="h-7 border-b border-[var(--border)] flex items-center px-3 gap-1.5" style={{ background: f.tone }}>
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--border-strong)]" />
                </div>
                <div className="p-3 flex flex-col gap-2">
                  <div className="h-2.5 w-3/4 rounded-full" style={{ background: "var(--surface-3)" }} />
                  <div className="h-2.5 w-1/2 rounded-full" style={{ background: "var(--surface-3)" }} />
                  <div className="h-14 w-full rounded-lg mt-1 flex items-center justify-center" style={{ background: "var(--surface-2)" }}>
                    <motion.div
                      animate={{ scale: [1, 1.12, 1], opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <ImageIcon size={18} className="text-[var(--text-2)]" />
                    </motion.div>
                  </div>
                  <div className="h-2.5 w-2/3 rounded-full mt-1" style={{ background: "var(--surface-3)" }} />
                  <div className="h-6 w-1/2 rounded-full mt-2" style={{ background: "var(--grad-brand)" }} />
                </div>
                <div className="absolute bottom-2 left-3 text-[9.5px] font-semibold text-[var(--muted)]">{f.label}</div>
              </motion.div>
            ))}

            {/* Animated cursor moving between frames */}
            <motion.div
              className="absolute z-20 text-[var(--text)]"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 1, 1, 1, 0],
                x: [-60, -20, 20, 60, 60],
                y: [30, -20, 15, -15, -15],
              }}
              transition={{ duration: 5, delay: 1.2, repeat: Infinity, repeatDelay: 1 }}
            >
              <MousePointer2 size={20} fill="var(--text)" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
