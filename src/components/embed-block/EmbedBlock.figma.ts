// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=11-110
// source=src/components/embed-block/EmbedBlock.tsx
// component=EmbedBlock
/** Code Connect template: Figma "Embed block" (11:110) → <EmbedBlock>. */
import figma from "figma";

const caption = figma.selectedInstance.getString("Caption");

export default {
  example: figma.code`<EmbedBlock src="https://…/embed/…" title="Describe the video or prototype" caption="${caption}" />`,
  imports: ['import { EmbedBlock } from "ka-design-system"'],
  id: "ka-embed-block",
  metadata: { nestable: true },
};
