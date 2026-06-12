import type { Theme } from "vitepress";

import {
  ResumeExperience,
  ResumeHighlight,
  ResumeHighlights,
} from "../components";
import { withResumeConfigProvider } from "../composables";

import ResumeLayout from "./layouts/ResumeLayout.vue";

const resumeMarkdownComponents = {
  ResumeExperience,
  ResumeHighlight,
  ResumeHighlights,
} as const;

export const ResumeTheme = {
  Layout: withResumeConfigProvider(ResumeLayout),
  enhanceApp({ app }) {
    for (const [name, component] of Object.entries(resumeMarkdownComponents)) {
      app.component(name, component);
    }
  },
} satisfies Theme;

export default ResumeTheme;
