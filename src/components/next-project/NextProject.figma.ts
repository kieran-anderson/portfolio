// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-261
// source=src/components/next-project/NextProject.tsx
// component=NextProject
/** Code Connect template: Figma "NextProject" (9:261) → <NextProject>. */
import figma from "figma";

const instance = figma.selectedInstance;
const title = instance.getString("Title");
const tint = instance.getEnum("Tint", { Blue: "blue", Mint: "mint", Peach: "peach" });

export default {
  example: figma.code`<NextProject title="${title}" tint="${tint}" href="/work/…" />`,
  imports: ['import { NextProject } from "ka-design-system"'],
  id: "ka-next-project",
  metadata: { nestable: true },
};
