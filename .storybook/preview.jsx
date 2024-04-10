/** @type { import('@storybook/react').Preview } */

import { INITIAL_VIEWPORTS } from "@storybook/addon-viewport";

import "../src/index.css";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    viewport: {
      viewports: INITIAL_VIEWPORTS,
    },
  },
};

export default preview;
