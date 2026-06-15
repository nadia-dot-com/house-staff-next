import { describe, expect, it } from "vitest";
import { fromSlugToTitle } from "./fromSlugToTitle";

describe("fromSlugToTitle", () => {
  it("should convert a simple slug to a capitalized title", () => {
    expect(fromSlugToTitle("test-category")).toBe("Test Category");
  });

  it("should handle single words correctly", () => {
    expect(fromSlugToTitle("electronics")).toBe("Electronics");
  });

  it("should capitalize every word in a multi-word slug", () => {
    expect(fromSlugToTitle("mens-running-shoes-collection")).toBe(
      "Mens Running Shoes Collection",
    );
  });

  it("should handle slugs with single letters", () => {
    expect(fromSlugToTitle("category-a")).toBe("Category A");
  });

  it("should return an empty string if an empty string is provided", () => {
    expect(fromSlugToTitle("")).toBe("");
  });

  it("should not crash when slug has multiple dashes in a row", () => {
    expect(fromSlugToTitle("test--slug")).toBe("Test  Slug");
  });
});
