import type { StorybookConfig } from '@storybook/vue3-vite';

const config: StorybookConfig = {
  "stories": [
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  "addons": ['storybook-addon-test-codegen', '@storybook/addon-mcp'],
  "framework": "@storybook/vue3-vite",
  features: {
    componentsManifest: true,
    experimentalDocgenServer: true,
    experimentalReview: true,
  }
};
export default config;