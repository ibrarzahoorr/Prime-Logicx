import {
  Code2,
  Smartphone,
  ShoppingCart,
  Terminal,
  PenTool,
  Sparkles,
  BrainCircuit,
  MessageSquare,
  Layers,
  TrendingUp,
  Target,
  Share2,
  FileText,
  Palette,
  Cloud,
  GitBranch,
  Plug,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export const iconMap: Record<string, LucideIcon> = {
  Code2,
  Smartphone,
  ShoppingCart,
  Terminal,
  PenTool,
  Sparkles,
  BrainCircuit,
  MessageSquare,
  Layers,
  TrendingUp,
  Target,
  Share2,
  FileText,
  Palette,
  Cloud,
  GitBranch,
  Plug,
  ShieldCheck,
};

export function getIcon(name: string): LucideIcon {
  return iconMap[name] ?? Code2;
}
