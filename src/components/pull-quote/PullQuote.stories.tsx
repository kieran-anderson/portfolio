import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoCaseStudy as d } from "@/components/case-study-hero/demo";
import { PullQuote } from "./PullQuote";

const meta = {
  title: "Case study/Pull quote",
  component: PullQuote,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "A key user quote or insight in Display type. Reading width. [Figma: Pull quote](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-81)" } } },
  args: { quote: d.quote, attribution: "Customer interview, round 2" },
  render: (args) => <div className="mx-auto max-w-content"><PullQuote {...args} /></div>,
} satisfies Meta<typeof PullQuote>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
