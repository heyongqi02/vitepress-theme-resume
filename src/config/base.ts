import type { UserConfig } from "vitepress";

/**
 * Node-side defaults for VitePress sites using vitepress-theme-resume.
 * Intended to be extended from the consuming project's config file.
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
