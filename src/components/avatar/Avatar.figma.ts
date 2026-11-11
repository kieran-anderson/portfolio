// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-148
// source=src/components/avatar/Avatar.tsx
// component=Avatar
/** Code Connect template: Figma "Avatar" (6:148) → <Avatar>. */
import figma from "figma";

const size = figma.selectedInstance.getEnum("Size", { Small: "small", Medium: "medium", Large: "large" });

export default {
  example: figma.code`<Avatar src="/portrait.jpg" alt="Kieran Anderson" size="${size}" />`,
  imports: ['import { Avatar } from "ka-design-system"'],
  id: "ka-avatar",
  metadata: { nestable: true },
};
