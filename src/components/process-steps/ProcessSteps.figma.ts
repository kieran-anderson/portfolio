// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=13-120
// source=src/components/process-steps/ProcessSteps.tsx
// component=ProcessSteps
/** Code Connect template: Figma "ProcessSteps" (13:120) → <ProcessSteps>. */
import figma from "figma";

// Layout (Two columns / One column) is automatic in code.
export default {
  example: figma.code`<ProcessSteps
  steps={[
    { number: "01", title: "Discover", description: "…" },
    { number: "02", title: "Define", description: "…" },
    { number: "03", title: "Design", description: "…" },
    { number: "04", title: "Deliver", description: "…" },
  ]}
/>`,
  imports: ['import { ProcessSteps } from "ka-design-system"'],
  id: "ka-process-steps",
  metadata: { nestable: false },
};
