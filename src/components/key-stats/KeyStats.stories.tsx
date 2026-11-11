import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoCaseStudy as d } from "@/components/case-study-hero/demo";
import { KeyStats } from "./KeyStats";

const meta = {
  title: "Case study/Key stats",
  component: KeyStats,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Outcome metrics on a white card. Stacked on Mobile, a row from Tablet (automatic). [Figma: Key stats](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=13-141)" } } },
  args: { stats: d.stats },
  render: (args) => <div className="mx-auto max-w-content"><KeyStats {...args} /></div>,
} satisfies Meta<typeof KeyStats>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Desktop: Story = { globals: { viewport: { value: "desktop" } } };
export const Mobile: Story = { globals: { viewport: { value: "mobile" } } };
