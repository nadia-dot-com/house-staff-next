import { OrderResponse } from "@/types/api/order.response";
import { API_URL } from "@/config/env";
import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/constants/cache";

export const fetchOrders = async (token: string): Promise<OrderResponse[]> => {
   "use cache"
    cacheTag(CACHE_TAGS.orders);
    cacheLife('hours');
    
  const res = await fetch(`${API_URL}/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch order. An unexpected Error was received from the server.",
    );
  }

  return data;
};
