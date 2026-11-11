// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-99
// source=src/components/text-link/TextLink.tsx
// component=TextLink
/** Code Connect template: Figma "Text link" (6:99) → <TextLink>. Hover is a CSS state. */
import figma from "figma";

const instance = figma.selectedInstance;
const { renderProp } = figma.helpers.react;
const size = instance.getEnum("Size", { Default: "default", Small: "small" });
const comingSoon = instance.getEnum("State", { Default: false, Hover: false, "Coming soon": true });
const label = instance.getString("Label");

export default {
  example: comingSoon
    ? figma.code`<TextLink${size === "small" ? renderProp("size", size) : ""} comingSoon>${label}</TextLink>`
    : figma.code`<TextLink href="/work/…"${size === "small" ? renderProp("size", size) : ""}>${label}</TextLink>`,
  imports: ['import { TextLink } from "ka-design-system"'],
  id: "ka-text-link",
  metadata: { nestable: true },
};
