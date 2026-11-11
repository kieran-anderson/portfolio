// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-108
// source=src/components/tag/Tag.tsx
// component=Tag
/** Code Connect template: Figma "Tag" (6:108) → <Tag>. Selected → a filter chip. Hover is a CSS state. */
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Label");
const selected = instance.getEnum("State", { Default: false, Hover: false, Selected: true });

export default {
  example: selected
    ? figma.code`<Tag selected onClick={toggle}>${label}</Tag>`
    : figma.code`<Tag>${label}</Tag>`,
  imports: ['import { Tag } from "ka-design-system"'],
  id: "ka-tag",
  metadata: { nestable: true },
};
