import { getWrapper } from "@/tests/getWrapper";
import { renderHook } from "@testing-library/react";
import { useOrderFromOrders } from "./useOrderFromOrders";
import { useOrders } from "./useOrders";

vi.mock("./useOrders", () => ({
  useOrders: vi.fn(),
}));

describe("useWishlist", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  test("shold return order by id", () => {
    const mockOrders = [
      { id: "order_1", total: 100 },
      { id: "order_2", total: 200 },
    ];

    vi.mocked(useOrders).mockReturnValue({
      data: mockOrders,
      isLoading: false,
    } as any);

    const { result } = renderHook(() => useOrderFromOrders("order_2"), {
      wrapper: getWrapper(),
    });

    expect(result.current.order).toEqual(mockOrders[1]);
  });
});
