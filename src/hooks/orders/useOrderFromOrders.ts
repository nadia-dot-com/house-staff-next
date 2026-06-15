import { useMemo } from "react";
import { useOrders } from "./useOrders";
import { keyBy } from "lodash";

export const useOrderFromOrders = (orderId?: string) => {
  const { data, ...rest } = useOrders();

  const ordersMap = useMemo(
    () => keyBy(data, 'id'),
    [data],
  );

  return { order: orderId ? ordersMap?.[orderId]: null, ...rest };
};
