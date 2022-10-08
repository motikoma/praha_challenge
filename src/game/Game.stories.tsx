import { Game } from "./Index";
import { ComponentStory, ComponentMeta } from '@storybook/react';

export default {
    title: "Game/Game",
    component: Game,
} as ComponentMeta<typeof Game>

const Template: ComponentStory<typeof Game> = args => <Game />

export const Default = Template.bind({})
Default.args = {
}
