import { describe, expect, it } from "vitest";
import { getDiscountPrice, getSafeQuantity } from "./product";

describe("product utils", () => {
  const mockProduct = {
    id: "1",
    price: 100,
    discount: 10,
    stockQuantity: 5,
  } as any;

  describe("getDiscountPrice", () => {
    it("should calculate price with 10% discount", () => {
      expect(getDiscountPrice(100, 10)).toBe(90);
    });

    it("should return original price if discount is 0", () => {
      expect(getDiscountPrice(100, 0)).toBe(100);
    });

    it("should handle floating point prices", () => {
      expect(getDiscountPrice(19.99, 10)).toBeCloseTo(17.991);
    });
  });

  describe("getSafeQuantity", () => {
    it("should return requested quantity if it is within stock", () => {
      expect(getSafeQuantity(3, mockProduct)).toBe(3);
    });

    it("should cap quantity to stock limit", () => {
      expect(getSafeQuantity(10, mockProduct)).toBe(5);
    });

    it("should return 0 if stock is 0", () => {
      const outOfStock = { ...mockProduct, stockQuantity: 0 };
      expect(getSafeQuantity(1, outOfStock)).toBe(0);
    });
  });
});
