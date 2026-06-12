import type { Theme } from "vitepress";

import {
  ResumeExperience,
  ResumeHighlight,
  ResumeHighlights,
} from "../components";

import ResumeLayout from "./layouts/ResumeLayout.vue";

const resumeMarkdownComponents = {
  ResumeExperience,
  ResumeHighlight,
  ResumeHighlights,
} as const;

export const ResumeTheme = {
  Layout: ResumeLayout,
  enhanceApp({ app }) {
    for (const [name, component] of Object.entries(resumeMarkdownComponents)) {
      app.component(name, component);
    }
  },
} satisfies Theme;

export default ResumeTheme;
