import type { Meta, StoryObj } from "@storybook/react-vite";
import { ExperimentTile } from "./ExperimentTile";

const meta = {
  title: "Playground/Experiment tile",
  component: ExperimentTile,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Playground experiment card. Hover the tile to see the tilt, grow and glyph wiggle. [Figma: Experiment tile](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=11-96)" } } },
  args: {
    title: "Prompt-to-component",
    description: "A Claude + Figma workflow that turns a written brief into a tokenised component.",
    tags: ["AI", "Prototype"],
    media: "image",
    tint: "mint",
    href: "#",
  },
  argTypes: { media: { control: "inline-radio", options: ["image", "video"] }, tint: { control: "inline-radio", options: ["blue", "mint", "peach"] } },
  render: (args) => <div className="w-full max-w-reading"><div className="grid gap-gutter tablet:grid-cols-2"><ExperimentTile {...args} /></div></div>,
} satisfies Meta<typeof ExperimentTile>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Image: Story = {};
export const Video: Story = { args: { media: "video" } };
export const Grid: Story = {
  parameters: { layout: "fullscreen" },
  render: (args) => (
    <div className="mx-auto grid max-w-content gap-gutter p-margin tablet:grid-cols-2 desktop:grid-cols-3">
      <ExperimentTile {...args} />
      <ExperimentTile {...args} media="video" tint="blue" title="Motion study" />
      <ExperimentTile {...args} tint="peach" glyph="filter" title="Smart filters" />
    </div>
  ),
};
