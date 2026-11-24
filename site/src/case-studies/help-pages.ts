/**
 * Help pages – Community Fibre. Words copied from Figma (Templates → Case study, 13:591).
 * Tint is blue, matching its Project card on Home.
 */
import type { CaseStudy } from "./types";

export const helpPages: CaseStudy = {
  tint: "blue",
  client: "Community Fibre",
  title: "Redesign of help centre to cut support calls",
  summary:
    "A full redesign of the Community Fibre help centre — from research and content strategy to a new information architecture and branded design.",
  meta: [
    { label: "Role", value: "Lead product designer" },
    { label: "Timeline", value: "6 months" },
    { label: "Team", value: "PM, 3 engineers, content designer" },
    { label: "Platform", value: "Responsive web" },
  ],
  cover: {
    src: "/images/help-pages.png",
    alt: "The redesigned Community Fibre help centre home page, with a “How can we help?” search and help topics",
    href: "https://help.communityfibre.co.uk/",
    // The screenshot is about 2:1, so the taller cover shows all of it instead of cropping the bottom.
    shape: "tall",
  },
  // Shown under the hero (Figma: Case study template, Key stats 13:678).
  stats: [
    { value: "−46%", label: "The reduction in customer support calls." },
    { value: "+37%", label: "Increase in self-serve installations" },
    { value: "+27%", label: "Fix their individual issues using the pages" },
  ],
  problem: {
    heading: "The problem",
    body: "The customer service team were receiving more calls than they could handle and were looking for ways to cut down on this. The original help site implementation was not fit for purpose based on previous user research, design best practice and comments left on Hotjar, surveys etc. The task was to redesign the help pages so it is easier for users to navigate, find the answers to what they need and ultimately, cut down on customer service calls to save the business money.",
  },
  // Everything after "The problem" comes from Kieran's case study deck in Figma (Case study – Help & Support).
  story: [
    {
      type: "text",
      heading: "The process",
      paragraphs: [
        "I started by aligning all stakeholders on where we should focus our efforts, analysed all current data, ideated some rough designs and tested them on users. After a couple of iterations the designs were implemented onto the website.",
      ],
    },
    {
      type: "steps",
      steps: [
        {
          number: "01",
          title: "Kick off",
          description:
            "Workshop with stakeholders to agree how we’d measure success: fewer calls and support emails, more postcode lookups and less time to find an article.",
        },
        {
          number: "02",
          title: "Research",
          description:
            "Customer service data, Hotjar and survey feedback, a design audit of the current Help pages, competitor research and Maze testing of the live site.",
        },
        {
          number: "03",
          title: "Define",
          description:
            "Personas, as-is and to-be customer journey maps, and a stakeholder workshop and open card sort to settle the main categories.",
        },
        {
          number: "04",
          title: "Design and test",
          description:
            "Mobile and desktop prototypes tested on Maze, with new components, styles and icons added to the design system.",
        },
      ],
    },
    {
      type: "image",
      layout: "full-width",
      images: [
        {
          src: "/images/help-pages/kick-off.jpg",
          alt: "Kick off workshop board: how we will measure success (calls, postcode lookups, live chat, support emails, time to find an article), with sticky notes on what we’re doing and why, personas, what we need to find out, next steps and current pain points",
        },
      ],
      caption: "Kick off workshop with stakeholders",
    },
    {
      type: "text",
      heading: "Data analysis",
      paragraphs: [
        "Customer service feedback showed the majority of customers were calling about installation queries, such as rescheduling or what happens on the day. The next biggest call point was the customer’s service going down or router issues, followed by account management, then signing up queries and billing changes.",
        "Hotjar and survey feedback on the current implementation was largely negative, with users saying they couldn’t find any articles on how to change appointments, or that they didn’t know how to fix their routers.",
      ],
    },
    {
      type: "image",
      layout: "full-width",
      // TODO(Kieran): export the old Help pages screenshot from the "Data/design analysis" slide.
      caption: "Design audit of the old Help pages",
    },
    {
      type: "text",
      heading: "Testing the current Help pages",
      paragraphs: [
        "I tested the existing Help pages on Maze to set a baseline. Asked to find out how to reschedule their installation slot, none of the 12 testers found the answer directly and half didn’t finish the task.",
      ],
    },
    {
      type: "stats",
      stats: [
        { value: "0%", label: "direct success finding how to reschedule an installation" },
        { value: "82.2%", label: "misclick rate on the same task" },
        { value: "163.5s", label: "average time spent on the task" },
      ],
    },
    {
      type: "quote",
      text: "“What happens now that I have signed up?”",
      attribution: "The Pre-installer persona",
    },
    {
      type: "text",
      heading: "Defining the categories",
      paragraphs: [
        "Personas and as-is and to-be customer journey maps showed where people were getting stuck. The Pre-installer, for example, wants to know what happens on the day of installation and how much their first bill will be, and if they can’t find out, they want to know they can speak to someone.",
        "I then ran a workshop with stakeholders to decide the main Help categories: Installations, Troubleshooting, My Account, Signing up and Billing. An open card sort, asking users to categorise articles, matched the stakeholders’ categories almost identically, based upon call volumes and reasons for calling.",
      ],
    },
    {
      type: "image",
      layout: "full-width",
      images: [
        {
          src: "/images/help-pages/personas.jpg",
          alt: "Help page personas board: The Pre-installer, asking “What happens now that I have signed up?”, with their bio, goals, needs and expectations, motivations, pain points and a scenario",
        },
      ],
      caption: "Help page personas: The Pre-installer",
    },
    {
      type: "text",
      heading: "Prototype and testing",
      paragraphs: [
        "I designed mobile and desktop variations of the new Help homepage, category pages and articles, following a simple flow from the help homepage to top-level categories, sub-categories and articles, with search and popular articles along the way. These were tested again on Maze to see if users could find specific articles.",
      ],
    },
    {
      type: "stats",
      stats: [
        { value: "0% → 80%", label: "findability of troubleshooting articles" },
        { value: "0% → 95%", label: "findability of installation articles" },
        { value: "Improved", label: "general sentiment and ease of tasks" },
      ],
    },
    {
      type: "image",
      layout: "full-width",
      images: [
        {
          src: "/images/help-pages/prototype.jpg",
          alt: "Prototype slide: mobile and desktop variations tested again on Maze, with improved metrics listed next to three mobile screens: the help homepage, the Troubleshooting category and its top articles",
        },
      ],
      caption: "Mobile prototype: help homepage, Troubleshooting category and top articles",
    },
    {
      type: "text",
      heading: "Design system",
      paragraphs: [
        "New components were created and added to the main design system using atomic design, along with new textured background styles and a new icon set. The new pages pass on accessibility, especially contrast and heading structure.",
      ],
    },
  ],
  outcomes: [
    "A brand new Help section that has cut down on calls to customer service",
    "Troubleshooting and installation articles far easier to find in testing",
    "New components, styles and icons added to the main design system",
  ],
  // No "Next project" card for now: add `next: { title, tint, href }` once Ops Docs Automation has a case study.
};
