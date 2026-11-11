import type { Meta, StoryObj } from "@storybook/react-vite";
import { Icon } from "@/icons";
import { Button } from "./Button";

const meta = {
  title: "Core/Button",
  component: Button,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component:
          "Pill button. **Primary** for the main call to action per view, **Secondary** for alternatives, **Ghost** for low emphasis. " +
          "Hover, pressed and focus happen automatically. Use `asChild` with a link for navigation. " +
          "[Figma: Button](https://www.figma.com/design/o88Kjupw7MOvSqAC8as9ye/Design-system?node-id=6-62)",
      },
    },
  },
  args: { children: "Get in touch", variant: "primary", disabled: false },
  argTypes: {
    variant: { control: "inline-radio", options: ["primary", "secondary", "ghost"] },
    icon: { control: false },
    asChild: { control: false },
  },
} satisfies Meta<typeof Button>;
export default meta;
type Story = StoryObj<typeof meta>;

/** Use the controls to try each variant. */
export const Playground: Story = { args: { icon: <Icon name="arrow-right" /> } };

export const Primary: Story = { args: { variant: "primary", icon: <Icon name="arrow-right" /> } };
export const Secondary: Story = { args: { variant: "secondary", icon: <Icon name="arrow-right" /> } };
export const Ghost: Story = { args: { variant: "ghost", icon: <Icon name="arrow-right" /> } };
export const WithoutIcon: Story = { args: { variant: "primary" } };
export const Disabled: Story = { args: { variant: "primary", disabled: true, icon: <Icon name="arrow-right" /> } };

/** As a link: real `<a>` element, same look. */
export const AsLink: Story = {
  render: (args) => (
    <Button {...args} variant="secondary" asChild icon={<Icon name="download" />}>
      <a href="#cv">Download CV</a>
    </Button>
  ),
};

/** Every Figma variant that is a prop: Primary / Secondary / Ghost × Default / Disabled. Matches the Figma component set. */
export const AllVariants: Story = {
  parameters: { layout: "padded" },
  render: () => (
    <div className="bg-bg-page p-24" data-testid="matrix">
      <div className="flex flex-col gap-16">
        {(["primary", "secondary", "ghost"] as const).map((variant) => (
          <div key={variant} className="flex items-center gap-16">
            <span className="text-caption text-text-tertiary w-80">{variant}</span>
            <Button variant={variant} icon={<Icon name="arrow-right" />} data-state-demo="default">
              Get in touch
            </Button>
            <Button variant={variant} icon={<Icon name="arrow-right" />} disabled>
              Get in touch
            </Button>
          </div>
        ))}
      </div>
    </div>
  ),
};
