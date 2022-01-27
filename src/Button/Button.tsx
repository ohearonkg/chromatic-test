import React, { ButtonHTMLAttributes, FC } from "react";
import styles from "./Button.module.scss";
import classNames from "classnames/bind";

export enum ButtonType {
  PRIMARY,
  SECONDARY,
}

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * The type of button
   */
  buttonType?: ButtonType;
}

const cx = classNames.bind(styles);

const Button: FC<ButtonProps> = ({
  children,
  buttonType = ButtonType.PRIMARY,
  ...props
}) => {
  const buttonClassName = cx({
    Button: true,
    PrimaryButton: buttonType === ButtonType.PRIMARY,
    SecondaryButton: buttonType === ButtonType.SECONDARY,
  });

  return (
    <button className={buttonClassName} {...props}>
      {children}
    </button>
  );
};

export { Button };
