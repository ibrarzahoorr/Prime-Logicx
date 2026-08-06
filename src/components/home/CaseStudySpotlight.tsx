"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, TrendingUp } from "lucide-react";
import Link from "next/link";
import Reveal from "@/components/shared/Reveal";
import { spotlight } from "@/data/work";

export default function CaseStudySpotlight() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="rounded-[28px] overflow-hidden card-surface shadow-[var(--shadow-lg)]">
          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="p-10 md:p-14">
              <div className="eyebrow mb-5">{spotlight.eyebrow}</div>
              <h2 className="text-[clamp(24px,3.2vw,34px)] font-extrabold leading-[1.2] mb-5">{spotlight.title}</h2>
              <p className="text-[15.5px] text-[var(--text-2)] leading-relaxed mb-6">{spotlight.summary}</p>
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <span className="text-[13px] font-semibold text-[var(--muted)]">{spotlight.client}</span>
                <span className="w-1 h-1 rounded-full bg-[var(--border-strong)]" />
                <span className="text-[13px] font-semibold text-[var(--muted)]">{spotlight.category}</span>
              </div>
              <Link
                href="/work"
                className="group inline-flex items-center gap-1.5 text-[14.5px] font-bold text-[var(--text)]"
              >
                Read more case studies
                <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </div>

            <div className="p-10 md:p-14 flex flex-col justify-center" style={{ background: "var(--surface-2)" }}>
              <div className="flex items-center gap-2 mb-8 text-emerald-600">
                <TrendingUp size={18} />
                <span className="text-[13px] font-bold uppercase tracking-wider">Results</span>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {spotlight.metrics.map((m, i) => (
                  <motion.div
                    key={m.label}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  >
                    <div className="text-[30px] font-extrabold leading-none mb-1.5">{m.value}</div>
                    <div className="text-[12.5px] text-[var(--muted)] font-medium leading-tight">{m.label}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
