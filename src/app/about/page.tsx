import type { Metadata } from "next";
import { MessageCircle, Target, Eye, Heart, Zap, Users2, Globe2 } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/shared/StaggerGroup";
import Button from "@/components/shared/Button";
import { waLink } from "@/data/site";

export const metadata: Metadata = {
  title: "About Us",
  description: "Prime Logicx is a remote-first digital solutions company — web & app development, AI automation, and digital marketing for clients worldwide.",
  alternates: { canonical: "/about" },
};

const values = [
  { icon: Target, title: "Outcome-Driven", desc: "We measure success by your results — traffic, conversions, and time saved — not just deliverables." },
  { icon: Eye, title: "Radical Transparency", desc: "Fixed pricing, clear timelines, and honest updates. No surprises, no jargon." },
  { icon: Heart, title: "Craft Matters", desc: "We sweat the details other agencies skip — performance, accessibility, and polish." },
  { icon: Zap, title: "Move Fast, Stay Sharp", desc: "Lean process, senior team, no bureaucracy slowing your project down." },
  { icon: Users2, title: "One Accountable Team", desc: "Development, AI, and marketing planned together — not handed off between vendors." },
  { icon: Globe2, title: "Built for the World", desc: "A remote-first team serving clients across time zones with clear async communication." },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden pt-[150px] pb-[80px]">
        <div className="absolute inset-0 -z-10" style={{ background: "var(--grad-mesh)" }} />
        <div className="container max-w-[760px] text-center">
          <Reveal>
            <div className="eyebrow justify-center mb-4">About Prime Logicx</div>
            <h1 className="text-[clamp(32px,5vw,54px)] font-extrabold leading-[1.1] mb-6">
              One team, <span className="grad-text">every discipline</span> your business needs
            </h1>
            <p className="text-[17.5px] text-[var(--text-2)] leading-relaxed max-w-[600px] mx-auto">
              Prime Logicx exists because businesses were tired of stitching together a web agency, an AI consultant,
              and a marketing shop that never talked to each other. We built one remote team that plans and delivers
              all three together.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container grid md:grid-cols-2 gap-10">
          <Reveal className="card-surface p-9">
            <h2 className="text-[20px] font-bold mb-3">Our Mission</h2>
            <p className="text-[15px] text-[var(--text-2)] leading-relaxed">
              To give growing businesses access to senior-level software engineering, AI automation, and marketing —
              without the overhead of managing multiple vendors or building an in-house team from scratch.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="card-surface p-9">
            <h2 className="text-[20px] font-bold mb-3">How We Work</h2>
            <p className="text-[15px] text-[var(--text-2)] leading-relaxed">
              Every engagement starts with a scoped proposal and a fixed price. We build in the open with regular
              check-ins, test thoroughly before launch, and stay on for support after you go live.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ background: "var(--surface-2)" }}>
        <div className="container">
          <Reveal className="max-w-[600px] mx-auto text-center mb-14">
            <div className="eyebrow justify-center mb-4">What We Value</div>
            <h2 className="text-[clamp(26px,3.6vw,38px)] font-extrabold">The principles behind every project</h2>
          </Reveal>
          <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <div className="card-surface p-7 h-full">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--surface-3)", color: "var(--brand)" }}>
                    <v.icon size={22} />
                  </div>
                  <h4 className="text-[16px] font-bold mb-2">{v.title}</h4>
                  <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{v.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="relative rounded-[28px] overflow-hidden px-8 py-16 md:px-14 md:py-20 text-center" style={{ background: "var(--text)" }}>
            <div className="absolute inset-0" style={{ background: "radial-gradient(circle at 25% 30%, rgba(255,255,255,.14), transparent 55%)" }} />
            <div className="relative z-10">
              <h2 className="text-white text-[clamp(24px,3.4vw,34px)] font-extrabold mb-4 max-w-[560px] mx-auto">
                Let&apos;s build something worth talking about
              </h2>
              <p className="text-white/70 text-[16px] max-w-[500px] mx-auto mb-9">
                Tell us about your project — you&apos;ll get a scoped proposal within a business day.
              </p>
              <Button href={waLink("Hi Prime Logicx, I'd like to discuss a project.")} variant="whatsapp" icon={<MessageCircle size={17} />}>
                Start a Conversation
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
