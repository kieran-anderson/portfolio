// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-81
// source=src/components/pull-quote/PullQuote.tsx
// component=PullQuote
/** Code Connect template: Figma "PullQuote" (9:81) → <PullQuote>. */
import figma from "figma";

const instance = figma.selectedInstance;
const quote = instance.getString("Quote");
const attribution = instance.getString("Attribution");

export default {
  example: figma.code`<PullQuote quote="${quote}" attribution="${attribution}" />`,
  imports: ['import { PullQuote } from "ka-design-system"'],
  id: "ka-pull-quote",
  metadata: { nestable: true },
};
