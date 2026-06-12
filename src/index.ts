import type { Theme } from "vitepress";

import Layout from "./layouts/Layout.vue";
import ResumeExperience from "./sections/ResumeExperience.vue";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("ResumeExperience", ResumeExperience);
  },
} satisfies Theme;

export type { ResumeProfile, ResumeFrontmatter, ResumeProfileTag, SkillTagTone } from "./types";
