import { describe, expect, it } from "vitest";
import { getDiscountSubtotal, getSubtotal } from "./getSubtotals";
import { OrderItem } from "@/types/orderTypes";

const createData = (firstItemOverrides: Partial<OrderItem> = {}) => [
  {
    id: "1",
    name: "Test product",
    img: "test",
    price: 100,
    discount: 0,
    categoryName: "test",
    quantity: 1,
    ...firstItemOverrides,
  },
  {
    id: "2",
    name: "Test product",
    img: "test",
    price: 150,
    discount: 0,
    categoryName: "test",
    quantity: 2,
  },
];

describe("getSubtotal", () => {
  it("shoul return right value for ingine", () => {
    const data = createData();
    expect(getSubtotal(data)).toEqual(400);
  });
  it("should handle floating point values correctly", () => {
    const data = createData({ price: 100.98 });
    expect(getSubtotal(data)).toEqual(400.98);
  });
});

describe("getDiscountSubtotal", () => {
  it("should return right value for discounts", () => {
    const data = createData({ discount: 10 });

    expect(getDiscountSubtotal(data)).toEqual(390);
  });
  it("should handle floating point values correctly", () => {
    const data = createData({
      discount: 10,
      price: 100.98,
    });
    expect(getDiscountSubtotal(data)).toEqual(390.88);
  });
});
