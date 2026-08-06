"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Target, MousePointerClick, Eye, Image as ImageIcon } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

function useCountUp(target: number, delay = 0, duration = 1600) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    let raf: number;
    const start = performance.now() + delay;
    const tick = (now: number) => {
      const elapsed = now - start;
      if (elapsed < 0) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, delay, duration]);
  return value;
}

export default function PpcAdvertisingHero({ service }: { service: Service }) {
  const impressions = useCountUp(48200, 500);
  const clicks = useCountUp(1940, 700);

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
              <Target size={13} /> {service.category}
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

          {/* Stacked ad-card mockups with ticking counters */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, y: 30, rotate: -4 }}
              animate={{ opacity: 1, y: 0, rotate: -4 }}
              transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-4 w-[280px] absolute -top-6 left-0"
              style={{ boxShadow: "var(--shadow)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full" style={{ background: "var(--surface-3)" }} />
                <div className="flex-1">
                  <div className="h-2 w-16 rounded-full mb-1" style={{ background: "var(--surface-3)" }} />
                  <div className="h-2 w-10 rounded-full" style={{ background: "var(--surface-3)" }} />
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded font-bold" style={{ background: "var(--surface-2)", color: "var(--muted)" }}>Ad</span>
              </div>
              <div className="h-24 w-full rounded-lg flex items-center justify-center" style={{ background: "var(--surface-2)" }}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity }}
                >
                  <ImageIcon size={26} className="text-[var(--text-2)]" />
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30, rotate: 3 }}
              animate={{ opacity: 1, y: 0, rotate: 3 }}
              transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
              className="card-surface p-4 w-[280px] relative left-10 top-6"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full" style={{ background: "var(--grad-brand)" }} />
                <div className="flex-1">
                  <div className="h-2 w-20 rounded-full mb-1" style={{ background: "var(--surface-3)" }} />
                  <div className="h-2 w-12 rounded-full" style={{ background: "var(--surface-3)" }} />
                </div>
                <span className="text-[9px] px-1.5 py-0.5 rounded font-bold" style={{ background: "var(--surface-2)", color: "var(--muted)" }}>Ad</span>
              </div>
              <div className="h-24 w-full rounded-lg mb-3 flex items-center justify-center" style={{ background: "var(--surface-2)" }}>
                <motion.div
                  animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.9, 0.5] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: 0.4 }}
                >
                  <ImageIcon size={26} className="text-[var(--text-2)]" />
                </motion.div>
              </div>
              <div className="flex items-center justify-between text-[11px] font-semibold text-[var(--text-2)]">
                <span className="flex items-center gap-1"><Eye size={12} /> {impressions.toLocaleString()}</span>
                <span className="flex items-center gap-1"><MousePointerClick size={12} /> {clicks.toLocaleString()}</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
              className="absolute -bottom-4 right-2 rounded-2xl px-5 py-4 text-white"
              style={{ background: "var(--grad-brand)", boxShadow: "var(--shadow-lg)" }}
            >
              <div className="text-[11px] uppercase tracking-wide text-white/70 font-bold mb-1">ROAS</div>
              <motion.div
                className="text-[26px] font-extrabold flex items-center gap-1"
                animate={{ opacity: [1, 0.7, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                4.8x
              </motion.div>
            </motion.div>

            <div className="h-[260px]" />
          </div>
        </div>
      </div>
    </section>
  );
}
