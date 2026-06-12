export interface ResumeProfile {
  name: string;
  meta?: string[];
  intent?: string[];
}

export interface ResumeFrontmatter {
  resume?: boolean;
  profile?: ResumeProfile;
}
