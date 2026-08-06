"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

const stats = [
  { value: 40, suffix: "+", label: "Projects delivered" },
  { value: 18, suffix: "", label: "Services under one roof" },
  { value: 12, suffix: "+", label: "Countries served" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [inView, value]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-16 border-y border-[var(--border)] bg-[var(--surface-2)]">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <div className="text-[clamp(28px,4vw,40px)] font-extrabold grad-text mb-1">
              <Counter value={s.value} suffix={s.suffix} />
            </div>
            <div className="text-[13.5px] font-medium text-[var(--text-2)]">{s.label}</div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
