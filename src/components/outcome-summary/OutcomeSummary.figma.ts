// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-172
// source=src/components/outcome-summary/OutcomeSummary.tsx
// component=OutcomeSummary
/** Code Connect template: Figma "OutcomeSummary" (9:172) → <OutcomeSummary>. */
import figma from "figma";

const instance = figma.selectedInstance;
const tint = instance.getEnum("Tint", { Blue: "blue", Mint: "mint", Peach: "peach" });
const i1 = instance.getString("Item 1");
const i2 = instance.getString("Item 2");
const i3 = instance.getString("Item 3");

export default {
  example: figma.code`<OutcomeSummary
  tint="${tint}"
  items={["${i1}", "${i2}", "${i3}"]}
/>`,
  imports: ['import { OutcomeSummary } from "ka-design-system"'],
  id: "ka-outcome-summary",
  metadata: { nestable: true },
};
