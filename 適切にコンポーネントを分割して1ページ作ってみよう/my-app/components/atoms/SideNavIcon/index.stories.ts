import type { Meta, StoryObj } from "@storybook/react";
import { SideNavIcon } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SideNavIcon> = {
  title: "Example/SideNavIcon",
  component: SideNavIcon,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SideNavIcon>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {
  args: {
    name: "SideNavIcon",
  },
};
