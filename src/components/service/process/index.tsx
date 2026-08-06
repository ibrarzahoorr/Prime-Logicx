import type { ComponentType } from "react";
import type { ProcessStep, ServiceCategory } from "@/data/services";
import WebDevProcess from "@/components/service/process/WebDevProcess";
import AiDataProcess from "@/components/service/process/AiDataProcess";
import MarketingProcess from "@/components/service/process/MarketingProcess";
import CloudProcess from "@/components/service/process/CloudProcess";

type ProcessComponent = ComponentType<{ steps: ProcessStep[] }>;

const processRegistry: Record<ServiceCategory, ProcessComponent> = {
  "Web & App Development": WebDevProcess,
  "AI & Data": AiDataProcess,
  "Digital Marketing": MarketingProcess,
  "Cloud & Infrastructure": CloudProcess,
};

export function getProcessForCategory(category: ServiceCategory): ProcessComponent {
  return processRegistry[category];
}
