import type { Meta, StoryObj } from "@storybook/react-vite";
import { demoImage } from "@/components/case-study-hero/demo";
import { ImageBlock } from "./ImageBlock";

const meta = {
  title: "Case study/Image block",
  component: ImageBlock,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "Image(s) with optional caption. Full width (1216), Inset (800, centred) or Side by side (two columns, stacked on Mobile). [Figma: Image block](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=9-80)" } } },
  args: { layout: "full-width", caption: "Figure 1 — The old help centre buried answers three levels deep", images: [{ src: demoImage(1216, 640), alt: "Placeholder image" }, { src: demoImage(592, 440, "Image 2"), alt: "Placeholder image 2" }] },
  argTypes: { layout: { control: "inline-radio", options: ["full-width", "inset", "side-by-side"] } },
  render: (args) => <div className="mx-auto max-w-content"><ImageBlock {...args} /></div>,
} satisfies Meta<typeof ImageBlock>;
export default meta;
type Story = StoryObj<typeof meta>;

export const FullWidth: Story = {};
export const Inset: Story = { args: { layout: "inset" } };
export const SideBySide: Story = { args: { layout: "side-by-side" } };
