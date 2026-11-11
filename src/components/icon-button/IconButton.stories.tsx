import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "@/icons";
import { IconButton } from "./IconButton";

const meta = {
  title: "Core/Icon button",
  component: IconButton,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "44px circular icon-only button. Always give it an `aria-label`. [Figma: Icon button](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-139)" } } },
  args: { icon: <Icon name="linkedin" />, "aria-label": "LinkedIn", variant: "filled" },
  argTypes: { variant: { control: "inline-radio", options: ["filled", "outline"] }, icon: { control: false } },
} satisfies Meta<typeof IconButton>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Filled: Story = {};
export const Outline: Story = { args: { variant: "outline" } };
export const AsLink: Story = {
  render: (args) => (
    <IconButton {...args} asChild>
      <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" />
    </IconButton>
  ),
};
export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-16 bg-bg-page p-24">
      <IconButton icon={<Icon name="linkedin" />} aria-label="LinkedIn" />
      <IconButton icon={<Icon name="linkedin" />} aria-label="LinkedIn" variant="outline" />
      <IconButton icon={<Icon name="menu" />} aria-label="Open menu" variant="outline" />
    </div>
  ),
};
