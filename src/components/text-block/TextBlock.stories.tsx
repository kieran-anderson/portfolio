import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoCaseStudy as d } from "@/components/case-study-hero/demo";
import { TextBlock } from "./TextBlock";

const meta = {
  title: "Case study/Text block",
  component: TextBlock,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Long-form story text at reading width. [Figma: Text block](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-66)" } } },
  args: { heading: "The problem", children: d.problem },
  render: (args) => <div className="mx-auto max-w-content"><TextBlock {...args} /></div>,
} satisfies Meta<typeof TextBlock>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithHeading: Story = {};
export const WithoutHeading: Story = { args: { heading: undefined } };
