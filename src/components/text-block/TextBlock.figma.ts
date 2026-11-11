// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-66
// source=src/components/text-block/TextBlock.tsx
// component=TextBlock
/** Code Connect template: Figma "TextBlock" (9:66) → <TextBlock>. */
import figma from "figma";

const instance = figma.selectedInstance;
const showHeading = instance.getBoolean("Show heading");
const heading = instance.getString("Heading");
const body = instance.getString("Body");

export default {
  example: showHeading
    ? figma.code`<TextBlock heading="${heading}">${body}</TextBlock>`
    : figma.code`<TextBlock>${body}</TextBlock>`,
  imports: ['import { TextBlock } from "ka-design-system"'],
  id: "ka-text-block",
  metadata: { nestable: true },
};
