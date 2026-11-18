import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoEmail } from "@/components/header/demo";
import { MobileMenu } from "./MobileMenu";

const meta = {
  title: "Navigation/Mobile menu",
  component: MobileMenu,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
    docs: { description: { component: "Menu toggle + full-screen menu used by Header on Mobile: logo, close button and contact email. Click the toggle; Esc or the close button closes it. [Figma: Mobile menu](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=7-76)" } },
  },
  globals: { viewport: { value: "mobile" } },
  args: { email: demoEmail },
  render: (args) => <div className="flex justify-end bg-bg-page p-20"><MobileMenu {...args} /></div>,
} satisfies Meta<typeof MobileMenu>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Closed: Story = {};
export const Open: Story = { args: { open: true } };
