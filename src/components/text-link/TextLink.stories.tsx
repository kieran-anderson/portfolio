import type { Meta, StoryObj } from "@storybook/react-vite";
import { TextLink } from "./TextLink";

const meta = {
  title: "Core/Text link",
  component: TextLink,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Underlined SemiBold link with an arrow that nudges 4px on hover. **Coming soon** hides the arrow and isn't clickable. [Figma: Text link](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-99)" } } },
  args: { children: "Read case study", href: "#", size: "default", comingSoon: false },
  argTypes: { size: { control: "inline-radio", options: ["default", "small"] }, asChild: { control: false } },
} satisfies Meta<typeof TextLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Small: Story = { args: { size: "small" } };
export const ComingSoon: Story = { args: { comingSoon: true, children: "Coming soon!" } };
export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-col gap-16 bg-bg-page p-24">
      {(["default", "small"] as const).map((size) => (
        <div key={size} className="flex items-center gap-24">
          <TextLink size={size} href="#">Read case study</TextLink>
          <TextLink size={size} comingSoon>Coming soon!</TextLink>
        </div>
      ))}
    </div>
  ),
};
