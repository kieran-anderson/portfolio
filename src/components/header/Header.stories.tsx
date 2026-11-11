import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoEmail, demoLinks } from "./demo";
import { Header } from "./Header";

const meta = {
  title: "Navigation/Header",
  component: Header,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: "Site header. Resize the preview (or use the viewport toolbar) to see Mobile < 768 ≤ Tablet < 1280 ≤ Desktop. On Mobile the toggle opens the Mobile menu. [Figma: Header](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=7-75)" } },
  },
  args: { links: demoLinks, activeHref: "/work", email: demoEmail },
} satisfies Meta<typeof Header>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: "desktop" } } };
export const Tablet: Story = { globals: { viewport: { value: "tablet" } } };
export const Mobile: Story = { globals: { viewport: { value: "mobile" } } };
