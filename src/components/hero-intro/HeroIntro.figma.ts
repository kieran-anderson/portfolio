// url=https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-47
// source=src/components/hero-intro/HeroIntro.tsx
// component=HeroIntro
/** Code Connect template: Figma "Hero intro" (8:47) → <HeroIntro>. Breakpoint variants are automatic. */
import figma from "figma";

export default {
  example: figma.code`<HeroIntro
  statement={<>I'm Kieran, <strong>Senior product designer</strong> at Barclays. …</>}
  previously={<>Previously I designed for <strong>Tesco</strong>, <strong>Booking.com</strong> and <strong>NatWest</strong>.</>}
  disciplines={["Product design", "UX research", "Design systems", "AI prototyping"]}
  portraitSrc="/portrait.jpg"
  portraitAlt="Kieran Anderson"
/>`,
  imports: ['import { HeroIntro } from "ka-design-system"'],
  id: "ka-hero-intro",
  metadata: { nestable: false },
};
