/** @see https://cdn.simpleicons.org/[ICON SLUG]/[COLOR] */
const SIMPLE_ICONS_COLORED_CDN = "https://cdn.simpleicons.org";

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
  tailwind: "tailwindcss",
};

export function resolveSimpleIconSlug(name: string): string {
  const normalized = name.trim().toLowerCase();
  return STACK_SLUG_ALIASES[normalized] ?? normalized.replaceAll(".", "dot");
}

export function getSimpleIconUrl(slug: string, color?: string): string {
  return color
    ? `${SIMPLE_ICONS_COLORED_CDN}/${slug}/${color}`
    : `${SIMPLE_ICONS_COLORED_CDN}/${slug}`;
}

export function getStackIconUrl(name: string): string {
  return getSimpleIconUrl(resolveSimpleIconSlug(name));
}
