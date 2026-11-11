import type { Meta, StoryObj } from "@storybook/react-vite";
import { useState } from "react";
import { FilterTabs } from "./FilterTabs";

const meta = {
  title: "Playground/Filter tabs",
  component: FilterTabs,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Filter chips above the Playground grid; one is selected. Click to change. [Figma: Filter tabs](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=11-99)" } } },
  args: { options: ["All", "AI tools", "Prototypes", "Motion", "Code"], value: "All", onValueChange: () => {} },
  render: (args) => {
    const [value, setValue] = useState(args.value);
    return <FilterTabs {...args} value={value} onValueChange={setValue} />;
  },
} satisfies Meta<typeof FilterTabs>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
