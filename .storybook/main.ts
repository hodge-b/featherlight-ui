import type { StorybookConfig } from "@storybook/react-vite";
const tsconfigPaths = require("vite-tsconfig-paths");

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@storybook/addon-onboarding",
    "@storybook/addon-essentials",
    "@chromatic-com/storybook",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    config.plugins = [...(config?.plugins as []), tsconfigPaths.default()];
    return {
      ...config,
    };
  },
};
export default config;
