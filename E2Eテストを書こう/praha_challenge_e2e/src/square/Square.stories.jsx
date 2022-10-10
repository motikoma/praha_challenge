import React from "react";
import { Square } from "./Index";

export default {
    title: "Game/Square",
    component: Square
};

const Template = args => <Square {...args} />

export const Default = Template.bind({})
Default.args = {
    value: "X",
    onClick: () => {}
}