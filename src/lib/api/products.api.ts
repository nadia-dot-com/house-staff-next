import { Product } from "@/types/api/product";
import { API_URL } from "@/config/env";
import { cacheTag } from "next/cache";

export const fetchProducts = async (): Promise<Product[]> => {
  "use cache"
  cacheTag();
  
  const res = await fetch(`${API_URL}/products`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch products. An unexpected Error was received from the server.",
    );
  }

  return data;
};
