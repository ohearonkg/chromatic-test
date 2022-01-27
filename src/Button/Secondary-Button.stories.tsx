import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Button, ButtonProps, ButtonType } from "./Button";

export default {
  title: "Secondary Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Secondary = Template.bind({});
Secondary.args = {
  buttonType: ButtonType.SECONDARY,
  children: "Secondary BUTTON",
};

export const SecondaryHover = Template.bind({});
SecondaryHover.args = {
  buttonType: ButtonType.SECONDARY,
  children: "Secondary BUTTON HOVER",
};
SecondaryHover.parameters = {
  pseudo: {
    hover: true,
  },
};

export const SecondaryFocus = Template.bind({});
SecondaryFocus.args = {
  buttonType: ButtonType.SECONDARY,
  children: "Secondary BUTTON FOCUS",
};

SecondaryFocus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.getByRole("button").focus();
};
