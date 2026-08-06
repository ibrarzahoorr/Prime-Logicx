"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/shared/StaggerGroup";
import TiltCard from "@/components/shared/TiltCard";

const testimonials = [
  {
    quote: "Prime Logicx rebuilt our storefront and handled the SEO migration without losing a single ranking. Traffic is up 60% since launch.",
    name: "E-commerce Founder",
    role: "Apparel Brand, UK",
  },
  {
    quote: "We needed a chatbot that actually understood our product catalog. They trained it properly instead of shipping a generic script.",
    name: "Operations Lead",
    role: "SaaS Startup, US",
  },
  {
    quote: "Having one team for the app build and the marketing meant nothing fell through the cracks between vendors — that alone was worth it.",
    name: "Founder & CEO",
    role: "Fintech Startup, UAE",
  },
];

export default function Testimonials() {
  return (
    <section className="section">
      <div className="container">
        <Reveal className="max-w-[640px] mx-auto text-center mb-14">
          <div className="eyebrow justify-center mb-4">Client Results</div>
          <h2 className="text-[clamp(28px,4.2vw,42px)] font-extrabold mb-4">Trusted by businesses that value follow-through</h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <StaggerItem key={t.name}>
              <TiltCard className="relative h-full">
                <div className="card-surface p-8 h-full flex flex-col">
                  <div className="flex gap-1 mb-5 text-[var(--gold)]">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.span
                        key={i}
                        initial={{ opacity: 0, scale: 0, rotate: -30 }}
                        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.35, delay: i * 0.06, ease: "backOut" }}
                      >
                        <Star size={15} fill="currentColor" strokeWidth={0} />
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-[15px] text-[var(--text)] leading-relaxed mb-6 flex-1">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div className="text-[14px] font-bold">{t.name}</div>
                    <div className="text-[13px] text-[var(--muted)]">{t.role}</div>
                  </div>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
