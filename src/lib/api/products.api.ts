import { Product } from "@/types/api/product";
import { API_URL } from "@/config/env";
import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/constants/cache";

export const fetchProducts = async (): Promise<Product[]> => {
  "use cache";
  cacheTag(CACHE_TAGS.products);
  cacheLife("hours");

  const res = await fetch(`${API_URL}/products`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ?? "Failed to fetch products. An unexpected Error was received from the server."
    );
  }

  return data;
};
