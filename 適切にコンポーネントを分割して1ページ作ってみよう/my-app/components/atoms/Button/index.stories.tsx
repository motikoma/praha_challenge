import type { Meta, StoryObj } from "@storybook/react";
import { Button } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Button> = {
  title: "Example/Button",
  component: Button,
  tags: ["autodocs"],
  argTypes: {
    onClick: { action: "clicked" },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    children: "応募する",
    color: "blue",
    size: "medium",
    disabled: false,
  },
};

export const Secondary: Story = {
  args: {
    children: "削除する",
    color: "red",
    size: "small",
    disabled: false,
  },
};

export const SecondaryDisabled: Story = {
  args: {
    children: "削除する",
    color: "red",
    size: "small",
    disabled: true,
  },
};
