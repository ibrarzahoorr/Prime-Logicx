"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight, ShoppingCart, Star, Shirt, ShoppingBag, Lamp, Coffee } from "lucide-react";
import Button from "@/components/shared/Button";
import ServiceBreadcrumb from "@/components/service/ServiceBreadcrumb";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

const products = [
  { name: "Classic Tee", price: "$28", icon: Shirt },
  { name: "Canvas Tote", price: "$34", icon: ShoppingBag },
  { name: "Desk Lamp", price: "$52", icon: Lamp },
  { name: "Ceramic Mug", price: "$18", icon: Coffee },
];

export default function ShopifyEcommerceHero({ service }: { service: Service }) {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[90px]">
      <div className="absolute inset-0 -z-20" style={{ background: "var(--grad-mesh)" }} />

      <div className="container">
        <ServiceBreadcrumb serviceName={service.name} />

        <div className="grid lg:grid-cols-[0.95fr_1.05fr] gap-16 items-center">
          {/* Product grid mockup on the LEFT this time */}
          <motion.div
            initial={{ opacity: 0, y: 30, rotate: 2 }}
            animate={{ opacity: 1, y: 0, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="relative order-2 lg:order-1"
          >
            <div className="rounded-2xl overflow-hidden border border-[var(--border)] bg-[var(--surface)]" style={{ boxShadow: "var(--shadow-lg)" }}>
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-[var(--border)]">
                <span className="text-[12.5px] font-bold">Storefront Preview</span>
                <div className="flex items-center gap-1 text-[11px] text-[var(--muted)]">
                  <Star size={11} fill="currentColor" /> 4.9
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3 p-4">
                {products.map((p, i) => {
                  const Icon = p.icon;
                  return (
                    <motion.div
                      key={p.name}
                      initial={{ opacity: 0, scale: 0.85 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.5 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                      className="rounded-xl overflow-hidden border border-[var(--border)]"
                    >
                      <div
                        className="h-[70px] w-full flex items-center justify-center"
                        style={{ background: i % 2 === 0 ? "var(--surface-3)" : "var(--surface-2)" }}
                      >
                        <Icon size={24} className="text-[var(--text-2)]" strokeWidth={1.6} />
                      </div>
                      <div className="px-2.5 py-2">
                        <div className="text-[11.5px] font-semibold">{p.name}</div>
                        <div className="text-[11px] text-[var(--muted)]">{p.price}</div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
              <div className="px-4 pb-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.1, duration: 0.4 }}
                  className="rounded-xl py-3 text-center text-[12.5px] font-bold text-white"
                  style={{ background: "var(--grad-brand)" }}
                >
                  Checkout Securely
                </motion.div>
              </div>
            </div>

            {/* Floating cart badge counter */}
            <motion.div
              className="absolute -top-5 -right-5 w-16 h-16 rounded-full flex flex-col items-center justify-center text-white"
              style={{ background: "var(--grad-brand)", boxShadow: "var(--shadow-lg)" }}
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: [0.6, 1.15, 1] }}
              transition={{ delay: 1.3, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              <ShoppingCart size={16} />
              <CartCounter />
            </motion.div>
          </motion.div>

          <div className="order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-[12px] font-bold uppercase tracking-wider mb-6"
              style={{ background: "var(--surface-3)", color: "var(--text-2)" }}
            >
              <ShoppingCart size={13} /> {service.category}
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
              className="flex flex-wrap items-center gap-4 mb-10"
            >
              <Button href={waLink(`Hi Prime Logicx, I'd like a quote for ${service.name}.`)} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Get a Free Quote
              </Button>
              <Button href="#features" variant="ghost" icon={<ArrowRight size={16} />}>
                See What&apos;s Included
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex items-center gap-6"
            >
              <div>
                <div className="text-[26px] font-extrabold grad-text leading-none">{service.startingPrice}</div>
                <div className="text-[12.5px] text-[var(--muted)] mt-1">{service.priceNote}</div>
              </div>
              <div className="h-10 w-px bg-[var(--border)]" />
              <div className="flex flex-col gap-1">
                {service.deliverables.slice(0, 2).map((d) => (
                  <div key={d} className="text-[13px] text-[var(--text-2)]">{d}</div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CartCounter() {
  return (
    <motion.span
      className="text-[13px] font-extrabold leading-none mt-0.5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.6 }}
    >
      <motion.span
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 1.6, repeat: Infinity, repeatDelay: 1.2 }}
        className="inline-block"
      >
        12
      </motion.span>
    </motion.span>
  );
}
