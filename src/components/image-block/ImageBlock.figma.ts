// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-80
// source=src/components/image-block/ImageBlock.tsx
// component=ImageBlock
/** Code Connect template: Figma "ImageBlock" (9:80) → <ImageBlock>. */
import figma from "figma";

const instance = figma.selectedInstance;
const layout = instance.getEnum("Layout", { "Full width": "full-width", Inset: "inset", "Side by side": "side-by-side" });
const showCaption = instance.getBoolean("Show caption");
const caption = instance.getString("Caption");

export default {
  example: figma.code`<ImageBlock
  layout="${layout}"
  images={[{ src: "/work/….png", alt: "…" }${layout === "side-by-side" ? ', { src: "/work/….png", alt: "…" }' : ""}]}${showCaption ? `
  caption="${caption}"` : ""}
/>`,
  imports: ['import { ImageBlock } from "ka-design-system"'],
  id: "ka-image-block",
  metadata: { nestable: true },
};
