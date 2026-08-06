"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";
import Magnetic from "@/components/shared/Magnetic";

type Variant = "primary" | "ghost" | "whatsapp" | "dark";

interface ButtonProps {
  href: string;
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  external?: boolean;
  className?: string;
}

const variants: Record<Variant, string> = {
  primary:
    "text-white shadow-[0_10px_30px_rgba(17,17,17,.28)] hover:shadow-[0_14px_36px_rgba(17,17,17,.38)]",
  ghost:
    "bg-white text-[var(--text)] border border-[var(--border)] hover:border-[var(--brand)] hover:text-[var(--brand)]",
  whatsapp:
    "bg-[#25d366] text-white shadow-[0_10px_26px_rgba(37,211,102,.35)] hover:shadow-[0_14px_32px_rgba(37,211,102,.45)]",
  dark: "bg-white/10 text-white border border-white/20 hover:border-white/50 hover:bg-white/15",
};

export default function Button({ href, children, variant = "primary", icon, external, className }: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-semibold text-[15px] transition-[color,background,border-color,box-shadow] duration-300 whitespace-nowrap focus-ring",
    variants[variant],
    className
  );

  const style = variant === "primary" ? { background: "var(--grad-brand)" } : undefined;
  const motionProps = {
    whileHover: { y: -2, scale: 1.015 },
    whileTap: { scale: 0.97, y: 0 },
    transition: { type: "spring" as const, stiffness: 400, damping: 22 },
  };

  if (external || href.startsWith("http") || href.startsWith("mailto") || href.startsWith("tel")) {
    return (
      <Magnetic strength={0.25}>
        <motion.a
          href={href}
          target={href.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className={classes}
          style={style}
          {...motionProps}
        >
          {icon}
          {children}
        </motion.a>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.25}>
      <motion.div className="inline-block" {...motionProps}>
        <Link href={href} className={classes} style={style}>
          {icon}
          {children}
        </Link>
      </motion.div>
    </Magnetic>
  );
}
