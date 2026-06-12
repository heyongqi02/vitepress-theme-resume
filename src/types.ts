export interface ResumeProfile {
  name: string;
  meta?: Array<string | number>;
  intent?: Array<string | number>;
}

export interface ResumeFrontmatter {
  resume?: boolean;
  profile?: ResumeProfile;
}
