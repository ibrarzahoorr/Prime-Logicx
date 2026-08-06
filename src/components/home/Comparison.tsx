"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";
import Reveal from "@/components/shared/Reveal";

const rows = [
  { label: "Single point of contact", us: true, them: false },
  { label: "Dev, AI & marketing planned together", us: true, them: false },
  { label: "Fixed, transparent pricing", us: true, them: false },
  { label: "One consistent quality bar", us: true, them: false },
  { label: "No handoff delays between vendors", us: true, them: false },
  { label: "Post-launch support included", us: true, them: false },
];

export default function Comparison() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="max-w-[640px] mx-auto text-center mb-14">
          <div className="eyebrow justify-center mb-4">The Difference</div>
          <h2 className="text-[clamp(28px,4.2vw,42px)] font-extrabold mb-4">One team vs. three separate vendors</h2>
          <p className="text-[17px] text-[var(--text-2)]">
            Juggling a web agency, an AI consultant, and a marketing shop means juggling their handoffs too. Here&apos;s what changes when it&apos;s one team.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="max-w-[760px] mx-auto card-surface overflow-hidden">
          <div className="grid grid-cols-3 text-center border-b border-[var(--border)]">
            <div className="py-5 px-3" />
            <div className="py-5 px-3 font-extrabold text-[15px]" style={{ background: "var(--text)", color: "var(--surface)" }}>
              Prime Logicx
            </div>
            <div className="py-5 px-3 font-semibold text-[14px] text-[var(--muted)]">Typical Multi-Vendor</div>
          </div>

          {rows.map((row, i) => (
            <motion.div
              key={row.label}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-3 items-center text-center hover:bg-[var(--surface-2)] transition-colors duration-200"
              style={{ borderBottom: i < rows.length - 1 ? "1px solid var(--border)" : "none" }}
            >
              <div className="py-4 px-3 text-left text-[13.5px] md:text-[14.5px] font-medium">{row.label}</div>
              <div className="py-4 px-3 flex justify-center" style={{ background: "var(--surface-2)" }}>
                <motion.span
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.06 + 0.15, ease: "backOut" }}
                >
                  <Check size={18} className="text-[var(--text)]" />
                </motion.span>
              </div>
              <div className="py-4 px-3 flex justify-center">
                <X size={18} className="text-[var(--muted)]" />
              </div>
            </motion.div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
