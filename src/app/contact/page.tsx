import type { Metadata } from "next";
import { MessageCircle, Mail, Clock, Globe } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import { siteConfig, waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with Prime Logicx for a scoped proposal on your web, app, AI automation, or digital marketing project.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <section className="relative overflow-hidden pt-[150px] pb-[110px]">
      <div className="absolute inset-0 -z-10" style={{ background: "var(--grad-mesh)" }} />
      <div className="container">
        <Reveal className="max-w-[640px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4">Contact</div>
          <h1 className="text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.1] mb-6">
            Let&apos;s talk about <span className="grad-text">your project</span>
          </h1>
          <p className="text-[17.5px] text-[var(--text-2)] leading-relaxed">
            Send us a short description of what you&apos;re trying to build, automate, or grow. You&apos;ll get a
            scoped proposal with a real price, usually within a business day.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-6 max-w-[760px] mx-auto mb-14">
          <Reveal delay={0.05}>
            <a
              href={waLink("Hi Prime Logicx, I'd like to discuss a project.")}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-5 card-surface p-8 h-full hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: "#25d366" }}>
                <MessageCircle size={24} />
              </div>
              <div>
                <h4 className="text-[16px] font-bold mb-1">WhatsApp</h4>
                <p className="text-[14.5px] text-[var(--text-2)]">{siteConfig.whatsappDisplay}</p>
                <p className="text-[13px] text-[var(--muted)] mt-1">Fastest response — usually within hours</p>
              </div>
            </a>
          </Reveal>
          <Reveal delay={0.12}>
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-5 card-surface p-8 h-full hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shrink-0" style={{ background: "var(--grad-brand)" }}>
                <Mail size={24} />
              </div>
              <div>
                <h4 className="text-[16px] font-bold mb-1">Email</h4>
                <p className="text-[14.5px] text-[var(--text-2)]">{siteConfig.email}</p>
                <p className="text-[13px] text-[var(--muted)] mt-1">Response within one business day</p>
              </div>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.18} className="max-w-[760px] mx-auto">
          <div className="card-surface p-8 grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-[var(--brand)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-[15px] font-bold mb-1">Response Time</h4>
                <p className="text-[14px] text-[var(--text-2)]">Proposals typically sent within one business day.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Globe size={20} className="text-[var(--brand)] mt-0.5 shrink-0" />
              <div>
                <h4 className="text-[15px] font-bold mb-1">Availability</h4>
                <p className="text-[14px] text-[var(--text-2)]">Remote team serving clients across all time zones.</p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.24} className="text-center mt-14">
          <Button href={waLink("Hi Prime Logicx, I'd like to discuss a project.")} variant="whatsapp" icon={<MessageCircle size={17} />}>
            Message Us on WhatsApp
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
