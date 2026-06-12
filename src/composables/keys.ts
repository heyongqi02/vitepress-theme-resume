import type { InjectionKey, Ref } from "vue";

import type { ResolvedResumeConfig } from "../types";

export const resumeConfigKey: InjectionKey<Ref<ResolvedResumeConfig>> =
  Symbol("resume-config");
