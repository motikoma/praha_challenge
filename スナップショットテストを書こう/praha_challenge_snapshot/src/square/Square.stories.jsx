import React from "react";
import { Square } from "./Index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Game/Square",
    component: Square
};

const Template = args => <Square {...args} />

export const Default = Template.bind({})
Default.args = {
    value: "X",
    onClick: () => {},
}