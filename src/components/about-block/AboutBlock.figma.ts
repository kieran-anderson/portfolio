// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-224
// source=src/components/about-block/AboutBlock.tsx
// component=AboutBlock
/** Code Connect template: Figma "About block" (8:224) → <AboutBlock>. */
import figma from "figma";

const showCv = figma.selectedInstance.getBoolean("Show CV link");

export default {
  example: figma.code`<AboutBlock${showCv ? ' cvHref="/cv.pdf"' : ""}>
  <p>Currently based in Glasgow, …</p>
  <p>I have a strong interest in AI tooling …</p>
  <p>When I’m not designing or tinkering, …</p>
</AboutBlock>`,
  imports: ['import { AboutBlock } from "ka-design-system"'],
  id: "ka-about-block",
  metadata: { nestable: false },
};
