import { renderHook } from "@testing-library/react";
import { useAddToWishlist } from "./useAddToWishlist";
import { useRemoveFromWishlist } from "./useRemoveFromWishlist";
import { useWishlistQuery } from "./useWishlistQuery";
import { useWishlist } from "./useWishlist";
import { act, ReactNode } from "react";
import { UserProvider } from "@/context/UserContext";
import { WishlistProvider } from "@/context/WishlistContext";
import { TOKEN, USER } from "@/data/locatStorageKey";
import { getWrapper } from "@/tests/getWrapper";

vi.mock("./useWishlistQuery", () => ({ useWishlistQuery: vi.fn() }));
vi.mock("./useAddToWishlist", () => ({ useAddToWishlist: vi.fn() }));
vi.mock("./useRemoveFromWishlist", () => ({ useRemoveFromWishlist: vi.fn() }));

describe("useWishlist", () => {
  const AllProviders = ({ children }: { children: ReactNode }) => {
    const Wrapper = getWrapper();
    return (
      <Wrapper>
        <UserProvider>
          <WishlistProvider>{children}</WishlistProvider>
        </UserProvider>
      </Wrapper>
    );
  };

  beforeEach(() => {
    window.localStorage.clear();
    vi.clearAllMocks();
  });

  test("should handle guest mode (localStorage toggle)", () => {
    vi.mocked(useWishlistQuery).mockReturnValue({ data: [] } as any);

    const mockAdd = vi.fn();
    vi.mocked(useAddToWishlist).mockReturnValue({
      mutate: mockAdd,
      isPending: false,
      variables: [],
    } as any);
    vi.mocked(useRemoveFromWishlist).mockReturnValue({
      mutate: vi.fn(),
      isPending: false,
      variables: undefined,
    } as any);

    const { result } = renderHook(() => useWishlist("prod_1"), {
      wrapper: AllProviders,
    });

    act(() => {
      result.current.toggleLike();
    });

    expect(result.current.liked).toBe(true);
    expect(mockAdd).not.toHaveBeenCalled();
  });

  test("should call remove.mutate when user is logged and product is liked", () => {
    window.localStorage.setItem(TOKEN, JSON.stringify("fake-token"));
    window.localStorage.setItem(USER, JSON.stringify("fake-token"));

    const mockRemove = vi.fn();
    vi.mocked(useRemoveFromWishlist).mockReturnValue({
      mutate: mockRemove,
      isPending: false,
    } as any);
    vi.mocked(useWishlistQuery).mockReturnValue({
      data: [{ id: "prod_1" }],
    } as any);

    vi.mocked(useWishlistQuery).mockReturnValue({
      data: [{ id: "prod_1" }],
    } as any);

    const { result } = renderHook(() => useWishlist("prod_1"), {
      wrapper: AllProviders,
    });

    expect(result.current.liked).toBe(true);

    act(() => {
      result.current.toggleLike();
    });

    expect(mockRemove).toHaveBeenCalledWith("prod_1");
  });
});
