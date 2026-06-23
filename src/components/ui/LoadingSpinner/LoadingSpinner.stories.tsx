import { LoadingSpinner } from "./LoadingSpinner";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof LoadingSpinner> = {
  component: LoadingSpinner,
};

export default meta;

type Story = StoryObj<typeof LoadingSpinner>;

export const Default: Story = {};
