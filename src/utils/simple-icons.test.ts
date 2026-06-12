import { describe, expect, it } from "vitest";

import { getSimpleIconUrl, getStackIconUrl, resolveSimpleIconSlug } from "./simple-icons";

describe("resolveSimpleIconSlug", () => {
  it("maps common aliases", () => {
    expect(resolveSimpleIconSlug("js")).toBe("javascript");
    expect(resolveSimpleIconSlug("ts")).toBe("typescript");
    expect(resolveSimpleIconSlug("vue")).toBe("vuedotjs");
    expect(resolveSimpleIconSlug("node")).toBe("nodedotjs");
    expect(resolveSimpleIconSlug("tailwind")).toBe("tailwindcss");
  });

  it("replaces dots with dot", () => {
    expect(resolveSimpleIconSlug("node.js")).toBe("nodedotjs");
    expect(resolveSimpleIconSlug("next.js")).toBe("nextdotjs");
  });

  it("trims and lowercases input", () => {
    expect(resolveSimpleIconSlug(" React ")).toBe("react");
  });
});

describe("getSimpleIconUrl", () => {
  it("builds CDN URLs", () => {
    expect(getSimpleIconUrl("react")).toBe("https://cdn.simpleicons.org/react");
    expect(getSimpleIconUrl("react", "61dafb")).toBe("https://cdn.simpleicons.org/react/61dafb");
  });
});

describe("getStackIconUrl", () => {
  it("resolves aliases before building the URL", () => {
    expect(getStackIconUrl("vue")).toBe("https://cdn.simpleicons.org/vuedotjs");
  });
});
