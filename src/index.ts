import "./styles/deps";

export { default, ResumeTheme } from "./theme";
export { default as ResumeBlock } from "./components/ResumeBlock.vue";
export { default as ResumeHighlight } from "./components/ResumeHighlight.vue";
export { default as ResumeHighlights } from "./components/ResumeHighlights.vue";
export { useResume } from "./use-resume";
export {
  defineResumeConfig,
  baseConfig,
  defaultResumeThemeOptions,
  resolveResumeConfig,
  resolveResumeProfile,
} from "./config";
export type {
  ResolvedResumeConfig,
  ResumeFrontmatter,
  ResumeProfile,
  ResumeProfileTag,
  ResumeThemeConfig,
  ResumeThemeOptions,
} from "./types";
