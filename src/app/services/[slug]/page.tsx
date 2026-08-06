import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import { siteConfig } from "@/data/site";
import { serviceSchema, faqSchema, breadcrumbSchema } from "@/lib/schema";
import { getHeroForService } from "@/components/service/heroes";
import { getProcessForCategory } from "@/components/service/process";
import ServiceFeatures from "@/components/service/ServiceFeatures";
import ServiceFaq from "@/components/service/ServiceFaq";
import RelatedServices from "@/components/service/RelatedServices";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  const url = `/services/${service.slug}`;
  return {
    title: service.name,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${service.name} | ${siteConfig.name}`,
      description: service.metaDescription,
      siteName: siteConfig.name,
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.name} | ${siteConfig.name}`,
      description: service.metaDescription,
    },
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) notFound();

  const related = getRelatedServices(service);
  const HeroComponent = getHeroForService(service.slug);
  const ProcessComponent = getProcessForCategory(service.category);
  const jsonLd = [
    serviceSchema(service),
    faqSchema(service.faqs),
    breadcrumbSchema([
      { name: "Home", url: "/" },
      { name: "Services", url: "/services" },
      { name: service.name, url: `/services/${service.slug}` },
    ]),
  ];

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HeroComponent service={service} />
      <ServiceFeatures service={service} />
      <ProcessComponent steps={service.process} />
      <ServiceFaq faqs={service.faqs} />
      <RelatedServices related={related} current={service} />
    </>
  );
}
