const slugAliases: Record<string, string> = {
  js: "javascript",
  ts: "typescript",
  node: "nodedotjs",
  nodejs: "nodedotjs",
  vue: "vuedotjs",
  vuejs: "vuedotjs",
  reactjs: "react",
  jd: "jdcom",
  git: "git",
};

export function normalizeBrandSlug(slug: string) {
  const value = slug.trim().toLowerCase();

  return slugAliases[value] ?? value;
}

export function parseBrandStack(stack?: string) {
  if (!stack?.trim()) {
    return [];
  }

  return stack
    .split(/[,，\s|/]+/)
    .map(normalizeBrandSlug)
    .filter(Boolean);
}
