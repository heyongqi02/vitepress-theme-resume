import { describe, expect, it } from "vitest";

import { getMetaHref } from "./meta-href";

describe("getMetaHref", () => {
  it("links email addresses", () => {
    expect(getMetaHref("hi@example.com")).toBe("mailto:hi@example.com");
  });

  it("links phone numbers with 7+ digits", () => {
    expect(getMetaHref("13520368086")).toBe("tel:13520368086");
    expect(getMetaHref("+86 135 2036 8086")).toBe("tel:8613520368086");
  });

  it("ignores short numeric strings", () => {
    expect(getMetaHref("12345")).toBeUndefined();
  });

  it("preserves http(s) URLs", () => {
    expect(getMetaHref("https://example.com")).toBe("https://example.com");
    expect(getMetaHref("http://example.com/path")).toBe("http://example.com/path");
  });

  it("prefixes domain-like strings with https", () => {
    expect(getMetaHref("github.com/user")).toBe("https://github.com/user");
    expect(getMetaHref("blog.example.com")).toBe("https://blog.example.com");
  });

  it("returns undefined for plain text", () => {
    expect(getMetaHref("男")).toBeUndefined();
    expect(getMetaHref("年龄：23岁")).toBeUndefined();
  });
});
