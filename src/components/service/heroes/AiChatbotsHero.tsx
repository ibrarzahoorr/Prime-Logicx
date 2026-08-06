"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, MessageSquare, Bot } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const messages = [
  { from: "user", text: "Do you offer same-day shipping?" },
  { from: "bot", text: "Yes! Orders placed before 2pm ship same day." },
  { from: "user", text: "Can I track my order?" },
];

export default function AiChatbotsHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />

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
              <MessageSquare size={13} /> {service.category}
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

          {/* Chat widget mockup with animated messages */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-[360px]"
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="flex items-center gap-3 px-5 py-4 text-white" style={{ background: "var(--grad-brand)" }}>
                <div className="w-8 h-8 rounded-full bg-white/15 flex items-center justify-center">
                  <Bot size={16} />
                </div>
                <div>
                  <div className="text-[13px] font-bold leading-tight">Support Assistant</div>
                  <div className="text-[11px] text-white/70 flex items-center gap-1.5">
                    <motion.span
                      className="w-1.5 h-1.5 rounded-full bg-emerald-400"
                      animate={{ opacity: [1, 0.3, 1] }}
                      transition={{ duration: 1.4, repeat: Infinity }}
                    />
                    Online now
                  </div>
                </div>
              </div>

              <div className="p-4 flex flex-col gap-2.5 min-h-[220px]" style={{ background: "var(--surface-2)" }}>
                {messages.map((m, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12, x: m.from === "user" ? 12 : -12 }}
                    animate={{ opacity: 1, y: 0, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + i * 0.5, ease: [0.16, 1, 0.3, 1] }}
                    className={`max-w-[78%] px-3.5 py-2.5 rounded-2xl text-[12.5px] leading-snug ${
                      m.from === "user" ? "self-end text-white" : "self-start card-surface"
                    }`}
                    style={m.from === "user" ? { background: "var(--grad-brand)" } : undefined}
                  >
                    {m.text}
                  </motion.div>
                ))}

                {/* typing indicator */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 2.2, duration: 0.3 }}
                  className="self-start card-surface px-3.5 py-2.5 rounded-2xl flex items-center gap-1"
                >
                  {[0, 1, 2].map((i) => (
                    <motion.span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{ background: "var(--muted)" }}
                      animate={{ y: [0, -4, 0] }}
                      transition={{ duration: 0.9, repeat: Infinity, delay: i * 0.15 }}
                    />
                  ))}
                </motion.div>
              </div>

              <div className="px-4 py-3 border-t border-[var(--border)] flex items-center gap-2">
                <div className="flex-1 h-9 rounded-full" style={{ background: "var(--surface-2)" }} />
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-white" style={{ background: "var(--grad-brand)" }}>
                  <ArrowRight size={14} />
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -left-6 card-surface px-4 py-3 text-[13px] font-semibold flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 2.6, duration: 0.5 }, scale: { delay: 2.6, duration: 0.5 }, y: { duration: 4, repeat: Infinity, delay: 2.9 } }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500" /> 24/7 Availability
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
