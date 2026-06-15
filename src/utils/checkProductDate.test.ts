import { describe, expect, it } from "vitest";
import { checkProductDate } from "./checkProductDate";
import { NEW_PRODUCT_THRESHOLD_DAYS } from "@/config";

describe("checkProductDate", () => {
  it("should return false for data > newThresholdMs", () => {
    const oldData = new Date();
    oldData.setDate(oldData.getDate() - 100);

    expect(checkProductDate("2025-11-09T00:00:00.000Z")).toEqual(false);
  });
  it("should return true for data < newThresholdMs", () => {
    const oneHourAgo = new Date();
    oneHourAgo.setHours(oneHourAgo.getHours() - 1);

    expect(checkProductDate(oneHourAgo.toISOString())).toBe(true);
  });
  it("should return true for a product exactly on the threshold", () => {
    const exactlyThreshold = new Date();
    exactlyThreshold.setDate(
      exactlyThreshold.getDate() - NEW_PRODUCT_THRESHOLD_DAYS,
    );

    expect(checkProductDate(exactlyThreshold.toISOString())).toBe(true);
  });
});
