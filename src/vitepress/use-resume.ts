import { computed } from "vue";
import { useData } from "vitepress";

import { resolveResumeConfig } from "../config/resolve";
import type { ResumeFrontmatter } from "../types";

export function useResume() {
  const { frontmatter, theme } = useData<ResumeFrontmatter>();
  const config = computed(() =>
    resolveResumeConfig(theme.value.resume, frontmatter.value),
  );
  const isResumeMode = computed(
    () => config.value.enabled && Boolean(config.value.profile),
  );
  const profile = computed(() => config.value.profile);

  return { config, isResumeMode, profile };
}
