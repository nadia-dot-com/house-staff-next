import { DeliveryMethod, PaymentMethod } from "./api/options";
import { DataProps } from "./checkoutTypes";

export type OrderItem = {
  id: string;
  name: string;
  img: string;
  price: number;
  discount: number;
  categoryName: string;
  quantity: number;
};

export type OrderProps = {
  orderId: string;
  items: OrderItem[];
  shippingAddress: DataProps;
  delivery: DeliveryMethod;
  payment: PaymentMethod;
  createdAt: string;
  total: number;
  vat: number;
};

export type NewOrderProps = Omit<
  OrderProps,
  "orderId" | "createdAt" | "status"
>;

