"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import clsx from "clsx";

interface LogoProps {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  dark?: boolean;
  href?: string;
  markSize?: number;
}

export function LogoMark({ size = 40, dark = false }: { size?: number | string; dark?: boolean }) {
  const primary = dark ? "#fafafa" : "#0a0a0a";
  const secondary = dark ? "#8a8a8a" : "#8a8a8a";

  return (
    <svg width={size} height={size} viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M22 2L40 12.5V31.5L22 42L4 31.5V12.5L22 2Z" stroke={primary} strokeWidth="2" strokeLinejoin="round" />
      <path d="M22 2V22L4 12.5L22 2Z" fill={primary} />
      <path d="M22 22V42L40 31.5L22 22Z" fill={secondary} fillOpacity="0.35" />
      <path d="M22 22L4 12.5V31.5L22 42V22Z" fill={primary} fillOpacity="0.12" />
    </svg>
  );
}

export default function Logo({ className, markClassName, textClassName, dark = false, href = "/", markSize = 44 }: LogoProps) {
  const textColor = dark ? "text-white" : "text-[var(--text)]";

  const content = (
    <span className={clsx("inline-flex items-center gap-3", className)}>
      <motion.span
        className={markClassName}
        whileHover={{ rotate: 8, scale: 1.06 }}
        transition={{ type: "spring", stiffness: 300, damping: 12 }}
      >
        <LogoMark dark={dark} size={markSize} />
      </motion.span>
      <span
        className={clsx("font-bold leading-none", textColor, textClassName)}
        style={{ fontFamily: "var(--font-sora)", letterSpacing: "-0.01em", fontSize: 21 }}
      >
        Prime <span className="font-light">Logicx</span>
      </span>
    </span>
  );

  if (!href) return content;

  return (
    <Link href={href} className="inline-flex">
      {content}
    </Link>
  );
}
