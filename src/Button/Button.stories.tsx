import React from "react";
import { userEvent, within } from '@storybook/testing-library';
import { ComponentMeta } from "@storybook/react";
import { Button, ButtonProps, ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

const Template = (args:ButtonProps) => <Button {...args} />

export const PrimaryHover = Template.bind({buttonType: ButtonType.PRIMARY})

// @ts-ignore
PrimaryHover.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.hover(canvas.getByRole('button'))
}

