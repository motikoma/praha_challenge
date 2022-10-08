import { Square } from "./Index";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title: "Game/Square",
    component: Square
} as ComponentMeta<typeof Square>;

const Template: ComponentStory<typeof Square> = args => <Square {...args} />

export const Default = Template.bind({})
Default.args = {
    value: "X",
    onClick: () => {},
}