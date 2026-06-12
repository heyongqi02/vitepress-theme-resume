import { defineConfig } from "vitepress";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  title: "贺永琪",
  description: "前端开发工程师",
  themeConfig: {
    sidebar: [],
    nav: [],
  },
  vite: {
    // @ts-ignore
    plugins: [tailwindcss()]
  }
});
