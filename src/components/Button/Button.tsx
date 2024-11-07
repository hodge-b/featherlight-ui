import React, { forwardRef } from "react";
import { cn } from "@/lib/utils";

import { ButtonProps } from "./Button.types";
import { buttonVariance } from "./Button.variance";

const Button = forwardRef<HTMLAnchorElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <a
        className={cn(buttonVariance({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

export default Button;
