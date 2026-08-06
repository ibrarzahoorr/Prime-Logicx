"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { categories, getServicesByCategory, type ServiceCategory } from "@/data/services";
import { getIcon } from "@/lib/icons";
import Reveal from "@/components/shared/Reveal";
import TiltCard from "@/components/shared/TiltCard";

export default function ServicesOverview() {
  const [active, setActive] = useState<ServiceCategory>(categories[0].name);
  const items = useMemo(() => getServicesByCategory(active), [active]);

  return (
    <section className="section" id="services">
      <div className="container">
        <Reveal className="max-w-[640px] mx-auto text-center mb-14">
          <div className="eyebrow justify-center mb-4">Full-Stack Services</div>
          <h2 className="text-[clamp(28px,4.2vw,42px)] font-extrabold mb-4">Every service a modern business needs</h2>
          <p className="text-[17px] text-[var(--text-2)]">
            From your first line of code to your thousandth customer — development, AI, and marketing under one roof.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActive(cat.name)}
              className="relative px-5 py-2.5 rounded-full text-[14px] font-semibold transition-colors duration-300"
              style={{
                color: active === cat.name ? "#fff" : "var(--text-2)",
              }}
            >
              {active === cat.name && (
                <motion.span
                  layoutId="cat-pill"
                  className="absolute inset-0 rounded-full -z-10"
                  style={{ background: "var(--grad-brand)" }}
                  transition={{ type: "spring", stiffness: 350, damping: 30 }}
                />
              )}
              <span className={active !== cat.name ? "hover:text-[var(--text)]" : ""}>{cat.name}</span>
            </button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {items.map((service, i) => {
              const Icon = getIcon(service.icon);
              return (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
                >
                  <TiltCard className="relative h-full">
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block h-full card-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] hover:border-transparent relative overflow-hidden"
                    >
                      <div
                        className="absolute -top-10 -right-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-2xl"
                        style={{ background: "var(--grad-brand)" }}
                      />
                      <motion.div
                        className="w-13 h-13 rounded-2xl flex items-center justify-center text-white mb-5 relative"
                        style={{ background: "var(--grad-brand)", width: 52, height: 52 }}
                        whileHover={{ rotate: [0, -8, 8, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon size={22} />
                      </motion.div>
                      <h3 className="text-[18px] font-bold mb-2 flex items-center gap-1.5">
                        {service.name}
                        <ArrowUpRight size={16} className="opacity-0 group-hover:opacity-100 translate-x-0 group-hover:translate-x-0.5 transition-all text-[var(--brand)]" />
                      </h3>
                      <p className="text-[14px] text-[var(--text-2)] leading-relaxed mb-4">{service.tagline}</p>
                      <div className="text-[12.5px] font-semibold text-[var(--muted)]">
                        From <span className="text-[var(--text)]">{service.startingPrice}</span> {service.priceNote}
                      </div>
                    </Link>
                  </TiltCard>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
