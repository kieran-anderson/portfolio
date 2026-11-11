// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=11-96
// source=src/components/experiment-tile/ExperimentTile.tsx
// component=ExperimentTile
/** Code Connect template: Figma "Experiment tile" (11:96) → <ExperimentTile>. Hover is a CSS state. */
import figma from "figma";

const instance = figma.selectedInstance;
const title = instance.getString("Title");
const description = instance.getString("Description");
const video = instance.getEnum("Media", { Image: false, Video: true });

export default {
  example: figma.code`<ExperimentTile
  title="${title}"
  description="${description}"
  tags={["AI", "Prototype"]}${video ? `
  media="video"` : ""}
  href="/playground/…"
/>`,
  imports: ['import { ExperimentTile } from "ka-design-system"'],
  id: "ka-experiment-tile",
  metadata: { nestable: true },
};
