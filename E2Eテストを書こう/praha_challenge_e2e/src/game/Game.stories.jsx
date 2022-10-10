import { Game } from "./Index";

export default {
    title: "Game/Game",
    component: Game,
}

const Template = args => <Game {...args} />

export const Default = Template.bind({})
Default.args = {
    current: {
        squares: [null, null, null, null, null, null, null, null, null],
        xIsNext: true
    },
    status: "Next player: X",
    handleClick: () => {},
    moves: []
}

export const Draw = Template.bind({})
Draw.args = {
    current: {
        squares: ["X", "◯", "X", "◯", "X", "◯", "◯", "X", "◯"],
        xIsNext: true
    },
    status: "Draw",
    handleClick: () => {},
    moves: []
}
