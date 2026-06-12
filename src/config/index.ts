import type { UserConfig } from "vitepress";

import type { ResumeThemeConfig } from "../types";
import { defaultResumeThemeOptions, resolveResumeConfig, resolveResumeProfile } from "./resolve";

export { defaultResumeThemeOptions, resolveResumeConfig, resolveResumeProfile };
export type {
  ResolvedResumeConfig,
  ResumeFrontmatter,
  ResumeProfile,
  ResumeProfileTag,
  ResumeThemeConfig,
  ResumeThemeOptions,
} from "../types";

/**
 * Node-side defaults for VitePress sites using vitepress-theme-resume. Intended to be extended from
 * the consuming project's config file.
 */
export const baseConfig = {
  themeConfig: {
    nav: [],
    sidebar: [],
  },
  vite: {
    ssr: {
      noExternal: ["vitepress-theme-resume"],
    },
    optimizeDeps: {
      exclude: ["vitepress-theme-resume"],
    },
  },
} satisfies UserConfig;

export function defineResumeConfig(config: ResumeThemeConfig & UserConfig = {}): UserConfig {
  const { resume: resumeTheme, ...vpConfig } = config;

  return {
    ...baseConfig,
    ...vpConfig,
    vite: {
      ...baseConfig.vite,
      ...vpConfig.vite,
      ssr: {
        ...baseConfig.vite?.ssr,
        ...vpConfig.vite?.ssr,
      },
      optimizeDeps: {
        ...baseConfig.vite?.optimizeDeps,
        ...vpConfig.vite?.optimizeDeps,
      },
    },
    themeConfig: {
      ...baseConfig.themeConfig,
      ...vpConfig.themeConfig,
      nav: vpConfig.themeConfig?.nav ?? baseConfig.themeConfig?.nav,
      sidebar: vpConfig.themeConfig?.sidebar ?? baseConfig.themeConfig?.sidebar,
      resume: {
        ...defaultResumeThemeOptions,
        ...vpConfig.themeConfig?.resume,
        ...resumeTheme,
      },
    },
  };
}
