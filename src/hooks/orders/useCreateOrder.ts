import { useMutation } from "@tanstack/react-query";
import { sendOrderToServer } from "@/api/order.api";
import { OrderResponse } from "@/types/api/order.response";
import { OrderPayload } from "@/types/api/order.payload";
import { useUserContext } from "@/context/UserContext";
import { queryClient } from "@/query/queryClient";
import { QUERY_KEYS } from "@/api/queryKeys";

export function useCreateOrder(
  onSuccessCallback?: () => void,
  onErrorCallback?: (err: Error) => void,
) {
  const { token } = useUserContext();

  return useMutation<OrderResponse, Error, OrderPayload>({
    mutationFn: async (payload: OrderPayload) => {
      if (!token) {
        throw new Error("No token");
      }
      return sendOrderToServer(token, payload);
    },

    onSuccess: () => {
      onSuccessCallback?.();
      queryClient.invalidateQueries({ queryKey: QUERY_KEYS.orders(token)});
    },
    onError: (err) => onErrorCallback?.(err),
  });
}
