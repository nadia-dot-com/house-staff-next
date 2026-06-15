import { describe, expect, it } from "vitest";
import { slugify } from "./slugify";

describe("slugify", () => {
  it("should convert to lowercase and replace spaces with dashes", () => {
    expect(slugify("Test Category")).toBe("test-category");
  });

  it("should handle multiple spaces correctly", () => {
    expect(slugify("Test    Category")).toBe("test-category");
  });

  it("should handle mixed casing and existing dashes", () => {
    expect(slugify("Test-CATEGORY")).toBe("test-category");
  });
});
