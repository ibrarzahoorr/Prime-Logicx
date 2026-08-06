import Link from "next/link";
import { ArrowUpRight, MessageCircle } from "lucide-react";
import { getIcon } from "@/lib/icons";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";
import TiltCard from "@/components/shared/TiltCard";
import { waLink } from "@/data/site";
import type { Service } from "@/data/services";

export default function RelatedServices({ related, current }: { related: Service[]; current: Service }) {
  return (
    <>
      {related.length > 0 && (
        <section className="section pt-0">
          <div className="container">
            <Reveal className="mb-10">
              <div className="eyebrow mb-4">Pairs Well With</div>
              <h2 className="text-[clamp(24px,3.2vw,32px)] font-extrabold">Related services</h2>
            </Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {related.map((s, i) => {
                const Icon = getIcon(s.icon);
                return (
                  <Reveal key={s.slug} delay={i * 0.08}>
                    <TiltCard className="relative h-full">
                      <Link href={`/services/${s.slug}`} className="group block h-full card-surface p-6 hover:-translate-y-1 hover:shadow-[var(--shadow-lg)] transition-all duration-300">
                        <Icon size={22} className="text-[var(--brand)] mb-4" />
                        <h4 className="text-[15.5px] font-bold mb-1.5 flex items-center gap-1.5">
                          {s.shortName}
                          <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--brand)]" />
                        </h4>
                        <p className="text-[13.5px] text-[var(--text-2)] leading-relaxed">{s.tagline}</p>
                      </Link>
                    </TiltCard>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>
      )}

      <section className="section pt-0">
        <div className="container">
          <div className="relative rounded-[28px] overflow-hidden px-8 py-16 md:px-14 md:py-20 text-center" style={{ background: "var(--text)" }}>
            <div
              className="absolute inset-0"
              style={{ background: "radial-gradient(circle at 25% 30%, rgba(255,255,255,.14), transparent 55%)" }}
            />
            <div className="relative z-10">
              <h2 className="text-white text-[clamp(24px,3.4vw,34px)] font-extrabold mb-4 max-w-[560px] mx-auto">
                Ready to start your {current.shortName.toLowerCase()} project?
              </h2>
              <p className="text-white/70 text-[16px] max-w-[500px] mx-auto mb-9">
                Get a scoped proposal with a fixed price, usually within a business day.
              </p>
              <Button href={waLink(`Hi Prime Logicx, I'd like a quote for ${current.name}.`)} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Talk to Us on WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
