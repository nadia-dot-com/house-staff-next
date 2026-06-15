import { useQuery } from "@tanstack/react-query";
import { OrderResponse } from "@/types/api/order.response";
import { fetchOrders } from "@/api/orders.api";
import { useUserContext } from "@/context/UserContext";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useOrders = () => {
  const { token } = useUserContext();

  return useQuery<OrderResponse[], Error>({
    queryKey: QUERY_KEYS.orders(token),
    queryFn: () => fetchOrders(token!),
    enabled: !!token,
    staleTime: 0,
  });
};
