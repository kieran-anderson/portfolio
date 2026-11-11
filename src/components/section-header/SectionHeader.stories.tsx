import type { Meta, StoryObj } from "@storybook/react-vite";
import { SectionHeader } from "./SectionHeader";

const meta = {
  title: "Home/Section header",
  component: SectionHeader,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Overline + H2 title with an optional link. [Figma: Section header](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-48)" } } },
  args: { overline: "Selected work", title: "Case studies", action: { label: "View all", href: "#" } },
} satisfies Meta<typeof SectionHeader>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithAction: Story = {};
export const WithoutAction: Story = { args: { action: undefined } };
