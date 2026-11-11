import type { Meta, StoryObj } from "@storybook/react-vite";
import { Divider } from "./Divider";

const meta = {
  title: "Core/Divider",
  component: Divider,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "1px hairline that fills its container. [Figma: Divider](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-149)" } } },
} satisfies Meta<typeof Divider>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => (
    <div className="flex max-w-reading flex-col gap-16 bg-bg-page p-24 text-body text-text-secondary">
      <p>Section above</p>
      <Divider />
      <p>Section below</p>
    </div>
  ),
};
