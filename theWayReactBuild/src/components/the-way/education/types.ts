export type EducationTopicKey =
  | "website-membership"
  | "trust-estate-planning"
  | "law-of-equity"
  | "agriculture-sustainability";

export type EducationAccessLabel =
  | "Open Access"
  | "Website Members"
  | "Website Members • Support Encouraged"
  | "Website Members • Course Support";

export type EducationTopicStatus =
  | "available"
  | "in-development"
  | "members"
  | "support-backed";

export type EducationCta = {
  label: string;
  to: string;
};

export type EducationTopic = {
  key: EducationTopicKey;
  title: string;
  eyebrow?: string;
  accessLabel: EducationAccessLabel;
  summary: string;
  whyItMatters: string;
  mission?: string;
  highlights: string[];
  ctas: EducationCta[];

  image: string;
  imageAlt: string;

  status: EducationTopicStatus;
  featuredNote?: string;
  supportNote?: string;
};
