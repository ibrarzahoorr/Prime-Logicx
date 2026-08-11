"use client";

import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { categories, getServicesByCategory } from "@/data/services";
import { getIcon } from "@/lib/icons";
import { siteConfig, waLink } from "@/data/site";
import Button from "@/components/shared/Button";
import Logo from "@/components/shared/Logo";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-[100] transition-all duration-300"
        style={{
          background: scrolled ? "rgba(251,251,253,.85)" : "rgba(251,251,253,.6)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
          boxShadow: scrolled ? "0 4px 24px rgba(18,18,28,.05)" : "none",
        }}
      >
        <div className="container flex items-center justify-between h-[76px]">
          <Logo className="shrink-0" />

          <nav className="hidden lg:flex items-center gap-1">
            <div className="relative" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className="flex items-center gap-1.5 px-4 py-2.5 rounded-lg font-medium text-[15px] transition-colors focus-ring"
                style={{
                  color: servicesOpen ? "var(--text)" : "var(--text-2)",
                  background: servicesOpen ? "var(--surface-2)" : "transparent",
                }}
              >
                Services
                <ChevronDown size={15} className={`transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.99 }}
                    transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[820px]"
                  >
                    <div className="rounded-2xl border border-[var(--border)] bg-white shadow-[0_24px_60px_rgba(18,18,28,.14)] p-6 grid grid-cols-4 gap-5">
                      {categories.map((cat, ci) => (
                        <motion.div
                          key={cat.name}
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.3, delay: ci * 0.04, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] mb-3 px-2">{cat.name}</div>
                          <div className="flex flex-col gap-0.5">
                            {getServicesByCategory(cat.name).map((s) => {
                              const Icon = getIcon(s.icon);
                              return (
                                <Link
                                  key={s.slug}
                                  href={`/services/${s.slug}`}
                                  className="group flex items-center gap-2.5 px-2 py-2 rounded-lg hover:bg-[var(--surface-2)] transition-colors"
                                >
                                  <span className="w-7 h-7 rounded-md flex items-center justify-center shrink-0 bg-[var(--surface-2)] group-hover:bg-[var(--text)] transition-colors duration-200">
                                    <Icon size={14} className="text-[var(--text-2)] group-hover:text-white transition-colors duration-200" />
                                  </span>
                                  <span className="text-[13.5px] font-medium text-[var(--text-2)] group-hover:text-[var(--text)] leading-snug">
                                    {s.shortName}
                                  </span>
                                </Link>
                              );
                            })}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3, delay: 0.2 }}
                      className="rounded-2xl border border-[var(--border)] bg-white shadow-[0_24px_60px_rgba(18,18,28,.14)] mt-3 px-6 py-4 flex items-center justify-between"
                    >
                      <span className="text-[13.5px] text-[var(--text-2)]">Not sure which service fits your project?</span>
                      <Link href="/contact" className="group inline-flex items-center gap-1.5 text-[13.5px] font-semibold text-[var(--text)]">
                        Talk to us <ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" />
                      </Link>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link href="/about" className="px-4 py-2.5 rounded-lg font-medium text-[15px] text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors">
              About
            </Link>
            <Link href="/work" className="px-4 py-2.5 rounded-lg font-medium text-[15px] text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors">
              Work
            </Link>
            <Link href="/blog" className="px-4 py-2.5 rounded-lg font-medium text-[15px] text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors">
              Blog
            </Link>
            <Link href="/contact" className="px-4 py-2.5 rounded-lg font-medium text-[15px] text-[var(--text-2)] hover:text-[var(--text)] hover:bg-[var(--surface-2)] transition-colors">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-3">
            <div className="hidden sm:block">
              <Button href={waLink("Hi Prime Logicx, I'd like to discuss a project.")} variant="primary" className="!py-2.5 !px-5 !text-[14px]">
                Get a Quote
              </Button>
            </div>
            <button
              type="button"
              className="lg:hidden relative z-10 w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--surface-2)] transition-colors"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              aria-expanded={mobileOpen}
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      {mounted &&
        createPortal(
          <AnimatePresence>
            {mobileOpen && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                className="fixed inset-0 z-[999] bg-white overflow-y-auto lg:hidden"
              >
                <div className="container flex items-center justify-between h-[76px]">
                  <div onClick={() => setMobileOpen(false)}>
                    <Logo />
                  </div>
                  <button
                    type="button"
                    className="w-10 h-10 flex items-center justify-center rounded-lg hover:bg-[var(--surface-2)]"
                    onClick={() => setMobileOpen(false)}
                    aria-label="Close menu"
                  >
                    <X size={22} />
                  </button>
                </div>

                <div className="container pb-10 flex flex-col gap-1">
                  <motion.button
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.35, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
                    type="button"
                    className="flex items-center justify-between py-5 min-h-[56px] border-b border-[var(--border)] text-lg font-semibold active:opacity-60 transition-opacity"
                    onClick={() => setMobileServicesOpen((v) => !v)}
                  >
                    Services
                    <ChevronDown size={18} className={`transition-transform ${mobileServicesOpen ? "rotate-180" : ""}`} />
                  </motion.button>
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <div className="py-2">
                          {categories.map((cat, ci) => (
                            <motion.div
                              key={cat.name}
                              initial={{ opacity: 0, y: 8 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ duration: 0.3, delay: ci * 0.05 }}
                              className="mb-4"
                            >
                              <div className="text-[11px] font-bold uppercase tracking-wider text-[var(--muted)] mb-2 mt-3">{cat.name}</div>
                              {getServicesByCategory(cat.name).map((s) => {
                                const Icon = getIcon(s.icon);
                                return (
                                  <Link
                                    key={s.slug}
                                    href={`/services/${s.slug}`}
                                    onClick={() => setMobileOpen(false)}
                                    className="flex items-center gap-3 py-3 min-h-[48px] text-[15px] text-[var(--text-2)] active:opacity-60 transition-opacity"
                                  >
                                    <Icon size={16} className="text-[var(--muted)] shrink-0" />
                                    {s.shortName}
                                  </Link>
                                );
                              })}
                            </motion.div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {[
                    { label: "About", href: "/about" },
                    { label: "Work", href: "/work" },
                    { label: "Blog", href: "/blog" },
                    { label: "Contact", href: "/contact" },
                  ].map((item, i) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.35, delay: 0.1 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center py-5 min-h-[56px] border-b border-[var(--border)] text-lg font-semibold active:opacity-60 transition-opacity"
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}

                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    className="mt-8"
                  >
                    <Button href={waLink("Hi Prime Logicx, I'd like to discuss a project.")} variant="primary" className="w-full justify-center">
                      Get a Quote
                    </Button>
                  </motion.div>
                  <div className="mt-4 text-center text-sm text-[var(--muted)]">{siteConfig.email}</div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body
        )}
    </>
  );
}
