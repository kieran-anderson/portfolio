import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoCaseStudy as d } from "@/components/case-study-hero/demo";
import { CaseStudyHero } from "./CaseStudyHero";

const meta = {
  title: "Case study/Case study hero",
  component: CaseStudyHero,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Top of every case study: client tag, H1, summary, facts row and a tinted cover. [Figma: Case study hero](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-65)" } } },
  args: { client: d.client, title: d.title, summary: d.summary, meta: d.meta, tint: "blue" },
  argTypes: { tint: { control: "inline-radio", options: ["blue", "mint", "peach"] } },
  render: (args) => <div className="mx-auto max-w-content"><CaseStudyHero {...args} /></div>,
} satisfies Meta<typeof CaseStudyHero>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Blue: Story = {};
export const Mint: Story = { args: { tint: "mint" } };
export const Peach: Story = { args: { tint: "peach" } };
