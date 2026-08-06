"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, ArrowRight, MessageCircle, Check } from "lucide-react";
import { getIcon } from "@/lib/icons";
import Button from "@/components/shared/Button";
import HeroBackdrop from "@/components/service/HeroBackdrop";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

export default function ServiceHero({ service }: { service: Service }) {
  const Icon = getIcon(service.icon);

  return (
    <section className="relative overflow-hidden pt-[150px] pb-[80px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />
      <div className="absolute inset-0 -z-10 opacity-80">
        <HeroBackdrop category={service.category} />
      </div>

      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-1.5 text-[13px] text-[var(--muted)] mb-6 flex-wrap"
        >
          <Link href="/" className="hover:text-[var(--text)] transition-colors">Home</Link>
          <ChevronRight size={13} />
          <Link href="/services" className="hover:text-[var(--text)] transition-colors">Services</Link>
          <ChevronRight size={13} />
          <span className="text-[var(--text-2)] font-medium">{service.name}</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
              style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
            >
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: "var(--text)" }} />
              {service.category}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="w-16 h-16 rounded-2xl flex items-center justify-center text-white mb-7"
              style={{ background: "var(--grad-brand)" }}
            >
              <Icon size={28} />
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(32px,4.6vw,52px)] font-extrabold leading-[1.1] mb-5"
            >
              {service.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17.5px] text-[var(--text-2)] leading-relaxed mb-8 max-w-[560px]"
            >
              {service.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button
                href={waLink(`Hi Prime Logicx, I'd like a quote for ${service.name}.`)}
                variant="whatsapp"
                icon={<MessageCircle size={17} />}
              >
                Get a Free Quote
              </Button>
              <Button href="#features" variant="ghost" icon={<ArrowRight size={16} />}>
                See What&apos;s Included
              </Button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ y: -4 }}
            className="card-surface p-8"
            style={{ boxShadow: "var(--shadow-lg)" }}
          >
            <div className="text-[12px] font-bold uppercase tracking-wider text-[var(--muted)] mb-1">Starting from</div>
            <div className="text-[38px] font-extrabold grad-text mb-1">{service.startingPrice}</div>
            <div className="text-[13.5px] text-[var(--text-2)] mb-6">{service.priceNote}</div>
            <div className="h-px bg-[var(--border)] mb-6" />
            <div className="text-[13px] font-bold uppercase tracking-wider text-[var(--muted)] mb-4">What&apos;s included</div>
            <ul className="flex flex-col gap-3">
              {service.deliverables.slice(0, 5).map((d, i) => (
                <motion.li
                  key={d}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + i * 0.07 }}
                  className="flex items-start gap-2.5 text-[14px] text-[var(--text-2)]"
                >
                  <Check size={16} className="text-[var(--text)] mt-0.5 shrink-0" />
                  {d}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
