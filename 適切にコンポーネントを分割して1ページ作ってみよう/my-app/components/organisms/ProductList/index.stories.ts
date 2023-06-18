import type { Meta, StoryObj } from "@storybook/react";
import { ProductList } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof ProductList> = {
  title: "Example/ProductList",
  component: ProductList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof ProductList>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      {
        name: "Product 1",
        price: 100,
        imagePath: "https://placehold.jp/2040x2040.png",
      },
      {
        name: "Product 2",
        price: 200,
        imagePath: "https://placehold.jp/2040x2040.png",
      },
      {
        name: "Product 3",
        price: 300,
        imagePath: "https://placehold.jp/2040x2040.png",
      },
    ],
  },
};
