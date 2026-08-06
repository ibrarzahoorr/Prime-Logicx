import type { Metadata } from "next";
import Link from "next/link";
import { MessageCircle, ArrowUpRight } from "lucide-react";
import { categories, getServicesByCategory } from "@/data/services";
import { getIcon } from "@/lib/icons";
import Reveal from "@/components/shared/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/shared/StaggerGroup";
import Button from "@/components/shared/Button";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "All Services",
  description:
    "Explore Prime Logicx's full range of services: web & app development, AI automation, machine learning, SaaS, digital marketing, SEO, cloud & DevOps.",
  alternates: { canonical: "/services" },
};

export default function ServicesIndexPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[150px] pb-[80px]">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--grad-mesh)" }} />
        <div className="container max-w-[720px] text-center">
          <Reveal>
            <div className="eyebrow justify-center mb-4">All Services</div>
            <h1 className="text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.1] mb-6">
              Every service a modern business needs, <span className="grad-text">under one roof</span>
            </h1>
            <p className="text-[17.5px] text-[var(--text-2)] leading-relaxed max-w-[580px] mx-auto">
              From your first line of code to your thousandth customer — pick one service or combine several, the same team plans and delivers it.
            </p>
          </Reveal>
        </div>
      </section>

      {categories.map((cat, ci) => (
        <section key={cat.name} className="section pt-0 first:pt-0" style={{ paddingTop: ci === 0 ? 0 : undefined }}>
          <div className="container">
            <Reveal className="mb-10">
              <div className="eyebrow mb-3">{cat.name}</div>
              <h2 className="text-[clamp(22px,3vw,30px)] font-extrabold">{cat.description}</h2>
            </Reveal>
            <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {getServicesByCategory(cat.name).map((service) => {
                const Icon = getIcon(service.icon);
                return (
                  <StaggerItem key={service.slug}>
                    <Link
                      href={`/services/${service.slug}`}
                      className="group block h-full card-surface p-7 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)]"
                    >
                      <div className="w-13 h-13 rounded-2xl flex items-center justify-center text-white mb-5" style={{ background: "var(--grad-brand)", width: 52, height: 52 }}>
                        <Icon size={22} />
                      </div>
                      <h3 className="text-[17px] font-bold mb-2 flex items-center gap-1.5">
                        {service.name}
                        <ArrowUpRight size={15} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--brand)]" />
                      </h3>
                      <p className="text-[13.5px] text-[var(--text-2)] leading-relaxed mb-4">{service.tagline}</p>
                      <div className="text-[12px] font-semibold text-[var(--muted)]">
                        From <span className="text-[var(--text)]">{service.startingPrice}</span> {service.priceNote}
                      </div>
                    </Link>
                  </StaggerItem>
                );
              })}
            </StaggerGroup>
          </div>
        </section>
      ))}

      <section className="section pt-0">
        <div className="container">
          <div className="relative rounded-[28px] overflow-hidden px-8 py-16 md:px-14 md:py-20 text-center" style={{ background: "var(--text)" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 25% 30%, rgba(255,255,255,.14), transparent 55%)" }} />
            <div className="relative z-10">
              <h2 className="text-white text-[clamp(24px,3.4vw,34px)] font-extrabold mb-4 max-w-[560px] mx-auto">
                Not sure which service fits your project?
              </h2>
              <p className="text-white/70 text-[16px] max-w-[500px] mx-auto mb-9">
                Tell us what you&apos;re trying to build or grow — we&apos;ll recommend the right combination.
              </p>
              <Button href={waLink("Hi Prime Logicx, I'd like help figuring out which service fits my project.")} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Talk to Us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
