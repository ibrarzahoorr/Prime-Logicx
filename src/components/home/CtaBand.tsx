"use client";

import { motion } from "framer-motion";
import { MessageCircle, Mail } from "lucide-react";
import Button from "@/components/shared/Button";
import { waLink, siteConfig } from "@/data/site";

export default function CtaBand() {
  return (
    <section className="section">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-[28px] overflow-hidden px-8 py-20 md:px-16 md:py-24 text-center"
          style={{ background: "var(--text)" }}
        >
          <motion.div
            className="absolute inset-0"
            style={{ background: "radial-gradient(circle at 20% 20%, rgba(255,255,255,.16), transparent 55%), radial-gradient(circle at 85% 80%, rgba(255,255,255,.10), transparent 55%)" }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="relative z-10">
            <h2 className="text-white text-[clamp(28px,4.4vw,44px)] font-extrabold mb-5 max-w-[640px] mx-auto">
              Have a project in mind?
            </h2>
            <p className="text-white/70 text-[17px] max-w-[560px] mx-auto mb-10 leading-relaxed">
              Tell us what you&apos;re trying to build, automate, or grow — you&apos;ll get a scoped proposal with a real price, usually within a business day.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Button href={waLink("Hi Prime Logicx, I'd like a quote for my project.")} variant="whatsapp" icon={<MessageCircle size={17} />}>
                WhatsApp Us
              </Button>
              <Button href={`mailto:${siteConfig.email}`} variant="dark" icon={<Mail size={16} />}>
                Email Us
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
