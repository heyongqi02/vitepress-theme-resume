import type { SkillTagTone } from "./components/skill-tag-tones";

export interface ResumeProfileTag {
  label: string;
  icon?: string;
  tone?: SkillTagTone;
}

export interface ResumeProfile {
  name: string;
  meta?: Array<string | number>;
  intent?: Array<string | number>;
  tags?: ResumeProfileTag[];
}

export interface ResumeFrontmatter {
  resume?: boolean;
  profile?: ResumeProfile;
}

export type { SkillTagTone };
