/** Sample case-study content for stories (from the Figma file). */
export const demoCaseStudy = {
  client: "Community Fibre · 2024",
  title: "Redesigning a help centre to cut support calls",
  summary: "A full redesign of the Community Fibre help centre — from research and content strategy to a new information architecture and component library.",
  meta: [
    { label: "Role", value: "Lead product designer" },
    { label: "Timeline", value: "6 months" },
    { label: "Team", value: "PM, 3 engineers, content designer" },
    { label: "Platform", value: "Responsive web" },
  ],
  steps: [
    { number: "01", title: "Discover", description: "12 customer interviews, call-log analysis and a content audit of 340 articles." },
    { number: "02", title: "Define", description: "Top 20 call drivers mapped to user journeys and content gaps." },
    { number: "03", title: "Design", description: "New IA, search-first layout and a reusable help component library." },
    { number: "04", title: "Deliver", description: "Iterative releases with A/B tests on search and article templates." },
  ],
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
  problem:
    "Customers couldn’t find answers to simple questions, so they called support instead. Over 40% of calls were about topics already covered in the help centre — the content was there, but nobody could find it.",
  quote: "“I just want to fix my connection without waiting on hold for 40 minutes.”",
};

/** Offline placeholder image (an SVG data URL) at a given size, for stories and the visual check. */
export function demoImage(w: number, h: number, label = "Image") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}"><rect width="100%" height="100%" fill="#d7dad5"/><text x="50%" y="50%" font-family="sans-serif" font-size="20" fill="#3a3a3a" text-anchor="middle">${label} ${w}×${h}</text></svg>`; // tokens-ok: offline placeholder image for stories only
  return `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svg)}`;
}
