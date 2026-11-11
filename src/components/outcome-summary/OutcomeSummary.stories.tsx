import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoCaseStudy as d } from "@/components/case-study-hero/demo";
import { OutcomeSummary } from "./OutcomeSummary";

const meta = {
  title: "Case study/Outcome summary",
  component: OutcomeSummary,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Wrap-up card with ticked results on the project tint. [Figma: Outcome summary](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-172)" } } },
  args: { items: d.outcomes, tint: "blue" },
  argTypes: { tint: { control: "inline-radio", options: ["blue", "mint", "peach"] } },
  render: (args) => <div className="mx-auto max-w-content"><OutcomeSummary {...args} /></div>,
} satisfies Meta<typeof OutcomeSummary>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {};
export const Peach: Story = { args: { tint: "peach" } };
