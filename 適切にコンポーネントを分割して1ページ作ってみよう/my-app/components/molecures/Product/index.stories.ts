import type { Meta, StoryObj } from "@storybook/react";
import { Product } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Product> = {
  title: "Example/Product",
  component: Product,
  tags: ["autodocs"],
  argTypes: {
    name: {
      control: "text",
    },
    price: {
      control: "text",
    },
    imagePath: {
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Product>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "ProductName",
    price: 100,
    imagePath: "https://placehold.jp/2040x2040.png",
  },
};
