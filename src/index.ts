import type { Theme } from "vitepress";

import ResumeExperience from "./components/ResumeExperience.vue";
import Layout from "./Layout.vue";

export default {
  Layout,
  enhanceApp({ app }) {
    app.component("ResumeExperience", ResumeExperience);
  },
} satisfies Theme;

export type { ResumeProfile, ResumeFrontmatter } from "./types";
