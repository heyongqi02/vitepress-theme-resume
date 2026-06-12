import { defineConfig } from "vitepress";
import { experienceContainer } from "vitepress-theme-resume";

export default defineConfig({
  title: "贺永琪",
  description: "前端开发工程师",
  themeConfig: {
    sidebar: [],
    nav: [],
  },
  markdown: {
    config(md) {
      experienceContainer(md);
    },
  },
});
