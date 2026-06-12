import { describe, expect, it } from "vitest";

import { resolveResumeConfig, resolveResumeProfile } from "./config";

describe("resolveResumeProfile", () => {
  it("returns undefined when no name is available", () => {
    expect(resolveResumeProfile()).toBeUndefined();
    expect(resolveResumeProfile({ meta: ["test@example.com"] })).toBeUndefined();
  });

  it("merges defaults with frontmatter profile", () => {
    expect(
      resolveResumeProfile(
        { name: "Alice", meta: ["alice@example.com"] },
        { tags: [{ label: "Open to work" }] },
      ),
    ).toEqual({
      name: "Alice",
      meta: ["alice@example.com"],
      tags: [{ label: "Open to work" }],
    });
  });

  it("prefers frontmatter name over defaults", () => {
    expect(resolveResumeProfile({ name: "Bob" }, { name: "Alice" })).toEqual({
      name: "Bob",
    });
  });
});

describe("resolveResumeConfig", () => {
  it("enables resume mode by default when profile name exists", () => {
    expect(
      resolveResumeConfig(undefined, {
        profile: { name: "Alice" },
      }),
    ).toEqual({
      enabled: true,
      skipLinkLabel: "跳到主内容",
      profile: { name: "Alice" },
    });
  });

  it("respects frontmatter resume flag and theme options", () => {
    expect(
      resolveResumeConfig(
        { enabled: false, skipLinkLabel: "Skip to main content" },
        {
          resume: true,
          profile: { name: "Alice" },
        },
      ),
    ).toEqual({
      enabled: true,
      skipLinkLabel: "Skip to main content",
      profile: { name: "Alice" },
    });
  });

  it("merges profile defaults from theme options", () => {
    expect(
      resolveResumeConfig(
        {
          profileDefaults: {
            name: "Default Name",
            tags: [{ label: "Frontend" }],
          },
        },
        {},
      ),
    ).toEqual({
      enabled: true,
      skipLinkLabel: "跳到主内容",
      profile: {
        name: "Default Name",
        tags: [{ label: "Frontend" }],
      },
    });
  });
});
