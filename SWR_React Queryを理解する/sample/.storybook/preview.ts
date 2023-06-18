import type { Preview } from "@storybook/react";
import { rest } from "msw";
import { setupWorker } from "msw";

export const handlers = [
  rest.get(
    "https://api.github.com/repos/tannerlinsley/react-query",
    (req, res, ctx) => {
      return res(
        ctx.json({
          name: "react-query",
          description:
            "Hooks for fetching, caching and updating asynchronous data in React",
          subscribers_count: 100,
          stargazers_count: 200,
          forks_count: 300,
        })
      );
    }
  ),
];

const worker = setupWorker(...handlers);
worker.start();

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
