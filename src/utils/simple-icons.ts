/** @see https://unpkg.com/simple-icons@v16/icons/[ICON SLUG].svg */
const SIMPLE_ICONS_CDN = "https://unpkg.com/simple-icons@v16/icons";

/** Common stack aliases that differ from the Simple Icons slug. */
const STACK_SLUG_ALIASES: Record<string, string> = {
  js: "javascript",
  node: "nodedotjs",
  "node.js": "nodedotjs",
  nodejs: "nodedotjs",
  ts: "typescript",
  vue: "vuedotjs",
  "vue.js": "vuedotjs",
  vue3: "vuedotjs",
  rspack: "rspack",
  webpack: "webpack",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  docker: "docker",
  rust: "rust",
  github: "github",
  rolldown: "rolldown",
  vitepress: "vitepress",
};

export function resolveSimpleIconSlug(name: string): string {
  const normalized = name.trim().toLowerCase();
  return STACK_SLUG_ALIASES[normalized] ?? normalized.replaceAll(".", "dot");
}

export function getSimpleIconUrl(slug: string): string {
  return `${SIMPLE_ICONS_CDN}/${slug}.svg`;
}

export function getStackIconUrl(name: string): string {
  return getSimpleIconUrl(resolveSimpleIconSlug(name));
}
