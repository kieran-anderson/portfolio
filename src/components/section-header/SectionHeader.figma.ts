// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-48
// source=src/components/section-header/SectionHeader.tsx
// component=SectionHeader
/** Code Connect template: Figma "Section header" (8:48) → <SectionHeader>. */
import figma from "figma";

const instance = figma.selectedInstance;
const overline = instance.getString("Overline");
const title = instance.getString("Title");
const showAction = instance.getBoolean("Show action");

export default {
  example: showAction
    ? figma.code`<SectionHeader overline="${overline}" title="${title}" action={{ label: "View all", href: "/work" }} />`
    : figma.code`<SectionHeader overline="${overline}" title="${title}" />`,
  imports: ['import { SectionHeader } from "ka-design-system"'],
  id: "ka-section-header",
  metadata: { nestable: true },
};
