// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-99
// source=src/components/process-step/ProcessStep.tsx
// component=ProcessStep
/** Code Connect template: Figma "ProcessStep" (9:99) → <ProcessStep>. */
import figma from "figma";

const instance = figma.selectedInstance;
const number = instance.getString("Number");
const title = instance.getString("Title");
const description = instance.getString("Description");

export default {
  example: figma.code`<ProcessStep number="${number}" title="${title}" description="${description}" />`,
  imports: ['import { ProcessStep } from "ka-design-system"'],
  id: "ka-process-step",
  metadata: { nestable: true },
};
