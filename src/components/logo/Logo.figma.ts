// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-158
// source=src/components/logo/Logo.tsx
// component=Logo
/** Code Connect template: Figma "Logo" (6:158) → <Logo>. */
import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", { Default: "default", Small: "small" });

export default {
  example: size === "small" ? figma.code`<Logo size="small" />` : figma.code`<Logo />`,
  imports: ['import { Logo } from "ka-design-system"'],
  id: "ka-logo",
  metadata: { nestable: true },
};
