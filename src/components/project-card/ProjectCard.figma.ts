// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-217
// source=src/components/project-card/ProjectCard.tsx
// component=ProjectCard
/** Code Connect template: Figma "Project card" (8:217) → <ProjectCard>. Hover is a CSS state. */
import figma from "figma";

const instance = figma.selectedInstance;
const project = instance.getString("Project");
const client = instance.getString("Client");
const description = instance.getString("Description");
const tint = instance.getEnum("Tint", { Blue: "blue", Mint: "mint", Peach: "peach" });
const comingSoon = instance.getEnum("Status", { Live: false, "Coming soon": true });

export default {
  example: comingSoon
    ? figma.code`<ProjectCard
  project="${project}"
  client="${client}"
  description="${description}"
  tint="${tint}"
  status="coming-soon"
  imageSrc="/work/….jpg"
  imageAlt="…"
/>`
    : figma.code`<ProjectCard
  project="${project}"
  client="${client}"
  description="${description}"
  tint="${tint}"
  href="/work/…"
  imageSrc="/work/….jpg"
  imageAlt="…"
/>`,
  imports: ['import { ProjectCard } from "ka-design-system"'],
  id: "ka-project-card",
  metadata: { nestable: true },
};
