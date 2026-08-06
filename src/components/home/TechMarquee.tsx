"use client";

import { motion } from "framer-motion";
import Reveal from "@/components/shared/Reveal";

const techs = [
  "Next.js", "React", "TypeScript", "Node.js", "Python", "Shopify",
  "AWS", "Google Cloud", "PostgreSQL", "Stripe", "OpenAI", "LangChain",
  "Docker", "Kubernetes", "Tailwind CSS", "Figma", "TensorFlow", "GraphQL",
];

export default function TechMarquee() {
  const row = [...techs, ...techs];

  return (
    <section className="py-16 border-y border-[var(--border)] overflow-hidden">
      <div className="container mb-8">
        <Reveal className="text-center">
          <div className="text-[12.5px] font-bold uppercase tracking-wider text-[var(--muted)]">
            Built with the tools serious products run on
          </div>
        </Reveal>
      </div>

      <div className="relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-24 z-10" style={{ background: "linear-gradient(90deg, var(--background), transparent)" }} />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-24 z-10" style={{ background: "linear-gradient(270deg, var(--background), transparent)" }} />

        <motion.div
          className="flex items-center gap-12 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 32, repeat: Infinity, ease: "linear" }}
        >
          {row.map((tech, i) => (
            <span
              key={`${tech}-${i}`}
              className="text-[20px] md:text-[24px] font-bold whitespace-nowrap"
              style={{ color: "var(--border-strong)", fontFamily: "var(--font-sora)" }}
            >
              {tech}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
