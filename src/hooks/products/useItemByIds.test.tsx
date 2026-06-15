import { renderHook } from "@testing-library/react";
import { useItemsByIds } from "./useItemByIds";
import * as useProductsModule from "./useProducts";
import { vi } from "vitest";

vi.mock("./useProducts", () => ({
    useProducts: vi.fn(),
}))

const ids = ["1", "2", "3"];

describe("useItemsByIds", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("should return filtered products and a map when data is loaded", () => {
    vi.mocked(useProductsModule.useProducts).mockReturnValue({
      data: [
        { id: "1", name: "Produkt 1" },
        { id: "2", name: "Produkt 2" },
      ],
      isLoading: false,
      error: null,
    } as any);

    const { result } = renderHook(() => useItemsByIds(["1"]));

    expect(result.current.filteredProducts).toHaveLength(1);
    expect(result.current.productsMap).toHaveProperty("1");
    expect(result.current.isLoading).toBe(false);
  });

  test("should show loading state", () => {
    vi.mocked(useProductsModule.useProducts).mockReturnValue({
      data: undefined,
      isLoading: true,
      error: null,
    } as any);

    const { result } = renderHook(() => useItemsByIds(ids));

    expect(result.current.isLoading).toBe(true);
    expect(result.current.filteredProducts).toHaveLength(0);
  });

  test("should handle error state", () => {
    vi.mocked(useProductsModule.useProducts).mockReturnValue({
      data: undefined,
      isLoading: false,
      error: new Error("Błąd serwera"),
    } as any);

    const { result } = renderHook(() => useItemsByIds(ids));

    expect(result.current.error).toBeDefined();
    expect(result.current.isLoading).toBe(false);
  });
});