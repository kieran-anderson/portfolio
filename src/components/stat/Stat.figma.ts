// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-86
// source=src/components/stat/Stat.tsx
// component=Stat
/** Code Connect template: Figma "Stat" (9:86) → <Stat>. */
import figma from "figma";

const instance = figma.selectedInstance;
const value = instance.getString("Value");
const label = instance.getString("Label");

export default {
  example: figma.code`<Stat value="${value}" label="${label}" />`,
  imports: ['import { Stat } from "ka-design-system"'],
  id: "ka-stat",
  metadata: { nestable: true },
};
