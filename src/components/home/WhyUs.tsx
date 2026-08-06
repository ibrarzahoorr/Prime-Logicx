import { Users, Globe, FileCheck, Headset, Rocket, ShieldCheck } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import StaggerGroup, { StaggerItem } from "@/components/shared/StaggerGroup";
import TiltCard from "@/components/shared/TiltCard";

const points = [
  { icon: Users, title: "One Point of Contact", desc: "A single team plans your build, automation, and marketing together — not in isolation across three vendors." },
  { icon: Globe, title: "Remote, Worldwide", desc: "We work across time zones with clear async communication, regular updates, and no missed handoffs." },
  { icon: FileCheck, title: "Fixed, Transparent Pricing", desc: "A scoped proposal with a real price before any work starts — no open-ended hourly surprises." },
  { icon: Rocket, title: "Launch-Ready Engineering", desc: "Performance, SEO, and scalability are built in from day one, not bolted on after launch." },
  { icon: ShieldCheck, title: "Security by Default", desc: "Every build follows secure coding practices — your data and your customers' data are protected." },
  { icon: Headset, title: "Support After Launch", desc: "Every project includes a post-launch window, so you're not on your own the day it ships." },
];

export default function WhyUs() {
  return (
    <section className="section" style={{ background: "var(--surface-2)" }} id="why-us">
      <div className="container">
        <Reveal className="max-w-[640px] mx-auto text-center mb-14">
          <div className="eyebrow justify-center mb-4">Why Prime Logicx</div>
          <h2 className="text-[clamp(28px,4.2vw,42px)] font-extrabold mb-4">Built for businesses that don&apos;t want to manage five vendors</h2>
        </Reveal>

        <StaggerGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {points.map((p) => (
            <StaggerItem key={p.title}>
              <TiltCard className="relative h-full">
                <div className="card-surface p-7 h-full hover:shadow-[var(--shadow)] transition-shadow duration-300">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5" style={{ background: "var(--surface-3)", color: "var(--brand)" }}>
                    <p.icon size={22} />
                  </div>
                  <h4 className="text-[16.5px] font-bold mb-2">{p.title}</h4>
                  <p className="text-[14px] text-[var(--text-2)] leading-relaxed">{p.desc}</p>
                </div>
              </TiltCard>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
