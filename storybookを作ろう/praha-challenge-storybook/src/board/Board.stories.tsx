import { Board } from "./Index";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Game/Board",
    component: Board,
} as ComponentMeta<typeof Board>

const Template: ComponentStory<typeof Board> = args => <Board {...args} />

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
