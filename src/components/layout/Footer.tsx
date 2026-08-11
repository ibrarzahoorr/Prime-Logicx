import Link from "next/link";
import { Mail, MessageCircle } from "lucide-react";
import { categories, getServicesByCategory } from "@/data/services";
import { siteConfig, waLink } from "@/data/site";
import Logo, { LogoMark } from "@/components/shared/Logo";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--border)]">
      <div className="overflow-hidden select-none" style={{ background: "#0a0a0a" }}>
        <div className="container flex items-center justify-center gap-[2vw] py-10 whitespace-nowrap">
          <span className="shrink-0" style={{ width: "clamp(28px, 8vw, 110px)", height: "clamp(28px, 8vw, 110px)" }}>
            <LogoMark dark size="100%" />
          </span>
          <span
            className="font-bold"
            style={{
              fontFamily: "var(--font-sora)",
              fontSize: "clamp(28px, 9vw, 140px)",
              letterSpacing: "-0.02em",
              lineHeight: 1,
              color: "#fafafa",
            }}
          >
            Prime <span className="font-light" style={{ color: "#8a8a8a" }}>Logicx</span>
          </span>
        </div>
      </div>

      <div className="container py-16" style={{ background: "var(--surface)" }}>
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10">
          <div className="col-span-2">
            <Logo className="mb-4" />
            <p className="text-[14px] text-[var(--text-2)] leading-relaxed max-w-xs mb-6">
              One remote team for software, AI automation, and digital growth — serving clients worldwide.
            </p>
            <div className="flex flex-col gap-2.5">
              <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
                <MessageCircle size={16} /> {siteConfig.whatsappDisplay}
              </a>
              <a href={`mailto:${siteConfig.email}`} className="inline-flex items-center gap-2 text-[14px] font-medium text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
                <Mail size={16} /> {siteConfig.email}
              </a>
            </div>
          </div>

          {categories.map((cat) => (
            <div key={cat.name}>
              <div className="text-[12px] font-bold uppercase tracking-wider text-[var(--muted)] mb-4">{cat.name}</div>
              <div className="flex flex-col gap-2.5">
                {getServicesByCategory(cat.name).map((s) => (
                  <Link key={s.slug} href={`/services/${s.slug}`} className="text-[14px] text-[var(--text-2)] hover:text-[var(--text)] transition-colors">
                    {s.shortName}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 border-t border-[var(--border)] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-6 text-[14px] text-[var(--text-2)]">
            <Link href="/about" className="hover:text-[var(--text)] transition-colors">About</Link>
            <Link href="/work" className="hover:text-[var(--text)] transition-colors">Work</Link>
            <Link href="/services" className="hover:text-[var(--text)] transition-colors">All Services</Link>
            <Link href="/blog" className="hover:text-[var(--text)] transition-colors">Blog</Link>
            <Link href="/contact" className="hover:text-[var(--text)] transition-colors">Contact</Link>
          </div>
          <div className="text-[13px] text-[var(--muted)]">&copy; {year} Prime Logicx. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}
