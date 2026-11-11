// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-65
// source=src/components/case-study-hero/CaseStudyHero.tsx
// component=CaseStudyHero
/** Code Connect template: Figma "CaseStudyHero" (9:65) → <CaseStudyHero>. */
import figma from "figma";

const instance = figma.selectedInstance;
const title = instance.getString("Title");
const summary = instance.getString("Summary");
const tint = instance.getEnum("Tint", { Blue: "blue", Mint: "mint", Peach: "peach" });

export default {
  example: figma.code`<CaseStudyHero
  client="Client · Year"
  title="${title}"
  summary="${summary}"
  tint="${tint}"
  meta={[
    { label: "Role", value: "…" },
    { label: "Timeline", value: "…" },
    { label: "Team", value: "…" },
    { label: "Platform", value: "…" },
  ]}
  coverSrc="/work/…/cover.png"
  coverAlt="…"
/>`,
  imports: ['import { CaseStudyHero } from "ka-design-system"'],
  id: "ka-case-study-hero",
  metadata: { nestable: false },
};
