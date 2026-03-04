export type Pillar = {
  key:
    | "about"
    | "statement-of-faith"
    | "outreach"
    | "education"
    | "lectures"
    | "scriptural-studies"
    | "memberships"
    | "giving";
  title: string;
  blurb: string;
  href: string;
};

export const PILLARS: Pillar[] = [
  {
    key: "statement-of-faith",
    title: "Statement of Faith",
    blurb:
      "To see a remnant restored to the ancient paths of Yahuah Elohiym, walking in the fullness of truth as revealed through the Messiah Yahusha.",
    href: "/statement-of-faith",
  },
  {
    key: "outreach",
    title: "Outreach",
    blurb:
      "The goal is to move people from “the system” back to the “Household of Yahuah” through progressive education and practical service.",
    href: "/outreach",
  },
  {
    key: "about",
    title: "About Us",
    blurb:
      "The first century disciples of the Messiah were in a faith known as “The Way”. We invite you to learn and worship the Most High with us.",
    href: "/about",
  },
  {
    key: "education",
    title: "Education",
    blurb:
      "Bridging the spiritual requirements of Yahuah with the functional mechanics of managing His estate on earth.",
    href: "/education",
  },
  {
    key: "lectures",
    title: "Lectures",
    blurb:
      "Insightful, lively instruction designed to fill you with the knowledge of Elohiym as the Word is expounded.",
    href: "/lectures",
  },
  {
    key: "scriptural-studies",
    title: "Scriptural Studies",
    blurb:
      "“Study to show yourself approved unto Elohiym… rightly dividing the Word of Truth.” (2 Tim. 2:15) Join us in doing that.",
    href: "/scriptural-studies",
  },
  {
    key: "memberships",
    title: "Memberships",
    blurb:
      "Walk together in faith, love, and obedience—supporting one another as we live out His Torah as a set-apart people.",
    href: "/memberships",
  },
  {
    key: "giving",
    title: "Giving",
    blurb:
      "Your contribution helps restore knowledge and strengthen stewardship—so men and women can walk wisely with what Yahuah has entrusted.",
    href: "/giving",
  },
];
