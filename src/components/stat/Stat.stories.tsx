import type { Meta, StoryObj } from "@storybook/react-vite";
import { Stat } from "./Stat";

const meta = {
  title: "Case study/Stat",
  component: Stat,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "A single metric. Use inside Key stats. [Figma: Stat](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-86)" } } },
  args: { value: "−32%", label: "support calls in the first 3 months" },
  render: (args) => <div className="mx-auto max-w-content"><Stat {...args} /></div>,
} satisfies Meta<typeof Stat>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
