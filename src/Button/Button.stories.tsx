import React from "react";
import { userEvent, within } from "@storybook/testing-library";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Button, ButtonProps, ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  buttonType: ButtonType.PRIMARY,
  children: <span> Hello World </span>,
};

PrimaryHover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.hover(canvas.getByRole("button"));
};
