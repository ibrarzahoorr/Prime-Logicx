"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowDown, Code2, Sparkles, TrendingUp } from "lucide-react";
import Button from "@/components/shared/Button";
import HeroOrbit from "@/components/home/HeroOrbit";
import { waLink } from "@/data/site";

const pillars = [
  { icon: Code2, label: "Web & App Development" },
  { icon: Sparkles, label: "AI, SaaS & Automation" },
  { icon: TrendingUp, label: "Digital Marketing & SEO" },
];

const floatTransition = (delay: number) => ({
  y: [0, -16, 0],
  transition: { duration: 5, repeat: Infinity, ease: "easeInOut" as const, delay },
});

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });

  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "60%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  const orbitScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden pt-[168px] pb-[110px]">
      <motion.div className="absolute inset-0 -z-10" style={{ background: "var(--grad-mesh)", y: bgY }} />
      <div className="absolute inset-0 -z-10 noise" />
      <motion.div style={{ scale: orbitScale }}>
        <HeroOrbit />
      </motion.div>

      {/* Floating decorative cards */}
      <motion.div
        className="hidden lg:block absolute top-[190px] left-[6%] card-surface px-4 py-3 text-[13px] font-semibold flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, ...floatTransition(0) }}
        transition={{ opacity: { delay: 0.8, duration: 0.6 } }}
      >
        <span className="w-2 h-2 rounded-full bg-emerald-500" /> 40+ projects shipped
      </motion.div>
      <motion.div
        className="hidden lg:block absolute top-[320px] right-[7%] card-surface px-4 py-3 text-[13px] font-semibold flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, ...floatTransition(1) }}
        transition={{ opacity: { delay: 1, duration: 0.6 } }}
      >
        <TrendingUp size={14} className="text-[var(--brand)]" /> SEO built-in
      </motion.div>
      <motion.div
        className="hidden lg:block absolute top-[130px] right-[16%] card-surface px-4 py-3 text-[13px] font-semibold flex items-center gap-2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, ...floatTransition(0.5) }}
        transition={{ opacity: { delay: 1.2, duration: 0.6 } }}
      >
        <Sparkles size={14} className="text-[var(--brand)]" /> AI-native builds
      </motion.div>

      <motion.div
        className="container relative z-10 max-w-[860px] text-center"
        style={{ y: contentY, opacity: contentOpacity }}
      >
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[13px] font-semibold text-[var(--text-2)] mb-8 card-surface"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          Available for new projects worldwide
        </motion.div>

        <h1 className="text-[clamp(38px,6.4vw,72px)] font-extrabold leading-[1.06] mb-6">
          <span className="block overflow-hidden">
            {["Software,", "AI", "&", "growth", "—"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block"
                initial={{ y: "110%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.08 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
          <span className="block overflow-hidden">
            {["engineered", "by", "one", "team"].map((word, i) => (
              <motion.span
                key={word}
                className="inline-block grad-text"
                initial={{ y: "110%", rotate: 4 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{ duration: 0.7, delay: 0.42 + i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
          className="text-[18px] md:text-[19px] text-[var(--text-2)] max-w-[620px] mx-auto mb-10 leading-relaxed"
        >
          Prime Logicx designs and builds custom websites, mobile apps &amp; SaaS products, automates your business
          with AI, and grows your traffic — all under one accountable, remote team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Button href={waLink("Hi Prime Logicx, I'd like to discuss a project.")} variant="whatsapp" icon={<ArrowRight size={17} />}>
            Start a Project
          </Button>
          <Button href="#services" variant="ghost" icon={<ArrowDown size={16} />}>
            Explore Services
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.92, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-wrap justify-center gap-3"
        >
          {pillars.map((p) => (
            <div key={p.label} className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[13.5px] font-semibold card-surface">
              <p.icon size={15} className="text-[var(--brand)]" />
              {p.label}
            </div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
