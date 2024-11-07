import { cva } from "class-variance-authority";

export const buttonVariance = cva("p-4 cursor-pointer", {
  variants: {
    variant: {
      contained: ["bg-primary-default", "hover:bg-primary-light"],
      outlined: ["bg-transparent, border-primary-default"],
    },
    size: {
      xs: ["text-xs"],
      sm: ["text-sm"],
      md: ["text-md"],
      lg: ["text-lg"],
      xl: ["text-xl"],
    },
    radius: {
      sm: "rounded-sm",
      md: "rounded-md",
      lg: "rounded-lg",
      xl: "rounded-xl",
      pill: "",
    },
  },
  defaultVariants: {
    variant: "contained",
    size: "md",
    radius: "sm",
  },
});
