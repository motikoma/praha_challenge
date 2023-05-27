import type { Meta, StoryObj } from "@storybook/react";
import { CartIcon } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof CartIcon> = {
  title: "Example/CartIcon",
  component: CartIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof CartIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "CartIcon",
  },
};
