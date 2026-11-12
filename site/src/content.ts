/**
 * Home page content — all words, links and images in one place, so the page itself only arranges components.
 * Text is copied from Figma (Templates → Home, node 12:2).
 */
import type { NavItem, Tint } from "ka-design-system";

export const site = {
  name: "Kieran Anderson",
  email: "kieran_anderson@icloud.com",
  /** TODO(Kieran): your LinkedIn profile URL. */
  linkedIn: "https://www.linkedin.com/",
  /** TODO(Kieran): put your CV at site/public/cv.pdf. */
  cvHref: "/cv.pdf",
};

/** Header links. Home is the Work page, so "Work" points to "/" and shows as active here. */
export const navLinks: NavItem[] = [
  { label: "Work", href: "/" },
  { label: "About", href: "/about" },
  { label: "Playground", href: "/playground" },
];

/** "Get in touch" jumps to the footer, which holds the contact details. */
export const contactCta: NavItem = { label: "Get in touch", href: "#contact" };

export const hero = {
  disciplines: ["Product design", "UX research", "Design systems", "AI prototyping"],
  /** TODO(Kieran): add your photo at site/public/images/portrait.jpg (square, at least 440×440). Until then the initials show. */
  portraitSrc: "/images/portrait.jpg",
  portraitAlt: "Kieran Anderson",
};

export interface Project {
  project: string;
  client: string;
  description: string;
  tint: Tint;
  status: "live" | "coming-soon";
  href?: string;
  /** TODO(Kieran): project images (Figma still shows "Replace with project image"). */
  imageSrc?: string;
  imageAlt?: string;
}

export const projects: Project[] = [
  {
    project: "Help pages",
    client: "– Community Fibre",
    description: "A redesign of a full help centre to increase user satisfaction and lower operating costs.",
    tint: "blue",
    status: "live",
    href: "/work/help-pages",
  },
  {
    project: "Ops Docs Automation",
    client: "– Barclays",
    description: "Design of an internal tool to decrease manual work and automate current processes.",
    tint: "mint",
    status: "coming-soon",
  },
];

export const about = [
  "Currently based in Glasgow, I have been designing digital experiences for over 12 years — for household brands, startups and small agencies, which has taken me to live in three different countries.",
  "I have a strong interest in AI tooling and vibe coding (which is how I built this portfolio).",
  "When I’m not designing or tinkering, I’m usually out hiking or running in the Scottish mountains.",
];
