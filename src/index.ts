import type { Theme } from "vitepress";

import Layout from "./Layout.vue";

import "./styles/resume.css";

export default {
  Layout,
} satisfies Theme;

export type { ResumeProfile, ResumeFrontmatter } from "./types";
