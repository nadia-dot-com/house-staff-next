import { EmptyCart } from "./EmptyCart";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmptyCart> = {
  component: EmptyCart,
};

export default meta;

type Story = StoryObj<typeof EmptyCart>;

export const Default: Story = {};
