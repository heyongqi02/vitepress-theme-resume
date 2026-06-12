import type { Theme } from "vitepress";

import ResumeBlock from "./components/ResumeBlock.vue";
import ResumeHighlight from "./components/ResumeHighlight.vue";
import ResumeHighlights from "./components/ResumeHighlights.vue";
import ResumeLayout from "./layouts/ResumeLayout.vue";

export const ResumeTheme = {
  Layout: ResumeLayout,
  enhanceApp({ app }) {
    app.component("ResumeBlock", ResumeBlock);
    app.component("ResumeHighlight", ResumeHighlight);
    app.component("ResumeHighlights", ResumeHighlights);
  },
} satisfies Theme;

export default ResumeTheme;
