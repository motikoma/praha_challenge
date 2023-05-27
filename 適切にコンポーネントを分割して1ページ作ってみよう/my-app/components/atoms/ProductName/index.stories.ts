import type { Meta, StoryObj } from "@storybook/react";
import { ProductName } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductName> = {
  title: "Example/ProductName",
  component: ProductName,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof ProductName>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "ProductName",
  },
};
