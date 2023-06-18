import type { Meta, StoryObj } from "@storybook/react";
import { CloseIcon } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CloseIcon> = {
  title: "Example/CloseIcon",
  component: CloseIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CloseIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "CloseIcon",
  },
};
