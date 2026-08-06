"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { waLink } from "@/data/site";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={waLink("Hi Prime Logicx, I'd like to discuss a project.")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-7 right-7 z-[90] w-15 h-15 rounded-full flex items-center justify-center text-white"
      style={{ background: "#25d366", width: 58, height: 58, boxShadow: "0 10px 28px rgba(37,211,102,.4)" }}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <motion.span
        className="absolute inset-0 rounded-full"
        style={{ background: "#25d366" }}
        animate={{ scale: [1, 1.6], opacity: [0.5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
      />
      <MessageCircle size={26} fill="white" className="relative z-10" strokeWidth={0} />
    </motion.a>
  );
}
