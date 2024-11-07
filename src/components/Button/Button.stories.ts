import type { Meta, StoryObj } from "@storybook/react";

import Button from "./Button";

const meta = {
  title: "Featherlight-UI/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "This is a button",
    variant: "contained",
    size: "md",
    radius: "xl",
  },
};
