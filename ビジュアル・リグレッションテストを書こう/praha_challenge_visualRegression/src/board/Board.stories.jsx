import React from "react";
import { Board } from "./Index";

export default {
    title: "Game/Board",
    component: Board,
}

const Template = args => <Board {...args} />

export const Default = Template.bind({})
Default.args = {
    squares: ["X", "O", "X", "O", "X", "O", "X", "O", "X"],
    onClick: (i) => {},
}

export const Triangle = Template.bind({})
Triangle.args = {
    squares: ["▲", "▲", "▲", "▲", "▲", "▲", "▲", "▲", "▲"],
    onClick: (i) => {},
}
