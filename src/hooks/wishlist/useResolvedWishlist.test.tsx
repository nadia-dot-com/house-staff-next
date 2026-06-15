import { renderHook } from "@testing-library/react";
import { describe, test, expect, beforeEach, vi } from "vitest";
import { WishlistProvider } from "@/context/WishlistContext";
import { useResolvedWishlist } from "./useResolvedWishlist";
import { getWrapper } from "@/tests/getWrapper";

import * as wishlistQueryModule from "./useWishlistQuery";
import * as itemsByIdsModule from "../products/useItemByIds";
import * as userContextModule from "@/context/UserContext";

describe("useResolvedWishlist", () => {
  const QueryWrapper = getWrapper();

  beforeEach(() => {
    vi.restoreAllMocks();
    window.localStorage.clear();
  });

  test("should return user wishlist from API when user is logged in", () => {
    vi.spyOn(userContextModule, "useUserContext").mockReturnValue({
      user: { id: "user_1" },
      token: "fake-token",
      logout: vi.fn(),
      toggleModalOpen: vi.fn(),
      isLoginModalOpen: false,
    } as any);

    const mockUserItems = [{ id: "prod_api", name: "API Product" }];
    vi.spyOn(wishlistQueryModule, "useWishlistQuery").mockReturnValue({ 
      data: mockUserItems, 
      isLoading: false, 
      error: null 
    } as any);
    
    vi.spyOn(itemsByIdsModule, "useItemsByIds").mockReturnValue({ 
      filteredProducts: [] 
    } as any);

    const { result } = renderHook(() => useResolvedWishlist(), {
      wrapper: ({ children }) => (
        <QueryWrapper>
          <WishlistProvider>{children}</WishlistProvider>
        </QueryWrapper>
      ),
    });

    expect(result.current.wishlist).toEqual(mockUserItems);
  });

  test("should return guest items when user is NOT logged in", () => {
    const mockGuestItems = [{ id: "prod_guest", name: "Guest Item" }];

    vi.spyOn(userContextModule, "useUserContext").mockReturnValue({
      user: null,
      token: null,
    } as any);

    vi.spyOn(wishlistQueryModule, "useWishlistQuery").mockReturnValue({ 
      data: [], 
      isLoading: false 
    } as any);
    
    vi.spyOn(itemsByIdsModule, "useItemsByIds").mockReturnValue({ 
      filteredProducts: mockGuestItems 
    } as any);

    const { result } = renderHook(() => useResolvedWishlist(), {
      wrapper: ({ children }) => (
        <QueryWrapper>
          <WishlistProvider>{children}</WishlistProvider>
        </QueryWrapper>
      ),
    });

    expect(result.current.wishlist).toEqual(mockGuestItems);
  });
});