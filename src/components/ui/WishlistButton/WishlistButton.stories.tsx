import { Meta, StoryObj } from "@storybook/react";
import { WishlistButton } from "./WishlistButton";

const meta: Meta<typeof WishlistButton> = {
  component: WishlistButton,
  decorators: [
    (Story) => (
      <div
        style={{
          position: "relative",
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: 260,
          height: "auto",
          border: "1px solid #eee",
          padding: 8,
          backgroundColor: "#f5f5f5",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 240,
            height: 320,
            border: "1px solid #c9c7c7ff",
            padding: 8,
            backgroundColor: "#f5f5f5",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 20,
            right: 15,
            zIndex: 20,
          }}
        >
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    toggleLike: { action: "toggle-like" },
  },
};

export default meta;

type Story = StoryObj<typeof WishlistButton>;

export const HeartEmpty: Story = {
  args: {
    isLoading: false,
    liked: false,
  },
};

export const HeartFilled: Story = {
  args: {
    isLoading: false,
    liked: true,
  },
};

export const Loading: Story = {
  args: {
    isLoading: true,
  },
};
