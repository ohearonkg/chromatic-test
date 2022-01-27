import React from "react";
import { userEvent, within } from '@storybook/testing-library';
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Button, ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button buttonType={ButtonType.PRIMARY}>Primary Button</Button>
);

Primary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.hover(
    canvas.getByRole('button')
  )
}


export const Secondary: ComponentStory<typeof Button> = () => (
  <Button buttonType={ButtonType.SECONDARY}>Secondary Button</Button>
);


Secondary.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement);

  await userEvent.hover(
    canvas.getByRole('button')
  )
}
