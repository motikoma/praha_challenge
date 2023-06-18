import type { Meta, StoryObj } from "@storybook/react";
import { GlobalNavigation } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof GlobalNavigation> = {
  title: "Example/GlobalNavigation",
  component: GlobalNavigation,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof GlobalNavigation>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
