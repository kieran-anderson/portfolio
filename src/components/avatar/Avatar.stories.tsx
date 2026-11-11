import type { Meta, StoryObj } from "@storybook/react-vite";
import { Avatar } from "./Avatar";

const meta = {
  title: "Core/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Circular black-and-white portrait. Shows initials on the blue tint when there's no photo or it fails to load. [Figma: Avatar](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-148)" } } },
  args: { alt: "Kieran Anderson", size: "medium" },
  argTypes: { size: { control: "inline-radio", options: ["small", "medium", "large"] } },
} satisfies Meta<typeof Avatar>;
export default meta;
type Story = StoryObj<typeof meta>;

/** No photo: initials fallback. Pass `src` to show a portrait. */
export const Initials: Story = {};
export const AllSizes: Story = {
  render: () => (
    <div className="flex items-center gap-24 bg-bg-page p-24">
      <Avatar alt="Kieran Anderson" size="small" />
      <Avatar alt="Kieran Anderson" size="medium" />
      <Avatar alt="Kieran Anderson" size="large" />
    </div>
  ),
};
