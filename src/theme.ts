import type { Theme } from "vitepress";

import ResumeExperience from "./components/ResumeExperience.vue";
import ResumeHighlight from "./components/ResumeHighlight.vue";
import ResumeHighlights from "./components/ResumeHighlights.vue";
import ResumeLayout from "./layouts/ResumeLayout.vue";

export const ResumeTheme = {
  Layout: ResumeLayout,
  enhanceApp({ app }) {
    app.component("ResumeExperience", ResumeExperience);
    app.component("ResumeHighlight", ResumeHighlight);
    app.component("ResumeHighlights", ResumeHighlights);
  },
} satisfies Theme;

export default ResumeTheme;
