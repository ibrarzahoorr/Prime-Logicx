"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";

export default function CursorSpotlight() {
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 60, damping: 20, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 60, damping: 20, mass: 0.5 });
  const background = useMotionTemplate`radial-gradient(600px circle at ${springX}px ${springY}px, rgba(17,17,17,.035), transparent 70%)`;

  useEffect(() => {
    const supportsHover = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    setEnabled(supportsHover);
    if (!supportsHover) return;

    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [x, y]);

  if (!enabled) return null;

  return <motion.div className="pointer-events-none fixed inset-0 z-[5]" style={{ background }} />;
}
