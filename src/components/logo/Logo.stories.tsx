import type { Meta, StoryObj } from "@storybook/react-vite";
import { Logo } from "./Logo";

const meta = {
  title: "Core/Logo",
  component: Logo,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Wordmark pill that links to Home. Default in the header; Small on mobile and in the footer. [Figma: Logo](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-158)" } } },
  args: { size: "default" },
  argTypes: { size: { control: "inline-radio", options: ["default", "small"] }, asChild: { control: false } },
} satisfies Meta<typeof Logo>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: "small" } };
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-24 bg-bg-page p-24">
      <Logo />
      <Logo size="small" />
    </div>
  ),
};
