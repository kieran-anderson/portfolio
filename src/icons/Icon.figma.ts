// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=5-158
// source=src/icons/Icon.tsx
// component=Icon
/** Code Connect template: Figma "Icon" set (node 5:158) → <Icon name="…" />. Names match 1:1. */
import figma from "figma";

const name = figma.selectedInstance.getEnum("Name", {
  "arrow-right": "arrow-right",
  "arrow-left": "arrow-left",
  "arrow-up-right": "arrow-up-right",
  external: "external",
  mail: "mail",
  linkedin: "linkedin",
  menu: "menu",
  close: "close",
  plus: "plus",
  check: "check",
  play: "play",
  filter: "filter",
  sparkle: "sparkle",
  download: "download",
});

export default {
  example: figma.code`<Icon name="${name}" />`,
  imports: ['import { Icon } from "ka-design-system"'],
  id: "ka-icon",
  metadata: { nestable: true },
};
