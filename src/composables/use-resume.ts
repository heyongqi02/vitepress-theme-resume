import { computed, inject } from "vue";
import { useData } from "vitepress";

import { resolveResumeConfig } from "../config/resolve";
import type { ResumeFrontmatter } from "../types";

import { resumeConfigKey } from "./keys";

export function useResumeConfig() {
  const injected = inject(resumeConfigKey, null);

  if (injected) {
    return { config: injected };
  }

  const { frontmatter, theme } = useData<ResumeFrontmatter>();
  const config = computed(() =>
    resolveResumeConfig(theme.value.resume, frontmatter.value),
  );

  return { config };
}

export function useResumeMode() {
  const { config } = useResumeConfig();

  return computed(() => config.value.enabled && Boolean(config.value.profile));
}

export function useResumeProfile() {
  const { config } = useResumeConfig();

  return computed(() => config.value.profile);
}
