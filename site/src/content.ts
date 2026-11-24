/**
 * Home page content — all words, links and images in one place, so the page itself only arranges components.
 * Text is copied from Figma (Templates → Home, node 12:2).
 */
import type { NavItem, Tint } from "ka-design-system";
import { url } from "./url";

export const site = {
  name: "Kieran Anderson",
  email: "kieran_anderson@icloud.com",
  /** LinkedIn profile. The footer button opens it in a new tab. */
  linkedIn: "https://www.linkedin.com/in/kieran-anderson-designer/",
  /** CV (site/public/assets/CV.pdf). "View my CV" opens it in a new tab. */
  cvHref: url("/assets/CV.pdf"),
};

/**
 * Header links. Both jump to sections on Home (scrolling smoothly when already there); none shows as active.
 * The leading "/" makes them work from other pages too, e.g. a case study.
 */
export const navLinks: NavItem[] = [
  { label: "Work", href: url("/#work") },
  { label: "About", href: url("/#about") },
];

/** "Get in touch" jumps to the footer, which holds the contact details. */
export const contactCta: NavItem = { label: "Get in touch", href: "#contact" };

export const hero = {
  disciplines: ["Product design", "UX research", "Design systems", "AI prototyping"],
  /** Square, 880×880 (sharp at 2x on the 220px Desktop circle). Cropped from IMG_6762.jpeg with its photo metadata removed. */
  portraitSrc: url("/images/portrait-hiking.jpg"),
  portraitAlt: "Kieran Anderson smiling on a hike in the Scottish mountains",
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
  /** Which part of the image stays in view when the card crops it. Default "top" (keeps screenshot headers). */
  imageFocus?: "top" | "center";
}

export const projects: Project[] = [
  {
    project: "Help pages",
    client: "– Community Fibre",
    description: "A redesign of a full help centre to increase user satisfaction and lower operating costs.",
    tint: "blue",
    status: "live",
    href: url("/work/help-pages/"),
    imageSrc: url("/images/help-pages.png"),
    imageAlt: "Community Fibre help centre home page, with a “How can we help?” search and help topics",
  },
  {
    project: "Ops Docs Automation",
    client: "– Barclays",
    description: "Design of an internal tool to decrease manual work and automate current processes.",
    tint: "mint",
    status: "coming-soon",
    imageSrc: url("/images/ops-docs-automation.jpeg"),
    imageAlt: "Illustration of a laptop, phone and bank card, each showing the Barclays logo",
    imageFocus: "center",
  },
];

/** Photo under "About me": 2432×920 export from Figma (2x of 1216×460). */
export const aboutImage = {
  src: url("/images/about.jpg"),
  alt: "A hiker in a yellow jacket on an overhanging rock ledge high above a fjord in Norway, under low cloud",
};

export const about = [
  "Currently based in Glasgow, I have been designing digital experiences for over 12 years — for household brands, startups and small agencies, which has taken me to live in three different countries.",
  "I have a strong interest in AI tooling and design systems - I designed and built this portfolio with a Figma/Storybook/Claude/GitHub setup.",
  "In my spare time I enjoy hiking, running, camping, bungee jumping, skydiving and wild swimming. Living so close to the Scottish highlands means if I’m not at my laptop working I’m usually out enjoying the great outdoors!",
  "I have a keen interest in travel and I have climbed mountains in Africa, Canada, the Caribbean and Europe",
];
