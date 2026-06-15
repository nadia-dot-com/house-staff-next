import { OrderPayload } from "@/types/api/order.payload";
import { OrderResponse } from "@/types/api/order.response";
import { API_URL } from "@/config/env";

export async function sendOrderToServer(
  token: string,
  order: OrderPayload,
): Promise<OrderResponse> {
  const res = await fetch(`${API_URL}/orders`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(order),
  });

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to create order. An unexpected Error was received from the server.",
    );
  }

  return data;
}
