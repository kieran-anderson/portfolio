// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=13-141
// source=src/components/key-stats/KeyStats.tsx
// component=KeyStats
/** Code Connect template: Figma "KeyStats" (13:141) → <KeyStats>. */
import figma from "figma";

// Layout (Row / Stack) is automatic in code.
export default {
  example: figma.code`<KeyStats
  stats={[
    { value: "−32%", label: "support calls in the first 3 months" },
    { value: "+21pts", label: "customer satisfaction score" },
    { value: "4.6/5", label: "article helpfulness rating" },
  ]}
/>`,
  imports: ['import { KeyStats } from "ka-design-system"'],
  id: "ka-key-stats",
  metadata: { nestable: false },
};
