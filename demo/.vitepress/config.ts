import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";
import { experienceContainer } from "vitepress-theme-resume/markdown/experience";

export default defineConfig({
  title: "贺永琪",
  description: "前端开发工程师",
  themeConfig: {
    sidebar: [],
    nav: [],
  },
  vite: {
    plugins: [tailwindcss()],
  },
  markdown: {
    config(md) {
      experienceContainer(md);
    },
  },
});
