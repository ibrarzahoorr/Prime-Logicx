"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import type { FAQ } from "@/data/services";

export default function ServiceFaq({ faqs }: { faqs: FAQ[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section">
      <div className="container max-w-[760px]">
        <Reveal className="text-center mb-12">
          <div className="eyebrow justify-center mb-4">FAQ</div>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold">Common questions</h2>
        </Reveal>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <Reveal key={faq.question} delay={i * 0.06}>
              <div className="card-surface overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-[15.5px] font-semibold">{faq.question}</span>
                  <motion.span animate={{ rotate: open === i ? 45 : 0 }} transition={{ duration: 0.25 }} className="shrink-0 text-[var(--text)]">
                    <Plus size={20} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-5 text-[14.5px] text-[var(--text-2)] leading-relaxed">{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
