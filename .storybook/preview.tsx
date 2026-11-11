import { withThemeByClassName } from "@storybook/addon-themes";
import type { Preview } from "@storybook/react-vite";
import "./preview.css";

const preview: Preview = {
  decorators: [
    // Toolbar switch: Light / Dark. Adds class="light" or class="dark" to <html>, like a real app would.
    withThemeByClassName({ themes: { Light: "light", Dark: "dark" }, defaultTheme: "Light" }),
  ],
  parameters: {
    layout: "centered",
    backgrounds: { disable: true },
    controls: { expanded: true, sort: "requiredFirst" },
    viewport: {
      options: {
        mobile: { name: "Mobile (375)", styles: { width: "375px", height: "800px" } },
        tablet: { name: "Tablet (768)", styles: { width: "768px", height: "1024px" } },
        desktop: { name: "Desktop (1280)", styles: { width: "1280px", height: "900px" } },
      },
    },
    a11y: { test: "error" },
  },
};
export default preview;
