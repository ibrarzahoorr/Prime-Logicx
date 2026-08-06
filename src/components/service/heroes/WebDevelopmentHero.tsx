"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Check, Code2 } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const codeLines = [
  { text: "export default function Page() {", indent: 0 },
  { text: "return (", indent: 1 },
  { text: "<Hero fast responsive seo />", indent: 2 },
  { text: ");", indent: 1 },
  { text: "}", indent: 0 },
];

export default function WebDevelopmentHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />
      <div
        className="absolute inset-0 -z-10 opacity-[0.05]"
        style={{
          backgroundImage: "linear-gradient(#111 1px, transparent 1px), linear-gradient(90deg, #111 1px, transparent 1px)",
          backgroundSize: "48px 48px",
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
              <Code2 size={13} /> {service.category}
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
              className="text-[17.5px] text-[var(--text-2)] leading-relaxed mb-8 max-w-[520px]"
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
              <div className="flex flex-col gap-1">
                {service.deliverables.slice(0, 2).map((d) => (
                  <div key={d} className="flex items-center gap-2 text-[13px] text-[var(--text-2)]">
                    <Check size={13} className="text-[var(--text)]" /> {d}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Browser / code mockup frame */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] shadow-[var(--shadow-lg)] bg-[#0a0a0a]">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/10">
                <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                <div className="ml-3 flex-1 h-5 rounded-md bg-white/5" />
              </div>
              <div className="p-6 font-mono text-[13px] leading-[1.9]">
                {codeLines.map((line, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.12 }}
                    style={{ paddingLeft: line.indent * 20 }}
                  >
                    <span style={{ color: "#8a8a8a" }}>{line.text}</span>
                  </motion.div>
                ))}
                <motion.span
                  className="inline-block w-2 h-4 bg-white/70 ml-1 align-middle"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </div>
            </div>
            <motion.div
              className="absolute -bottom-6 -left-6 card-surface px-4 py-3 text-[13px] font-semibold flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 1.2, duration: 0.5 }, scale: { delay: 1.2, duration: 0.5 }, y: { duration: 4, repeat: Infinity, delay: 1.5 } }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> 98/100 Performance
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
