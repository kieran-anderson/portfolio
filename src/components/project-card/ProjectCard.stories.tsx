import type { Meta, StoryObj } from "@storybook/react-vite";
import { ProjectCard } from "./ProjectCard";

const meta = {
  title: "Home/Project card",
  component: ProjectCard,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Case-study card on a project tint. Hover the card to see the lift, tilt and image zoom. [Figma: Project card](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-217)" } } },
  args: {
    project: "Help pages",
    client: "– Community Fibre",
    description: "A redesign of a full help centre to increase user satisfaction and lower operating costs.",
    tint: "blue",
    status: "live",
    href: "#",
  },
  argTypes: { tint: { control: "inline-radio", options: ["blue", "mint", "peach"] }, status: { control: "inline-radio", options: ["live", "coming-soon"] } },
  render: (args) => <div className="max-w-reading"><ProjectCard {...args} /></div>,
} satisfies Meta<typeof ProjectCard>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {};
export const Mint: Story = { args: { tint: "mint" } };
export const Peach: Story = { args: { tint: "peach" } };
export const ComingSoon: Story = { args: { status: "coming-soon" } };
export const Grid: Story = {
  parameters: { layout: "fullscreen" },
  render: (args) => (
    <div className="mx-auto grid max-w-content grid-cols-1 gap-gutter p-margin tablet:grid-cols-2">
      <ProjectCard {...args} tint="blue" />
      <ProjectCard {...args} tint="mint" project="Booking flow" client="– Booking.com" />
      <ProjectCard {...args} tint="peach" project="Store app" client="– Tesco" status="coming-soon" />
    </div>
  ),
};
