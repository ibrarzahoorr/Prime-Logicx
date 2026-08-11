import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import TechMarquee from "@/components/home/TechMarquee";
import ServicesOverview from "@/components/home/ServicesOverview";
import Industries from "@/components/home/Industries";
import WhyUs from "@/components/home/WhyUs";
import Comparison from "@/components/home/Comparison";
import Process from "@/components/home/Process";
import CaseStudySpotlight from "@/components/home/CaseStudySpotlight";
import Testimonials from "@/components/home/Testimonials";
import CtaBand from "@/components/home/CtaBand";
import { faqSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Best Custom Software Development, AI Automation & Web Agency",
  description:
    "Looking for the best software development company? Prime Logicx builds elite custom web & mobile apps, high-converting SaaS products, cutting-edge AI automation, and top-tier SEO digital marketing. Hire expert developers today.",
  alternates: { canonical: "/" },
};

const homeFaqs = [
  {
    question: "What services does Prime Logicx offer?",
    answer:
      "Prime Logicx offers a full range of IT services: web and app development, Shopify and e-commerce, custom software, UI/UX design, AI automation, machine learning, AI chatbots, SaaS development, SEO, paid advertising, social media and content marketing, branding, cloud solutions, DevOps, API integration, and cybersecurity.",
  },
  {
    question: "Does Prime Logicx work with international clients?",
    answer: "Yes. Prime Logicx is a fully remote team serving clients worldwide, with all communication and delivery handled online.",
  },
  {
    question: "Can Prime Logicx handle a project that needs more than one service?",
    answer:
      "Yes — that kind of combined project is exactly what Prime Logicx is built for. Having development, AI automation, and marketing under one team means these pieces are planned together from the start instead of being handed off between separate vendors.",
  },
  {
    question: "How do I get a quote from Prime Logicx?",
    answer: "Message Prime Logicx on WhatsApp or email with a short description of your project. You'll receive a scoped proposal with a fixed price range, typically within a business day.",
  },
];

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema(homeFaqs)) }} />
      <Hero />
      <Stats />
      <TechMarquee />
      <ServicesOverview />
      <Industries />
      <WhyUs />
      <Comparison />
      <Process />
      <CaseStudySpotlight />
      <Testimonials />
      <CtaBand />
    </>
  );
}
