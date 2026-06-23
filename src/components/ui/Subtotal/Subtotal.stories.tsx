import { OrderItem } from "@/types/orderTypes";
import { Subtotal } from "./Subtotal";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Subtotal> = {
  component: Subtotal,
  decorators: [
    (Story) => (
      <div
        style={{
          maxWidth: "800px",
          margin: "20px",
        }}
      >
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof Subtotal>;

const baseItem: OrderItem = {
  id: "1",
  name: "Sofa",
  price: 100,
  discount: 0,
  quantity: 1,
  categoryName: "Sofas",
  img: "image",
};

export const Default: Story = {
  args: {
    arr: [
      baseItem,
      {
        ...baseItem,
        id: "2",
        price: 200,
        quantity: 2,
      },
    ],
  },
};

export const WithDiscount: Story = {
  args: {
    arr: [
      baseItem,
      {
        ...baseItem,
        id: "2",
        price: 200,
        quantity: 2,
        discount: 20,
      },
    ],
  },
};
