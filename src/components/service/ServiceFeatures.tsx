import Reveal from "@/components/shared/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/shared/StaggerGroup";
import TiltCard from "@/components/shared/TiltCard";
import { CheckCircle2 } from "lucide-react";
import type { Service } from "@/data/services";

export default function ServiceFeatures({ service }: { service: Service }) {
  return (
    <section className="section" id="features">
      <div className="container">
        <Reveal className="max-w-[620px] mb-14">
          <div className="eyebrow mb-4">Overview</div>
          <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold mb-5">{service.tagline}</h2>
          <p className="text-[16.5px] text-[var(--text-2)] leading-relaxed">{service.overview}</p>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {service.features.map((f) => (
            <StaggerItem key={f.title}>
              <TiltCard className="relative h-full">
                <div className="card-surface p-7 h-full hover:shadow-[var(--shadow)] hover:-translate-y-1 transition-all duration-300">
                  <CheckCircle2 size={22} className="text-[var(--brand)] mb-4" />
                  <h4 className="text-[16px] font-bold mb-2">{f.title}</h4>
                  <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{f.description}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>

        <div className="grid md:grid-cols-2 gap-6">
          <Reveal className="card-surface p-8">
            <h4 className="text-[15px] font-bold uppercase tracking-wide text-[var(--muted)] mb-5">Deliverables</h4>
            <ul className="flex flex-col gap-3">
              {service.deliverables.map((d, i) => (
                <Reveal key={d} delay={i * 0.04} direction="left">
                  <li className="flex items-start gap-2.5 text-[14.5px] text-[var(--text-2)]">
                    <CheckCircle2 size={16} className="text-[var(--brand)] mt-0.5 shrink-0" />
                    {d}
                  </li>
                </Reveal>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.1} className="card-surface p-8">
            <h4 className="text-[15px] font-bold uppercase tracking-wide text-[var(--muted)] mb-5">Tech We Use</h4>
            <div className="flex flex-wrap gap-2.5">
              {service.techStack.map((t, i) => (
                <Reveal key={t} delay={i * 0.05} className="inline-block">
                  <span className="inline-block px-3.5 py-2 rounded-full text-[13.5px] font-semibold hover:-translate-y-0.5 hover:shadow-[var(--shadow-sm)] transition-all duration-200" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                    {t}
                  </span>
                </Reveal>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
