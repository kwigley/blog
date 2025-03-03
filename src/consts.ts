import type { Metadata, Site, Socials } from "@types";

export const SITE: Site = {
  TITLE: "Kyle Wigs",
  DESCRIPTION: "Software engineer specializing in Rust development.",
  EMAIL: "mail@kylewigs.com",
  NUM_POSTS_ON_HOMEPAGE: 3,
  NUM_PROJECTS_ON_HOMEPAGE: 2,
};

export const HOME: Metadata = {
  TITLE: "Home",
  DESCRIPTION: "Kyle Wigley's personal development blog and portfolio.",
};

export const BLOG: Metadata = {
  TITLE: "Blog",
  DESCRIPTION:
    "My thoughts, experiences, and discoveries in software development with a focus on Rust.",
};

export const PROJECTS: Metadata = {
  TITLE: "Projects",
  DESCRIPTION:
    "A collection of my software projects with links to repositories and live demos.",
};

export const SOCIALS: Socials = [
  {
    NAME: "GitHub",
    HREF: "https://github.com/kwigley",
  },
  {
    NAME: "LinkedIn",
    HREF: "https://linkedin.com/in/kylewigley",
  },
  {
    NAME: "X",
    HREF: "https://x.com/kylewigs",
  },
];
