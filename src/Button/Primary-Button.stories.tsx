import React from "react";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { within } from "@storybook/testing-library";
import { Button, ButtonProps, ButtonType } from "./Button";

export default {
  title: "Primary Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args: ButtonProps) => (
  <Button {...args} />
);

export const Primary = Template.bind({});
Primary.args = {
  buttonType: ButtonType.PRIMARY,
  children: "PRIMARY BUTTON",
};

export const PrimaryHover = Template.bind({});
PrimaryHover.args = {
  buttonType: ButtonType.PRIMARY,
  children: "PRIMARY BUTTON HOVER",
};
PrimaryHover.parameters = {
  pseudo: {
    hover: true,
  },
};

export const PrimaryFocus = Template.bind({});
PrimaryFocus.args = {
  buttonType: ButtonType.PRIMARY,
  children: "PRIMARY BUTTON FOCUS",
};

PrimaryFocus.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);
  canvas.getByRole("button").focus();
};
