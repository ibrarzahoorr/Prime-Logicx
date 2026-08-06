export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  result: string;
  tags: string[];
}

export interface SpotlightMetric {
  label: string;
  value: string;
}

export const spotlight = {
  slug: "ecommerce-replatform",
  eyebrow: "Featured Case Study",
  title: "Replatforming a UK apparel brand to Shopify — without losing a single ranking",
  client: "Apparel Brand, UK",
  category: "Shopify & E-commerce, SEO",
  summary:
    "The brand's legacy store was slow, hard to update, and losing ground in search. We rebuilt it on Shopify with a custom theme, then executed a carefully mapped 301 redirect strategy so every page's SEO equity carried over on launch day — no ranking dip, no lost traffic.",
  metrics: [
    { label: "Organic traffic", value: "+60%" },
    { label: "Page load time", value: "-48%" },
    { label: "Conversion rate", value: "+22%" },
    { label: "Time to launch", value: "6 weeks" },
  ] as SpotlightMetric[],
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "ecommerce-replatform",
    title: "Shopify replatform with zero ranking loss",
    client: "Apparel Brand, UK",
    category: "Shopify & E-commerce",
    summary: "Migrated a legacy store to Shopify with a custom theme, preserving SEO equity through a carefully mapped redirect strategy.",
    result: "+60% organic traffic in 4 months",
    tags: ["Shopify", "SEO", "E-commerce"],
  },
  {
    slug: "ai-support-chatbot",
    title: "AI support assistant trained on product catalog",
    client: "SaaS Startup, US",
    category: "AI & Automation",
    summary: "Built a custom-trained chatbot that resolves tier-1 support tickets automatically and hands off complex cases to the team.",
    result: "65% of tickets resolved without a human",
    tags: ["AI Chatbot", "Automation", "SaaS"],
  },
  {
    slug: "fintech-mvp-launch",
    title: "Fintech MVP built and launched in 8 weeks",
    client: "Fintech Startup, UAE",
    category: "SaaS Development",
    summary: "Designed and built a multi-tenant SaaS MVP with subscription billing to validate the product ahead of a seed round.",
    result: "Closed seed funding within a quarter of launch",
    tags: ["SaaS", "UI/UX", "Product Strategy"],
  },
  {
    slug: "seo-turnaround",
    title: "Technical SEO turnaround for a stalled site",
    client: "B2B Services Company, Canada",
    category: "SEO",
    summary: "Fixed crawlability and Core Web Vitals issues, then rebuilt the content strategy around real search intent.",
    result: "Page-one rankings for 22 target keywords",
    tags: ["Technical SEO", "Content Strategy"],
  },
  {
    slug: "internal-ops-automation",
    title: "Workflow automation cutting manual ops hours",
    client: "Logistics Company, Australia",
    category: "AI & Automation",
    summary: "Automated document processing and multi-step approval workflows that previously required a full-time coordinator.",
    result: "30+ hours/week of manual work eliminated",
    tags: ["Automation", "Internal Tools"],
  },
  {
    slug: "app-launch-campaign",
    title: "Mobile app launch with paid + organic growth",
    client: "Consumer App, Germany",
    category: "Mobile App Development",
    summary: "Built the cross-platform app and ran the coordinated PPC and social campaign for launch week.",
    result: "15K installs in the first 30 days",
    tags: ["Mobile App", "PPC", "Social Media"],
  },
];
