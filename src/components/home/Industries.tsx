"use client";

import { motion } from "framer-motion";
import { ShoppingBag, HeartPulse, Landmark, GraduationCap, Truck, Building2, Utensils, Home } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/shared/StaggerGroup";

const industries = [
  { icon: ShoppingBag, label: "E-commerce & Retail" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: Landmark, label: "Fintech & Finance" },
  { icon: GraduationCap, label: "Education" },
  { icon: Truck, label: "Logistics" },
  { icon: Building2, label: "B2B & SaaS" },
  { icon: Utensils, label: "Hospitality" },
  { icon: Home, label: "Real Estate" },
];

export default function Industries() {
  return (
    <section className="section" style={{ background: "var(--surface-2)" }}>
      <div className="container">
        <Reveal className="max-w-[600px] mx-auto text-center mb-14">
          <div className="eyebrow justify-center mb-4">Who We Serve</div>
          <h2 className="text-[clamp(28px,4.2vw,42px)] font-extrabold">Industries we build for</h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-2 sm:grid-cols-4 gap-5">
          {industries.map((ind) => (
            <StaggerItem key={ind.label}>
              <motion.div
                className="card-surface p-6 text-center h-full hover:shadow-[var(--shadow)] transition-shadow duration-300"
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <motion.div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4"
                  style={{ background: "var(--surface-3)", color: "var(--text)" }}
                  whileHover={{ scale: 1.12, rotate: 8 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                >
                  <ind.icon size={22} />
                </motion.div>
                <div className="text-[14px] font-bold leading-snug">{ind.label}</div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
