import { QuantityInput } from "./QuantityInput";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof QuantityInput> = {
  component: QuantityInput,
  argTypes: {
    onChange: { action: "quntity-input-change" },
  },
  decorators: [
    (Story) => (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: 20,
        }}
      >
        <Story />
      </div>
    ),
  ],
  render: (args) => {
    const [value, setValue] = useState(args.quantity);

    return (
      <QuantityInput
        {...args}
        quantity={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
    );
  },
};

export default meta;

type Story = StoryObj<typeof QuantityInput>;

export const Default: Story = {
  args: {
    stock: 10,
    quantity: 1,
  },
};
