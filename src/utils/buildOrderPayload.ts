import { DeliveryMethod, PaymentMethod } from "@/types/api/options";
import { OrderPayload } from "@/types/api/order.payload";
import { DataProps } from "@/types/checkoutTypes";
import { OrderItem } from "@/types/orderTypes";

export type BuildOrderPayloadArgs = {
  items: OrderItem[];
  shippingAddress: DataProps;
  delivery: DeliveryMethod;
  payment: PaymentMethod;
  total: number;
};

export function buildOrderPayload({
  items,
  shippingAddress,
  delivery,
  payment,
  total,
}: BuildOrderPayloadArgs): OrderPayload {
  if (
    !shippingAddress.country ||
    !shippingAddress.city ||
    !shippingAddress.postalCode ||
    !shippingAddress.address ||
    !shippingAddress.email ||
    !shippingAddress.phone
  ) {
    throw new Error("Cannot build order payload: shipping data is incomplete");
  }

  return {
    delivery: {
      method: delivery.id,
    },
    payment: {
      method: payment.id,
    },
    totalPrice: total,
    shippingDetails: {
      address: {
        country: shippingAddress.country,
        city: shippingAddress.city,
        postalCode: shippingAddress.postalCode,
        street: shippingAddress.address,
      },

      email: shippingAddress.email,
      phone: shippingAddress.phone,
      notes: shippingAddress.notes || null,
    },
    items: items.map((item) => ({
      product: {
        id: item.id,
      },
      quantity: item.quantity,
    })),
  };
}
