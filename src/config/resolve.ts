import type {
  ResolvedResumeConfig,
  ResumeFrontmatter,
  ResumeProfile,
  ResumeThemeOptions,
} from "../types";

import { defaultResumeThemeOptions } from "./defaults";

export function resolveResumeProfile(
  frontmatterProfile?: ResumeProfile,
  defaults?: Partial<ResumeProfile>,
): ResumeProfile | undefined {
  if (!frontmatterProfile && !defaults) {
    return undefined;
  }

  const merged: ResumeProfile = {
    ...defaults,
    ...frontmatterProfile,
    name: frontmatterProfile?.name ?? defaults?.name ?? "",
  };

  if (!merged.name) {
    return undefined;
  }

  if (!merged.tags?.length && merged.intent?.length) {
    merged.tags = merged.intent.map((item) => ({ label: String(item) }));
  }

  return merged;
}

export function resolveResumeConfig(
  themeOptions: ResumeThemeOptions | undefined,
  frontmatter: ResumeFrontmatter,
): ResolvedResumeConfig {
  const options = { ...defaultResumeThemeOptions, ...themeOptions };

  return {
    enabled: frontmatter.resume ?? options.enabled ?? true,
    skipLinkLabel: options.skipLinkLabel ?? defaultResumeThemeOptions.skipLinkLabel,
    profile: resolveResumeProfile(frontmatter.profile, options.profileDefaults),
  };
}
