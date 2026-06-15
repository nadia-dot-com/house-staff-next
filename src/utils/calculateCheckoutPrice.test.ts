import { describe, expect, it } from "vitest";
import { Args, calculateCheckoutPrice } from "./calculateCheckoutPrice";

const createData = (overrides: Partial<Args> = {}): Args => ({
  cartItems: [
    {
      id: "1",
      name: "Test product",
      img: "test",
      price: 100,
      discount: 0,
      categoryName: "test",
      quantity: 1,
    },
  ],
  deliveryPrice: 10,
  vatRate: 10,
  ...overrides,
});

describe("calculateCheckoutPrice", () => {
  it("should return correct values for simple integers", () => {
    const data = createData({
      cartItems: [{ ...createData().cartItems[0], quantity: 2 }],
    });

    expect(calculateCheckoutPrice(data)).toEqual({
      subtotal: 200,
      vat: 21,
      total: 231,
    });
  });

  it("should handle floating point numbers and round correctly", () => {
    const data = createData({
      cartItems: [
        {
          ...createData().cartItems[0],
          price: 190.98,
        },
      ],
    });

    expect(calculateCheckoutPrice(data)).toEqual({
      subtotal: 190.98,
      vat: 20.1,
      total: 221.08,
    });
  });
});
