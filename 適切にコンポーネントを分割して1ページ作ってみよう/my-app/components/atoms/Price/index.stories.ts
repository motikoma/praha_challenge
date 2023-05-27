import type { Meta, StoryObj } from "@storybook/react";
import { Price } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Price> = {
  title: "Example/Price",
  component: Price,
  tags: ["autodocs"],
  argTypes: {
    price: {
      control: {
        type: "number",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Price>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    price: 100,
  },
};
