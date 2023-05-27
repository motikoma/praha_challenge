import type { Meta, StoryObj } from "@storybook/react";
import { Commerce } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Commerce> = {
  title: "Example/Commerce",
  component: Commerce,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Commerce>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
