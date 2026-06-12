import type { FunctionalComponent } from "vue";
import {
  Briefcase,
  CircleDollarSign,
  Mail,
  MapPin,
  Phone,
  User,
} from "@lucide/vue";

const iconRules: Array<{ test: (text: string) => boolean; icon: FunctionalComponent }> = [
  { test: (text) => /@/.test(text), icon: Mail },
  {
    test: (text) => /^1[3-9]\d{9}$/.test(text.replace(/\D/g, "")),
    icon: Phone,
  },
  { test: (text) => /^男$|^女$/.test(text.trim()), icon: User },
  { test: (text) => /年龄/.test(text), icon: User },
  { test: (text) => /薪资|K$/i.test(text), icon: CircleDollarSign },
  { test: (text) => /城市/.test(text), icon: MapPin },
  { test: (text) => /求职意向|工作经验|工程师/.test(text), icon: Briefcase },
  { test: (text) => /^\d+年/.test(text), icon: Briefcase },
];

export function resolveResumeIcon(text: string | number) {
  const value = String(text);

  return iconRules.find((rule) => rule.test(value))?.icon ?? null;
}
