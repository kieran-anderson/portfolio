import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoCaseStudy as d } from "@/components/case-study-hero/demo";
import { ProcessSteps } from "./ProcessSteps";

const meta = {
  title: "Case study/Process steps",
  component: ProcessSteps,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Numbered process. One column on Mobile, two from Tablet (automatic). [Figma: Process steps](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=13-120)" } } },
  args: { steps: d.steps },
  render: (args) => <div className="mx-auto max-w-content"><ProcessSteps {...args} /></div>,
} satisfies Meta<typeof ProcessSteps>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: "desktop" } } };
export const Mobile: Story = { globals: { viewport: { value: "mobile" } } };
