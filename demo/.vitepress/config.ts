import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vitepress";
import { defineResumeConfig } from "vitepress-theme-resume/config";

export default defineConfig({
  extends: defineResumeConfig({
    title: "贺永琪",
    description: "前端开发工程师",
    lang: "zh-CN",
  }),
  vite: {
    plugins: [tailwindcss()],
  },
});
