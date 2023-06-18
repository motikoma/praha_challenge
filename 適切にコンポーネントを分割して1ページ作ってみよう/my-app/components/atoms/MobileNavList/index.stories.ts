import type { Meta, StoryObj } from "@storybook/react";
import { MobileNavList } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MobileNavList> = {
  title: "Example/MobileNavList",
  component: MobileNavList,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof MobileNavList>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    contents: [
      {
        text: "hoge",
        link: "/",
      },
      {
        text: "fuga",
        link: "/",
      },
    ],
  },
};
