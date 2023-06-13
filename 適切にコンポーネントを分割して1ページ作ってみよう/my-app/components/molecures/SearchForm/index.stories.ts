import type { Meta, StoryObj } from "@storybook/react";
import { SearchForm } from ".";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof SearchForm> = {
  title: "Example/SearchForm",
  component: SearchForm,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof SearchForm>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary: Story = {};
