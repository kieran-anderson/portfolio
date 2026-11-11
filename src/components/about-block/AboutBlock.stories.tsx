import type { Meta, StoryObj } from "@storybook/react-vite";
import { AboutBlock } from "./AboutBlock";

const meta = {
  title: "Home/About block",
  component: AboutBlock,
  tags: ["autodocs"],
  parameters: { layout: "padded", docs: { description: { component: "About section at reading width with an optional CV link. [Figma: About block](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=8-224)" } } },
  args: {
    cvHref: "#",
    children: (
      <>
        <p>Currently based in Glasgow, I have been designing digital experiences for over 12 years — for household brands, startups and small agencies, which has taken me to live in three different countries.</p>
        <p>I have a strong interest in AI tooling and vibe coding (which is how I built this portfolio).</p>
        <p>When I’m not designing or tinkering, I’m usually out hiking or running in the Scottish mountains.</p>
      </>
    ),
  },
} satisfies Meta<typeof AboutBlock>;
export default meta;
type Story = StoryObj<typeof meta>;

export const WithCvLink: Story = {};
export const WithoutCvLink: Story = { args: { cvHref: undefined } };
