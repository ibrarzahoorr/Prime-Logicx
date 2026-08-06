import type { ComponentType } from "react";
import type { Service } from "@/data/services";
import ServiceHero from "@/components/service/ServiceHero";
import WebDevelopmentHero from "@/components/service/heroes/WebDevelopmentHero";
import AiAutomationHero from "@/components/service/heroes/AiAutomationHero";
import SeoHero from "@/components/service/heroes/SeoHero";
import MobileAppDevelopmentHero from "@/components/service/heroes/MobileAppDevelopmentHero";
import ShopifyEcommerceHero from "@/components/service/heroes/ShopifyEcommerceHero";
import CustomSoftwareDevelopmentHero from "@/components/service/heroes/CustomSoftwareDevelopmentHero";
import UiUxDesignHero from "@/components/service/heroes/UiUxDesignHero";
import MachineLearningHero from "@/components/service/heroes/MachineLearningHero";
import AiChatbotsHero from "@/components/service/heroes/AiChatbotsHero";
import SaasDevelopmentHero from "@/components/service/heroes/SaasDevelopmentHero";
import PpcAdvertisingHero from "@/components/service/heroes/PpcAdvertisingHero";
import SocialMediaMarketingHero from "@/components/service/heroes/SocialMediaMarketingHero";
import ContentMarketingHero from "@/components/service/heroes/ContentMarketingHero";
import BrandingHero from "@/components/service/heroes/BrandingHero";
import CloudSolutionsHero from "@/components/service/heroes/CloudSolutionsHero";
import DevopsHero from "@/components/service/heroes/DevopsHero";
import ApiIntegrationHero from "@/components/service/heroes/ApiIntegrationHero";
import CybersecurityHero from "@/components/service/heroes/CybersecurityHero";

type HeroComponent = ComponentType<{ service: Service }>;

const heroRegistry: Record<string, HeroComponent> = {
  "web-development": WebDevelopmentHero,
  "ai-automation": AiAutomationHero,
  seo: SeoHero,
  "mobile-app-development": MobileAppDevelopmentHero,
  "shopify-ecommerce": ShopifyEcommerceHero,
  "custom-software-development": CustomSoftwareDevelopmentHero,
  "ui-ux-design": UiUxDesignHero,
  "machine-learning": MachineLearningHero,
  "ai-chatbots": AiChatbotsHero,
  "saas-development": SaasDevelopmentHero,
  "ppc-advertising": PpcAdvertisingHero,
  "social-media-marketing": SocialMediaMarketingHero,
  "content-marketing": ContentMarketingHero,
  branding: BrandingHero,
  "cloud-solutions": CloudSolutionsHero,
  devops: DevopsHero,
  "api-integration": ApiIntegrationHero,
  cybersecurity: CybersecurityHero,
};

export function getHeroForService(slug: string): HeroComponent {
  return heroRegistry[slug] ?? ServiceHero;
}
