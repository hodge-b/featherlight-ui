import { VariantProps } from "class-variance-authority";
import { AnchorHTMLAttributes } from "react";
import { buttonVariance } from "./Button.variance";

export interface ButtonProps
  extends AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof buttonVariance> {}
