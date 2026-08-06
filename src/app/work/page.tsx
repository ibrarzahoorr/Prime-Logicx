import type { Metadata } from "next";
import { MessageCircle, ArrowUpRight, TrendingUp } from "lucide-react";
import { caseStudies } from "@/data/work";
import Reveal from "@/components/shared/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/shared/StaggerGroup";
import Button from "@/components/shared/Button";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Work",
  description: "Case studies from Prime Logicx: web & app development, AI automation, SEO, and digital marketing projects delivered for clients worldwide.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[150px] pb-[80px]">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--grad-mesh)" }} />
        <div className="container max-w-[720px] text-center">
          <Reveal>
            <div className="eyebrow justify-center mb-4">Our Work</div>
            <h1 className="text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.1] mb-6">
              Real projects, <span className="grad-text">real results</span>
            </h1>
            <p className="text-[17.5px] text-[var(--text-2)] leading-relaxed max-w-[580px] mx-auto">
              A sample of the builds, automations, and campaigns we&apos;ve delivered across industries.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <StaggerGroup className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {caseStudies.map((project) => (
              <StaggerItem key={project.slug}>
                <div className="group card-surface p-8 h-full transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lg)] relative overflow-hidden">
                  <div
                    className="absolute -top-16 -right-16 w-48 h-48 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl"
                    style={{ background: "var(--grad-brand)" }}
                  />
                  <div className="relative">
                    <div className="text-[12px] font-bold uppercase tracking-wider text-[var(--brand)] mb-3">{project.category}</div>
                    <h3 className="text-[21px] font-bold mb-2 flex items-start gap-1.5">
                      {project.title}
                      <ArrowUpRight size={18} className="opacity-0 group-hover:opacity-100 transition-opacity text-[var(--brand)] shrink-0 mt-1" />
                    </h3>
                    <div className="text-[13.5px] text-[var(--muted)] mb-4">{project.client}</div>
                    <p className="text-[14.5px] text-[var(--text-2)] leading-relaxed mb-5">{project.summary}</p>
                    <div className="flex items-center gap-2 text-[13.5px] font-semibold text-emerald-600 mb-5">
                      <TrendingUp size={15} /> {project.result}
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((t) => (
                        <span key={t} className="px-3 py-1.5 rounded-full text-[12px] font-semibold" style={{ background: "var(--surface-2)", border: "1px solid var(--border)" }}>
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container">
          <div className="relative rounded-[28px] overflow-hidden px-8 py-16 md:px-14 md:py-20 text-center" style={{ background: "var(--text)" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 25% 30%, rgba(255,255,255,.14), transparent 55%)" }} />
            <div className="relative z-10">
              <h2 className="text-white text-[clamp(24px,3.4vw,34px)] font-extrabold mb-4 max-w-[560px] mx-auto">
                Want results like these?
              </h2>
              <p className="text-white/70 text-[16px] max-w-[500px] mx-auto mb-9">
                Tell us about your project — you&apos;ll get a scoped proposal within a business day.
              </p>
              <Button href={waLink("Hi Prime Logicx, I saw your work and would like to discuss a project.")} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
