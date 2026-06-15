import { describe, expect, it } from "vitest";
import { roundMoney } from "./roundMoney";

describe("roundMoney", () => {
  it("should round ingine value correctly", () => {
    expect(roundMoney(400.985)).toEqual(400.99);
  });
  it("should round floating point correctly", () => {
    expect(roundMoney(400.984)).toEqual(400.98);
  });
  it("should solve floating point precision issues (0.1 + 0.2)", () => {
    const brokenSum = 0.1 + 0.2;
    expect(roundMoney(brokenSum)).toEqual(0.3);
  });

  it("should round complex decimals correctly", () => {
    expect(roundMoney(1.234567)).toEqual(1.23);
  });
});
