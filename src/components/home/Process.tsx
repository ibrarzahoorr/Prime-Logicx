import Reveal from "@/components/shared/Reveal";

const steps = [
  { n: "01", title: "Discovery", desc: "We learn your goals, current setup, and constraints in a focused call." },
  { n: "02", title: "Proposal", desc: "A written scope, timeline, and fixed price for you to review." },
  { n: "03", title: "Design & Build", desc: "Work begins with regular progress check-ins and demos." },
  { n: "04", title: "Launch", desc: "You review everything on staging before anything goes live." },
  { n: "05", title: "Support & Grow", desc: "A post-launch window to fix issues and keep improving results." },
];

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="container">
        <Reveal className="max-w-[640px] mx-auto text-center mb-16">
          <div className="eyebrow justify-center mb-4">Process</div>
          <h2 className="text-[clamp(28px,4.2vw,42px)] font-extrabold mb-4">How a project runs, start to finish</h2>
        </Reveal>

        <div className="relative">
          <div className="hidden lg:block absolute top-6 left-0 right-0 h-[2px]" style={{ background: "var(--border)" }} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6">
            {steps.map((step, i) => (
              <Reveal key={step.n} delay={i * 0.1} className="relative">
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-white font-extrabold text-[15px] mb-5 relative z-10"
                  style={{ background: "var(--grad-brand)" }}
                >
                  {step.n}
                </div>
                <h4 className="text-[16px] font-bold mb-2">{step.title}</h4>
                <p className="text-[13.5px] text-[var(--text-2)] leading-relaxed">{step.desc}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
