import { describe, expect, it } from "vitest";
import { getVAT } from "./getVAT";

describe("getVAT", () => {
  it("should return correct VAT value for simple integers", () => {
    expect(getVAT(100, 10)).toEqual(10);
  });
  it("should return 0 for 0 subtotal or 0 rate", () => {
    expect(getVAT(0, 0)).toEqual(0);
  });
  it("should handle floating point numbers and round correctly", () => {
    expect(getVAT(53.21, 23)).toBe(12.24);
  });
});
