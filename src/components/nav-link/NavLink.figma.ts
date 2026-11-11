// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=7-11
// source=src/components/nav-link/NavLink.tsx
// component=NavLink
/** Code Connect template: Figma "Nav link" (7:11) → <NavLink>. Hover is a CSS state. */
import figma from "figma";

const instance = figma.selectedInstance;
const label = instance.getString("Label");
const active = instance.getEnum("State", { Default: false, Hover: false, Active: true });

export default {
  example: active ? figma.code`<NavLink href="/…" active>${label}</NavLink>` : figma.code`<NavLink href="/…">${label}</NavLink>`,
  imports: ['import { NavLink } from "ka-design-system"'],
  id: "ka-nav-link",
  metadata: { nestable: true },
};
