import type { ResumeThemeOptions } from "../types";

export const defaultResumeThemeOptions: Required<Pick<ResumeThemeOptions, "skipLinkLabel">> &
  ResumeThemeOptions = {
  enabled: true,
  skipLinkLabel: "跳到主内容",
};
