export interface ResumeProfileTag {
  label: string;
}

export interface ResumeProfile {
  name: string;
  meta?: Array<string | number>;
  /** @deprecated Use `tags` instead. Resolved automatically at runtime. */
  intent?: Array<string | number>;
  tags?: ResumeProfileTag[];
}

export interface ResumeFrontmatter {
  resume?: boolean;
  profile?: ResumeProfile;
}

export interface ResumeThemeOptions {
  enabled?: boolean;
  profileDefaults?: Partial<ResumeProfile>;
  skipLinkLabel?: string;
}

export interface ResumeThemeConfig {
  resume?: ResumeThemeOptions;
}

/** `theme` ref shape from `useData()` in theme components. */
export interface ResumeThemeData {
  resume?: ResumeThemeOptions;
}

export interface ResolvedResumeConfig {
  enabled: boolean;
  skipLinkLabel: string;
  profile: ResumeProfile | undefined;
}

declare module "vitepress" {
  interface ThemeConfig {
    resume?: ResumeThemeOptions;
  }
}
