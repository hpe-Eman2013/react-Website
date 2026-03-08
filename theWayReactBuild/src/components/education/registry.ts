import type { EducationTopic, EducationTopicKey } from "./types";

import membershipImg from "@/assets/images/the-way/education/website-membership.jpg";
import trustImg from "@/assets/images/the-way/education/trust-estate.jpg";
import equityImg from "@/assets/images/the-way/education/law-of-equity.jpg";
import agricultureImg from "@/assets/images/the-way/education/agriculture.jpg";

export const educationTopics: EducationTopic[] = [
  {
    key: "website-membership",
    title: "Website Membership",
    eyebrow: "Educational Access",
    accessLabel: "Open Access",
    summary:
      "Website Membership provides access to the educational resources offered through this platform. It is distinct from Assembly Membership and is intended for those who desire to participate in structured study, course-based learning, and the growing library of materials developed through The Way.",
    whyItMatters:
      "This site is being built to restore knowledge in law, stewardship, scripture, and the cultivation of the land. Website Membership creates a clear path for visitors to move from general interest into active participation in the educational work.",
    mission:
      "Website Membership supports a learning path designed to help move a believer from the condition of a passive legal subject into the responsibilities of a Kingdom Trustee.",
    highlights: [
      "Access to structured educational resources",
      "Distinct from Assembly Membership",
      "Connects visitors to gated study paths",
      "Provides a clearer path into ongoing learning",
    ],
    ctas: [
      {
        label: "Learn About Website Membership",
        to: "/the-way/education/website-membership",
      },
      {
        label: "Register Account",
        to: "/accounts/register",
      },
    ],
    image: membershipImg,
    imageAlt: "Students entering a structured path of study",
  },
  {
    key: "trust-estate-planning",
    title: "Trust & Estate Planning",
    eyebrow: "Stewardship and Order",
    accessLabel: "Website Members • Support Encouraged",
    summary:
      "Study stewardship through the structure of trust: settlor, trustee, beneficiary, fiduciary duty, title, responsibility, and the lawful handling of property, inheritance, and provision. This area is designed to connect spiritual obligation with the practical mechanics of managing what has been entrusted by Yahuah.",
    whyItMatters:
      "Many people manage property, family responsibility, and inheritance without understanding the duties attached to stewardship. This study path helps restore order, responsibility, and faithful administration in matters of trust and estate planning.",
    mission:
      "This body of study helps bridge the gap between the spiritual requirements of Yahuah and the functional mechanics of managing His estate on earth.",
    highlights: [
      "The three-party trust relationship",
      "Legal title and equitable title",
      "Fiduciary duties and trustee responsibility",
      "Stewardship, beneficiaries, and lawful order",
    ],
    ctas: [
      {
        label: "Explore Trust & Estate Planning",
        to: "/the-way/education/trust-estate-planning",
      },
      {
        label: "Become a Website Member",
        to: "/the-way/education/website-membership",
      },
    ],
    image: trustImg,
    imageAlt: "Trust documents and stewardship study materials",
  },
  {
    key: "law-of-equity",
    title: "Law of Equity",
    eyebrow: "Jurisdictional Wisdom",
    accessLabel: "Website Members • Course Support",
    summary:
      "Learn the difference between law and equity, the role of conscience and fairness, and the principles that govern remedy, obligation, fiduciary conduct, and righteous administration. This study path introduces the student to foundational equitable concepts and their relationship to scriptural stewardship.",
    whyItMatters:
      "Many people live under systems they do not understand. A study of equity helps expose the difference between rule-based control and remedy rooted in conscience, obligation, and proper duty. It equips students to think more carefully about jurisdiction, status, and responsibility.",
    mission:
      "This course is designed to move the learner from confusion and passive submission toward understanding, order, accountability, and faithful stewardship.",
    highlights: [
      "Law and equity distinctions",
      "Courts of law and courts of equity",
      "Maxims of equity",
      "Clean hands, duty, and equitable responsibility",
    ],
    ctas: [
      {
        label: "Explore The Law of Equity",
        to: "/the-way/education/law-of-equity",
      },
      {
        label: "Support Equity Course Access",
        to: "/the-way/education/website-membership",
      },
    ],
    image: equityImg,
    imageAlt: "Books and legal study materials relating to equity",
  },
  {
    key: "agriculture-sustainability",
    title: "Agriculture & Sustainability",
    eyebrow: "The Living Estate",
    accessLabel: "Website Members • Support Encouraged",
    summary:
      "Study the stewardship of the land through scriptural principles, regenerative cultivation, seed responsibility, water management, soil care, and practical food production. This learning path treats the land as part of a living estate that must be kept, protected, and cultivated with wisdom.",
    whyItMatters:
      "A people who do not understand the land, seed, water, and harvest become dependent on systems that do not honor life or stewardship. Agricultural study helps restore practical skill, household resilience, and faithfulness in caring for creation.",
    mission:
      "This study path joins scriptural stewardship with practical cultivation so that the land, the harvest, and the community may be sustained in wisdom.",
    highlights: [
      "Land Sabbath and stewardship principles",
      "Seed saving and responsible cultivation",
      "Soil life, fertility, and composting",
      "Water management, harvest ethics, and sustainability",
    ],
    ctas: [
      {
        label: "Explore Agriculture & Sustainability",
        to: "/the-way/education/agriculture-sustainability",
      },
      {
        label: "Become a Website Member",
        to: "/the-way/education/website-membership",
      },
    ],
    image: agricultureImg,
    imageAlt: "Cultivated land and agricultural stewardship",
  },
];

export const educationTopicMap: Record<EducationTopicKey, EducationTopic> =
  educationTopics.reduce(
    (acc, topic) => {
      acc[topic.key] = topic;
      return acc;
    },
    {} as Record<EducationTopicKey, EducationTopic>,
  );

export const educationTopicOrder: EducationTopicKey[] = [
  "website-membership",
  "trust-estate-planning",
  "law-of-equity",
  "agriculture-sustainability",
];

export const defaultEducationTopicKey: EducationTopicKey = "website-membership";
