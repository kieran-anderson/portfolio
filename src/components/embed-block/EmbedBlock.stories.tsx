import type { Meta, StoryObj } from "@storybook/react-vite";
import { EmbedBlock } from "./EmbedBlock";

const meta = {
  title: "Playground/Embed block",
  component: EmbedBlock,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "16:9 embed that loads only when the play button is pressed. [Figma: Embed block](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=11-110)" } } },
  args: {
    src: "about:blank",
    title: "Demo: generating a project card from a prompt",
    caption: "Demo — generating a project card from a prompt (0:42)",
  },
} satisfies Meta<typeof EmbedBlock>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
