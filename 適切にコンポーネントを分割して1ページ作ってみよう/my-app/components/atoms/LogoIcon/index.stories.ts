import type { Meta, StoryObj } from "@storybook/react";
import { LogoIcon } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof LogoIcon> = {
  title: "Example/LogoIcon",
  component: LogoIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof LogoIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "LogoIcon",
  },
};
