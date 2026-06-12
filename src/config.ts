import type { UserConfig } from "vitepress";

import type {
  ResolvedResumeConfig,
  ResumeFrontmatter,
  ResumeProfile,
  ResumeThemeConfig,
  ResumeThemeOptions,
} from "./types";

export type {
  ResolvedResumeConfig,
  ResumeFrontmatter,
  ResumeProfile,
  ResumeProfileTag,
  ResumeThemeConfig,
  ResumeThemeOptions,
} from "./types";

export const defaultResumeThemeOptions: Required<Pick<ResumeThemeOptions, "skipLinkLabel">> &
  ResumeThemeOptions = {
  enabled: true,
  skipLinkLabel: "跳到主内容",
};

export function resolveResumeProfile(
  frontmatterProfile?: ResumeProfile,
  defaults?: Partial<ResumeProfile>,
): ResumeProfile | undefined {
  if (!frontmatterProfile && !defaults) {
    return undefined;
  }

  const merged: ResumeProfile = {
    ...defaults,
    ...frontmatterProfile,
    name: frontmatterProfile?.name ?? defaults?.name ?? "",
  };

  if (!merged.name) {
    return undefined;
  }

  return merged;
}

export function resolveResumeConfig(
  themeOptions: ResumeThemeOptions | undefined,
  frontmatter: ResumeFrontmatter,
): ResolvedResumeConfig {
  const options = { ...defaultResumeThemeOptions, ...themeOptions };

  return {
    enabled: frontmatter.resume ?? options.enabled ?? true,
    skipLinkLabel: options.skipLinkLabel ?? defaultResumeThemeOptions.skipLinkLabel,
    profile: resolveResumeProfile(frontmatter.profile, options.profileDefaults),
  };
}

/** Node-side defaults for VitePress sites using vitepress-theme-resume. */
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
