import * as React from "react";
import { mount } from "@cypress/react";
import { composeStories } from "@storybook/testing-react";
import * as stories from "../../src/Button/Button.stories";

const { Primary, Secondary } = composeStories(stories);

describe("Button", () => {
  context("Primary Button", () => {
    it("Should render", () => {
      mount(<Primary />);
    });
  });
});