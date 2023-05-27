import type { Meta, StoryObj } from "@storybook/react";
import { MobileNav } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof MobileNav> = {
  title: "Example/MobileNav",
  component: MobileNav,
  tags: ["autodocs"],
  argTypes: {},
};

export default meta;
type Story = StoryObj<typeof MobileNav>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
