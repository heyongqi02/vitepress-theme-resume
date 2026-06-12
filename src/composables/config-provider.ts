import type { Component } from "vue";
import { computed, defineComponent, h, provide } from "vue";
import { useData } from "vitepress";

import { resolveResumeConfig } from "../config/resolve";
import type { ResumeFrontmatter } from "../types";

import { resumeConfigKey } from "./keys";

export function withResumeConfigProvider(App: Component) {
  return defineComponent({
    name: "ResumeConfigProvider",
    setup(_, { slots }) {
      const { frontmatter, theme } = useData<ResumeFrontmatter>();
      const config = computed(() =>
        resolveResumeConfig(theme.value.resume, frontmatter.value),
      );

      provide(resumeConfigKey, config);

      return () => h(App, null, slots);
    },
  });
}
