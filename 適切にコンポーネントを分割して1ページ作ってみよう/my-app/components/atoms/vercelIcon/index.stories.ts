import type { Meta, StoryObj } from "@storybook/react";
import { VercelIcon } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof VercelIcon> = {
  title: "Example/VercelIcon",
  component: VercelIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof VercelIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "githubIcon",
  },
};
