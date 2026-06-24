import { WishlistProductDTO } from "@/types/api/wishlist";
import { API_URL } from "@/config/env";
import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/constants/cache";

export const fetchWishlist = async (token: string): Promise<WishlistProductDTO[]> => {
  "use cache";
  cacheTag(CACHE_TAGS.wishlist);
  cacheLife("hours");

  const res = await fetch(`${API_URL}/user/wishlist`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ?? "Failed to fetch wishlist. An unexpected Error was received from the server."
    );
  }

  return data;
};

export const fetchDeleteFromWiszlist = async (productId: string, token: string) => {
  return await fetch(`${API_URL}/user/wishlist/remove-product`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productId }),
  });
};

export const addToWishlist = async (productsIds: string[], token: string) => {
  return await fetch(`${API_URL}/user/wishlist/add-products`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ productsIds }),
  });
};
