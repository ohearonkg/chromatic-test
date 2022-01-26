import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";

import { Button, ButtonType } from "./Button";

export default {
  title: "Button",
  component: Button,
} as ComponentMeta<typeof Button>;

export const Primary: ComponentStory<typeof Button> = () => (
  <Button buttonType={ButtonType.PRIMARY}>Primary Button</Button>
);

export const Secondary: ComponentStory<typeof Button> = () => (
  <Button buttonType={ButtonType.SECONDARY}>Secondary Button</Button>
);
