import React from "react";
import { ButtonProps } from "./Button.types";

const Button = (props: ButtonProps) => {
  const { className } = props;

  return <a className={className}>Button</a>;
};

export default Button;
