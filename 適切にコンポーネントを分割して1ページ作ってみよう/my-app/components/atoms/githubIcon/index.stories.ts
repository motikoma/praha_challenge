import type { Meta, StoryObj } from "@storybook/react";
import { GithubIcon } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof GithubIcon> = {
  title: "Example/GithubIcon",
  component: GithubIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GithubIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "githubIcon",
  },
};
