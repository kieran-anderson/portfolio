import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { Tag } from "./Tag";

const meta = {
  title: "Core/Tag",
  component: Tag,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Pill for disciplines (static) and filter chips (clickable, with a selected state that fills to ink with a small bounce). [Figma: Tag](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-108)" } } },
  args: { children: "UX research" },
} satisfies Meta<typeof Tag>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Static: Story = {};
export const Selected: Story = { args: { selected: true } };
/** Click to toggle. */
export const FilterChip: Story = {
  render: (args) => {
    const [on, setOn] = useState(false);
    return <Tag {...args} selected={on} onClick={() => setOn(!on)} />;
  },
};
export const AllVariants: Story = {
  render: () => (
    <div className="flex items-center gap-8 bg-bg-page p-24">
      <Tag>UX research</Tag>
      <Tag selected={false} onClick={() => {}}>Interaction</Tag>
      <Tag selected onClick={() => {}}>Prototyping</Tag>
    </div>
  ),
};
