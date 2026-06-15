import { OrderItem } from "@/types/orderTypes";
import { getDiscountSubtotal } from "./getSubtotals";
import { getVAT } from "./getVAT";
import { roundMoney } from "./roundMoney";

export type Args = {
  cartItems: OrderItem[];
  deliveryPrice: number;
  vatRate: number;
};

export function calculateCheckoutPrice({
  cartItems,
  deliveryPrice,
  vatRate,
}: Args) {
  const subtotal = getDiscountSubtotal(cartItems);

  const totalWithoutVat = subtotal + deliveryPrice;

  const vat = getVAT(totalWithoutVat,vatRate);

  const total = roundMoney(totalWithoutVat + vat);

  return {
    subtotal,
    vat,
    total,
  };
}
