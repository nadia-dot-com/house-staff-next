import { Meta, StoryObj } from "@storybook/react";
import { Price } from "./Price";

const meta: Meta<typeof Price> = {
  component: Price,
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: 10,
          width: 260,
          height: 'auto',
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
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Price>;

export const Default: Story = {
  args: {
    price: 100,
    discount: 0,
  },
};

export const WithDiscount: Story = {
  args: {
    price: 100,
    discount: 10,
  },
};
