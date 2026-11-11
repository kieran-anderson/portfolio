import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoEmail, demoLinkedIn } from "@/components/header/demo";
import { Footer } from "./Footer";

const meta = {
  title: "Navigation/Footer",
  component: Footer,
  tags: ["autodocs"],
  parameters: { layout: "fullscreen", docs: { description: { component: "Site footer: message, email + LinkedIn, legal line. Stacked on Mobile, side by side from Tablet. [Figma: Footer](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=7-158)" } } },
  args: { email: demoEmail, linkedInHref: demoLinkedIn },
} satisfies Meta<typeof Footer>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: "desktop" } } };
export const Mobile: Story = { globals: { viewport: { value: "mobile" } } };
