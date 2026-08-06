"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

export default function ServiceBreadcrumb({ serviceName, dark = false }: { serviceName: string; dark?: boolean }) {
  const base = dark ? "text-white/50" : "text-[var(--muted)]";
  const hover = dark ? "hover:text-white" : "hover:text-[var(--text)]";
  const current = dark ? "text-white/80" : "text-[var(--text-2)]";

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-1.5 text-[13px] mb-6 flex-wrap ${base}`}
    >
      <Link href="/" className={`${hover} transition-colors`}>Home</Link>
      <ChevronRight size={13} />
      <Link href="/services" className={`${hover} transition-colors`}>Services</Link>
      <ChevronRight size={13} />
      <span className={`font-medium ${current}`}>{serviceName}</span>
    </motion.div>
  );
}
