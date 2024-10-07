import type { Site, SocialObjects } from "./types";

export const SITE: Site = {
  website: "https://blog.lai9fox.com", // replace this with your deployed domain
  author: "lai9fox",
  profile: "https://github.com/lai9fox",
  desc: "A minimal, responsive and SEO-friendly Astro blog theme.",
  title: "Lai9fox",
  ogImage: "astropaper-og.jpg",
  lightAndDarkMode: true,
  postPerIndex: 4,
  postPerPage: 10,
  scheduledPostMargin: 15 * 60 * 1000, // 15 minutes
};

export const LOCALE = {
  lang: "zh", // html lang code. Set this empty and default will be "en"
  langTag: ["zh"], // BCP 47 Language Tags. Set this empty [] to use the environment default
} as const;

export const LOGO_IMAGE = {
  enable: false,
  svg: true,
  width: 216,
  height: 46,
};

export const SOCIALS: SocialObjects = [
  {
    name: "Github",
    href: "https://github.com/lai9fox/blog",
    linkTitle: `${SITE.title} on Github`,
    active: true,
  },
  {
    name: "Mail",
    href: "mailto:1591765125@qq.com",
    linkTitle: `Send an email to ${SITE.title}`,
    active: true,
  },
];
