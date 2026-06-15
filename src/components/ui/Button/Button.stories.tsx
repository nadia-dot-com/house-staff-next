import { Button } from "./Button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Button> = {
  component: Button,
  argTypes: {
    onClick: { action: "button-click" },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  args: {
    text: "BUTTON",
    disabled: false,
    bgColor: "black",
    textColor: "white",
    type: "button",
  },
};

export const Disabled: Story = {
  args: {
    text: "Button",
    disabled: true,
    bgColor: "black",
    textColor: "white",
    type: "button",
  },
};
