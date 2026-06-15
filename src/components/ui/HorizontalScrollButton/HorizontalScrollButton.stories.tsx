import { HorizontalScrollButton } from "./HorizontalScrollButton";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof HorizontalScrollButton> = {
  component: HorizontalScrollButton,
  argTypes: {
    onClick: { action: "scroll" },
  },
  decorators: [
    (Story) => (
      <div
        style={{ position: "relative", height: "200px", background: "#eee" }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof HorizontalScrollButton>;

export const LeftDefault: Story = {
  args: {
    direction: "left",
    disabled: false,
  },
};

export const RightDefault: Story = {
  args: {
    direction: "right",
    disabled: false,
  },
};
