import React from "react";
import { Button, ButtonType } from "./Button/Button";

const App = () => (
  <>
    <Button>Primary Button</Button>

    <Button buttonType={ButtonType.SECONDARY}>Secondary Button</Button>
  </>
);

export { App };
