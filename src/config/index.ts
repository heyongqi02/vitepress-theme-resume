import type { UserConfig } from "vitepress";

import { baseConfig } from "./base";
import { defaultResumeThemeOptions } from "./defaults";

export { baseConfig } from "./base";
export { defaultResumeThemeOptions } from "./defaults";
export { resolveResumeConfig, resolveResumeProfile } from "./resolve";
export type {
  ResolvedResumeConfig,
  ResumeFrontmatter,
  ResumeProfile,
  ResumeProfileTag,
  ResumeThemeConfig,
  ResumeThemeOptions,
} from "../types";

export function defineResumeConfig(
  config: ResumeThemeConfig & UserConfig = {},
): UserConfig {
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
