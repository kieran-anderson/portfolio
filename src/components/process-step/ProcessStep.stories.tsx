import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoCaseStudy as d } from "@/components/case-study-hero/demo";
import { ProcessStep } from "./ProcessStep";

const meta = {
  title: "Case study/Process step",
  component: ProcessStep,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "One stage of the design process. [Figma: Process step](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-99)" } } },
  args: d.steps[0],
  render: (args) => <div className="mx-auto max-w-content"><ProcessStep {...args} /></div>,
} satisfies Meta<typeof ProcessStep>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
