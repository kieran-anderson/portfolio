import type { Meta, StoryObj } from "@storybook/react-vite";
import { NextProject } from "./NextProject";

const meta = {
  title: "Case study/Next project",
  component: NextProject,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Closing card linking to the next case study, on that project’s tint. Hover to see the lift. [Figma: Next project](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-261)" } } },
  args: { title: "Ops Docs Automation – Barclays", tint: "mint", href: "#" },
  argTypes: { tint: { control: "inline-radio", options: ["blue", "mint", "peach"] } },
  render: (args) => <div className="mx-auto max-w-content"><NextProject {...args} /></div>,
} satisfies Meta<typeof NextProject>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Mint: Story = {};
export const Blue: Story = { args: { tint: "blue" } };
