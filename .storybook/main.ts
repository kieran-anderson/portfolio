import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-docs", "@storybook/addon-themes", "@storybook/addon-a11y"],
  framework: { name: "@storybook/react-vite", options: {} },
  core: { disableTelemetry: true },
  // The library build's type generator isn't needed inside Storybook.
  viteFinal: async (cfg) => ({
    ...cfg,
    plugins: (cfg.plugins ?? []).flat().filter((p) => !(p && typeof p === "object" && "name" in p && String(p.name).includes("dts"))),
  }),
};
export default config;
