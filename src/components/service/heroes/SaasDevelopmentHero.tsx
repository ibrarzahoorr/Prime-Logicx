"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Layers, Check } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const planFeatures = ["Unlimited projects", "Team collaboration", "Priority support"];

export default function SaasDevelopmentHero({ service }: { service: Service }) {
  const [annual, setAnnual] = useState(false);

  useEffect(() => {
    const t = setInterval(() => setAnnual((a) => !a), 2600);
    return () => clearInterval(t);
  }, []);

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
              <Layers size={13} /> {service.category}
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

          {/* Browser window with pricing-tier card + animated toggle */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--border)]" style={{ boxShadow: "var(--shadow-lg)", background: "var(--surface)" }}>
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-[var(--border)]" style={{ background: "var(--surface-2)" }}>
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
                <span className="w-2.5 h-2.5 rounded-full" style={{ background: "var(--border-strong)" }} />
                <div className="ml-3 flex-1 h-5 rounded-md" style={{ background: "var(--surface)" }} />
              </div>

              <div className="p-7">
                <div className="flex items-center justify-center gap-3 mb-6">
                  <span className={`text-[12.5px] font-semibold ${!annual ? "text-[var(--text)]" : "text-[var(--muted)]"}`}>Monthly</span>
                  <div className="relative w-11 h-6 rounded-full p-0.5" style={{ background: "var(--surface-3)" }}>
                    <motion.div
                      className="w-5 h-5 rounded-full bg-[var(--text)]"
                      animate={{ x: annual ? 20 : 0 }}
                      transition={{ type: "spring", stiffness: 300, damping: 22 }}
                    />
                  </div>
                  <span className={`text-[12.5px] font-semibold ${annual ? "text-[var(--text)]" : "text-[var(--muted)]"}`}>Annual</span>
                </div>

                <div className="rounded-2xl border border-[var(--border-strong)] p-6 text-center" style={{ background: "var(--surface-2)" }}>
                  <div className="text-[11.5px] font-bold uppercase tracking-wider text-[var(--muted)] mb-2">Pro Plan</div>
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <motion.span
                      key={annual ? "annual" : "monthly"}
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-[34px] font-extrabold"
                    >
                      {annual ? "$29" : "$39"}
                    </motion.span>
                    <span className="text-[13px] text-[var(--muted)]">/mo</span>
                  </div>
                  <div className="text-[11.5px] text-[var(--muted)] mb-5">{annual ? "billed annually" : "billed monthly"}</div>

                  <div className="flex flex-col gap-2 text-left">
                    {planFeatures.map((f, i) => (
                      <motion.div
                        key={f}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.12 }}
                        className="flex items-center gap-2 text-[12.5px] text-[var(--text-2)]"
                      >
                        <Check size={13} className="text-[var(--text)]" /> {f}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              className="absolute -bottom-6 -right-6 card-surface px-4 py-3 text-[13px] font-semibold flex items-center gap-2"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1, y: [0, -8, 0] }}
              transition={{ opacity: { delay: 1.2, duration: 0.5 }, scale: { delay: 1.2, duration: 0.5 }, y: { duration: 4, repeat: Infinity, delay: 1.5 } }}
            >
              <Layers size={13} /> Multi-tenant ready
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
