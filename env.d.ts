declare module "*.vue" {
  import type { DefineComponent } from "vue";

  const component: DefineComponent;
  export default component;
}

declare module "vitepress-theme-resume/style.css" {}

declare module "*.css" {}
