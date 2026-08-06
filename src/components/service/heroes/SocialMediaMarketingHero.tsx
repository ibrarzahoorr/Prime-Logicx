"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, Share2, Heart, MessageCircle as Comment, Send, Image, Video, Layers, Camera } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const posts = [
  { icon: Image, tone: "var(--surface-3)", iconTone: "var(--text-2)" },
  { icon: Video, tone: "var(--grad-brand)", iconTone: "#fff" },
  { icon: Layers, tone: "var(--surface-2)", iconTone: "var(--text-2)" },
  { icon: Camera, tone: "var(--surface-3)", iconTone: "var(--text-2)" },
];

export default function SocialMediaMarketingHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />

      <div className="container">
        <ServiceBreadcrumb serviceName={service.name} />

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
              style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
            >
              <Share2 size={13} /> {service.category}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(34px,4.8vw,56px)] font-extrabold leading-[1.06] mb-5"
            >
              {service.name}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
              className="text-[17.5px] text-[var(--text-2)] leading-relaxed mb-9 max-w-[520px]"
            >
              {service.heroDescription}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4"
            >
              <Button href={waLink(`Hi Prime Logicx, I'd like a quote for ${service.name}.`)} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Get a Free Quote
              </Button>
              <Button href="#features" variant="ghost" icon={<ArrowRight size={16} />}>
                See What&apos;s Included
              </Button>
            </motion.div>
          </div>

          {/* Instagram-style post grid, facing the text */}
          <div className="grid grid-cols-2 gap-4">
            {posts.map((post, i) => {
              const Icon = post.icon;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 26, scale: 0.9 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.3 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="card-surface overflow-hidden"
                  style={{ boxShadow: "var(--shadow)" }}
                >
                  <div className="aspect-square w-full flex items-center justify-center relative" style={{ background: post.tone }}>
                    <motion.div
                      animate={{ scale: [1, 1.12, 1] }}
                      transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.2 }}
                    >
                      <Icon size={30} style={{ color: post.iconTone }} strokeWidth={1.6} />
                    </motion.div>
                  </div>
                  <div className="px-3 py-2.5 flex items-center justify-between">
                    <motion.span
                      className="flex items-center gap-1 text-[11px] text-[var(--muted)]"
                      animate={{ opacity: [0.6, 1, 0.6] }}
                      transition={{ duration: 2.6, repeat: Infinity, delay: i * 0.3 }}
                    >
                      <Heart size={11} /> {120 + i * 34}
                    </motion.span>
                    <span className="flex items-center gap-1 text-[11px] text-[var(--muted)]">
                      <Comment size={11} /> {8 + i * 3}
                    </span>
                    <span className="flex items-center gap-1 text-[11px] text-[var(--muted)]">
                      <Send size={11} /> {2 + i}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
