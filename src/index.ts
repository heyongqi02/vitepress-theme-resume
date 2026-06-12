import type { Theme } from "vitepress";

import Layout from "./layouts/Layout.vue";
import ResumeExperience from "./sections/ResumeExperience.vue";
import ResumeHighlight from "./components/ResumeHighlight.vue";
import ResumeHighlights from "./sections/ResumeHighlights.vue";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("ResumeExperience", ResumeExperience);
    app.component("ResumeHighlight", ResumeHighlight);
    app.component("ResumeHighlights", ResumeHighlights);
  },
} satisfies Theme;

export type { ResumeProfile, ResumeFrontmatter, ResumeProfileTag, SkillTagTone } from "./types";
