import "./styles/deps";

export { default, ResumeTheme } from "./vitepress";
export {
  ResumeExperience,
  ResumeHighlight,
  ResumeHighlights,
  ResumeSkillTag,
} from "./components";
export {
  withResumeConfigProvider,
  useResumeConfig,
  useResumeMode,
  useResumeProfile,
} from "./composables";
export { defineResumeConfig, baseConfig, defaultResumeThemeOptions } from "./config";
export type {
  ResolvedResumeConfig,
  ResumeFrontmatter,
  ResumeProfile,
  ResumeProfileTag,
  ResumeThemeConfig,
  ResumeThemeOptions,
} from "./types";
