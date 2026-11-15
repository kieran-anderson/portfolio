/**
 * Help pages – Community Fibre. Words copied from Figma (Templates → Case study, 13:591).
 * Tint is blue, matching its Project card on Home.
 */
import type { CaseStudy } from "./types";

export const helpPages: CaseStudy = {
  tint: "blue",
  client: "Community Fibre · 2024",
  title: "Redesigning a help centre to cut support calls",
  summary:
    "A full redesign of the Community Fibre help centre — from research and content strategy to a new information architecture and component library.",
  meta: [
    { label: "Role", value: "Lead product designer" },
    { label: "Timeline", value: "6 months" },
    { label: "Team", value: "PM, 3 engineers, content designer" },
    { label: "Platform", value: "Responsive web" },
  ],
  cover: {
    src: "/images/help-pages.png",
    alt: "The redesigned Community Fibre help centre home page, with a “How can we help?” search and help topics",
  },
  problem: {
    heading: "The problem",
    body: "Customers couldn’t find answers to simple questions, so they called support instead. Over 40% of calls were about topics already covered in the help centre — the content was there, but nobody could find it.",
  },
  figure1: {
    // TODO(Kieran): add an image, e.g. { src: "/images/help-pages/old-help-centre.png", alt: "…" }
    caption: "Figure 1 — The old help centre buried answers three levels deep",
  },
  approach: {
    heading: "The approach",
    body: "I started by listening — sitting in on support calls, interviewing customers and auditing every article. A clear pattern emerged: the answers existed, but the structure didn’t match how people describe their problems.",
  },
  steps: [
    { number: "01", title: "Discover", description: "12 customer interviews, call-log analysis and a content audit of 340 articles." },
    { number: "02", title: "Define", description: "Top 20 call drivers mapped to user journeys and content gaps." },
    { number: "03", title: "Design", description: "New IA, search-first layout and a reusable help component library." },
    { number: "04", title: "Deliver", description: "Iterative releases with A/B tests on search and article templates." },
  ],
  quote: {
    text: "“I just want to fix my connection without waiting on hold for 40 minutes.”",
    attribution: "Customer interview, round 2",
  },
  figure2: {
    // TODO(Kieran): add two images. Figma repeats Figure 1's caption here; update it once you pick the images.
    caption: "Figure 1 — The old help centre buried answers three levels deep",
  },
  stats: [
    { value: "−32%", label: "support calls in the first 3 months" },
    { value: "+21pts", label: "customer satisfaction score" },
    { value: "4.6/5", label: "article helpfulness rating" },
  ],
  outcomes: [
    "Support calls down 32% in three months",
    "Help centre became the #1 self-service channel",
    "Component library adopted by two other product teams",
  ],
  // Ops Docs Automation has no case study yet ("Coming soon"), so this goes to the case studies on Home for now.
  next: { title: "Ops Docs Automation – Barclays", tint: "mint", href: "/#work" },
};
