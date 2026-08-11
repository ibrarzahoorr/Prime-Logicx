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

export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: siteConfig.name,
  url: siteConfig.domain,
  logo: `${siteConfig.domain}/icon.svg`,
  image: `${siteConfig.domain}/icon.svg`,
  description: siteConfig.description,
  telephone: `+${siteConfig.whatsapp}`,
  email: siteConfig.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressCountry: "PK", 
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "31.5204",
    longitude: "74.3587"
  },
  areaServed: ["US", "UK", "CA", "AU", "AE", "PK", "Worldwide"],
  sameAs: [
    siteConfig.socials.linkedin,
    siteConfig.socials.twitter,
    siteConfig.socials.instagram
  ].filter(Boolean)
};

export const speakableSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: siteConfig.name,
  speakable: {
    "@type": "SpeakableSpecification",
    cssSelector: ["h1", "h2", ".faq-answer", ".hero-description"]
  },
  url: siteConfig.domain
};

export const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Ibrar Zahoor",
  jobTitle: "Founder & CEO",
  worksFor: {
    "@type": "Organization",
    name: siteConfig.name
  },
  url: siteConfig.domain,
  sameAs: [
    "https://www.linkedin.com/in/ibrar-zahoor/"
  ]
};

export const itemListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Custom Software Development", url: `${siteConfig.domain}/services/custom-software` },
    { "@type": "ListItem", position: 2, name: "Web App Development", url: `${siteConfig.domain}/services/web-development` },
    { "@type": "ListItem", position: 3, name: "AI Automation Solutions", url: `${siteConfig.domain}/services/ai-automation` },
    { "@type": "ListItem", position: 4, name: "Digital Marketing & SEO", url: `${siteConfig.domain}/services/digital-marketing` }
  ]
};
