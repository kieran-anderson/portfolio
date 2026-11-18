// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=7-75
// source=src/components/header/Header.tsx
// component=Header
/** Code Connect template: Figma "Header" (7:75) → <Header>. Breakpoint variants are automatic (responsive CSS). */
import figma from "figma";

export default {
  example: figma.code`<Header
  links={[
    { label: "Work", href: "/work" },
    { label: "About", href: "/about" },
  ]}
  activeHref="/work"
  email="you@example.com"
/>`,
  imports: ['import { Header } from "ka-design-system"'],
  id: "ka-header",
  metadata: { nestable: false },
};
