import { OrderItemResponse } from "@/types/api/order.response";
import { OrderItem } from "@/types/orderTypes";
import { getDiscountPrice } from "./product";
import { roundMoney } from "./roundMoney";

export const getSubtotal = (arr: OrderItem[] | OrderItemResponse[]) => {
  return arr.reduce((sum, item) => sum + Number(item.price) * item.quantity, 0);
};

export const getDiscountSubtotal = (arr: OrderItem[] | OrderItemResponse[]) => {
  return roundMoney(
    arr.reduce(
      (sum, item) =>
        sum + getDiscountPrice(item.price, item.discount) * item.quantity,
      0,
    ),
  );
};
