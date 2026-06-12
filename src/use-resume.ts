import { useData } from "vitepress";
import { computed } from "vue";

import { resolveResumeConfig } from "./config";
import type { ResumeFrontmatter, ResumeThemeOptions } from "./types";

export function useResume() {
  const { frontmatter, theme } = useData<{ resume?: ResumeThemeOptions }>();
  const config = computed(() =>
    resolveResumeConfig(theme.value.resume, frontmatter.value as ResumeFrontmatter),
  );
  const isResumeMode = computed(() => config.value.enabled && Boolean(config.value.profile));
  const profile = computed(() => config.value.profile);

  return { config, isResumeMode, profile };
}
