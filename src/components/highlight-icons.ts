import type { FunctionalComponent } from "vue";
import {
  Bot,
  Boxes,
  ChartColumn,
  Code2,
  Gauge,
  Layers,
  MonitorSmartphone,
  Rocket,
  ShieldCheck,
  Users,
  Wallet,
  Wrench,
} from "@lucide/vue";

const highlightIcons: Record<string, FunctionalComponent> = {
  ai: Bot,
  architecture: Layers,
  chart: ChartColumn,
  code: Code2,
  delivery: Rocket,
  engineering: Wrench,
  mobile: MonitorSmartphone,
  modules: Boxes,
  perf: Gauge,
  quality: ShieldCheck,
  team: Users,
  wallet: Wallet,
};

export function resolveHighlightIcon(name: string) {
  return highlightIcons[name] ?? null;
}
