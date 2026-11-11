// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-139
// source=src/components/icon-button/IconButton.tsx
// component=IconButton
/** Code Connect template: Figma "Icon button" (6:139) → <IconButton>. Hover is a CSS state. */
import figma from "figma";

const instance = figma.selectedInstance;
const { renderProp } = figma.helpers.react;
const variant = instance.getEnum("Variant", { Filled: "filled", Outline: "outline" });
const icon = instance.getInstanceSwap("Icon")?.executeTemplate().example;

export default {
  example: figma.code`<IconButton${icon ? renderProp("icon", icon) : ""} aria-label="Describe the action"${variant === "outline" ? renderProp("variant", variant) : ""} />`,
  imports: ['import { IconButton } from "ka-design-system"'],
  id: "ka-icon-button",
  metadata: { nestable: true },
};
