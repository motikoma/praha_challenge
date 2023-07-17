import type { Meta, StoryObj } from "@storybook/react";
import { Carousel } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Carousel> = {
  title: "Example/Carousel",
  component: Carousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Carousel>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    data: [
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 1",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 2",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 3",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 4",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 5",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 6",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 7",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 8",
      },
      {
        imagePath: "https://placehold.jp/3d4070/ffffff/640x640.png",
        name: "Product 9",
      },
    ],
  },
};
