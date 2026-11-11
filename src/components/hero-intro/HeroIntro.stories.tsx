import type { Meta, StoryObj } from "@storybook/react-vite";
import { HeroIntro } from "./HeroIntro";

const meta = {
  title: "Home/Hero intro",
  component: HeroIntro,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Home intro: Display statement (bold words in `<strong>`), supporting line, discipline tags, portrait. Resize to see Mobile / Tablet / Desktop. [Figma: Hero intro](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-47)" } } },
  args: {
    statement: (
      <>
        I'm Kieran, <strong>Senior product designer</strong> at Barclays. I thrive creating user-centric, impactful designs that meet user needs and achieve business goals.
      </>
    ),
    previously: (
      <>
        Previously I designed for <strong>Tesco</strong>, <strong>Booking.com</strong> and <strong>NatWest</strong>.
      </>
    ),
    disciplines: ["Product design", "UX research", "Design systems", "AI prototyping"],
    portraitAlt: "Kieran Anderson",
  },
  render: (args) => <div className="mx-auto max-w-content"><HeroIntro {...args} /></div>,
} satisfies Meta<typeof HeroIntro>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: "desktop" } } };
export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };
export const Mobile: Story = { globals: { viewport: { value: "mobile" } } };
