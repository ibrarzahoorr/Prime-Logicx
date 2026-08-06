import { siteConfig } from "@/data/site";
import type { Service, FAQ } from "@/data/services";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: siteConfig.name,
  description:
    "Prime Logicx is a remote-first digital solutions company offering web and app development, AI automation, and digital marketing/SEO services to clients worldwide.",
  url: siteConfig.domain,
  telephone: `+${siteConfig.whatsapp}`,
  email: siteConfig.email,
  areaServed: "Worldwide",
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.domain,
  inLanguage: "en-US",
};

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    name: service.name,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
      url: siteConfig.domain,
    },
    areaServed: "Worldwide",
    url: `${siteConfig.domain}/services/${service.slug}`,
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${siteConfig.domain}${item.url}`,
    })),
  };
}
