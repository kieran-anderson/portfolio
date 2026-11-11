import type { Meta, StoryObj } from "@storybook/react-vite";
import { NavLink } from "./NavLink";

const meta = {
  title: "Navigation/Nav link",
  component: NavLink,
  tags: ["autodocs"],
  parameters: { docs: { description: { component: "Header navigation item. Hover: bold with a faint dot. Active (current page): bold with a dot that pops in. [Figma: Nav link](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=7-11)" } } },
  args: { children: "Work", href: "#", active: false },
} satisfies Meta<typeof NavLink>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
export const Active: Story = { args: { active: true } };
export const AllStates: Story = {
  render: () => (
    <div className="flex items-center gap-32 bg-bg-page p-24">
      <NavLink href="#" active>Work</NavLink>
      <NavLink href="#">About</NavLink>
      <NavLink href="#">Playground</NavLink>
    </div>
  ),
};
