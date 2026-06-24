import classes from "./CheckoutReview.module.scss";
import { OrderList } from "./CheckoutSections/OrderList/OrderList";
import { Payment } from "./CheckoutSections/Payment/Payment";
import { Subtotal } from "@/components/Subtotal/Subtotal";
import { Shipping } from "./CheckoutSections/Shipping/Shipping";
import { Vat } from "./CheckoutSections/VatSection/VatSection";
import { TotalPrice } from "./CheckoutSections/TotalSection/TotalSection";
import { OrderItem } from "@/types/orderTypes";
import { DeliveryMethod, PaymentMethod } from "@/types/api/options";

export function CheckoutReview({
  order,
  delivery,
  payment,
  total,
  vat,
  updateDelivery,
  updatePayment,
}: {
  order: OrderItem[];
  delivery: DeliveryMethod | null;
  payment: PaymentMethod | null;
  total: number;
  vat: number;
  updateDelivery: (data: DeliveryMethod) => void;
  updatePayment: (data: PaymentMethod) => void;
}) {
  const discount = order.some((el) => el.discount >= 0);

  return (
    <section className={classes.wrapper} aria-labelledby="checkout-section">
      <h2 id="checkout-section" className={classes.title}>
        Order Summary
      </h2>

      <OrderList orderItems={order} />

      <Subtotal arr={order} />

      <Shipping delivery={delivery} updateDelivery={updateDelivery} />

      <Payment payment={payment} updatePayment={updatePayment} />

      <Vat vat={vat} />

      <TotalPrice total={total} discount={discount} />
    </section>
  );
}
