import classes from "./ShoppingCart.module.scss";
import { useRef, useState } from "react";
import { useUserContext } from "@/context/UserContext";
import { EmptyCard } from "@/components/EmptyCard/EmptyCard";
import { Cart } from "./Cart/Cart";
import { AddressForm } from "./AddressForm/AddressForm";
import { useCheckoutContext } from "@/context/CheckoutContext";
import { DataProps } from "@/types/checkoutTypes";
import { CheckoutReview } from "./CheckoutReview/CheckoutReview";
import { ShoppingCartNav } from "./ShoppingCartNav/ShoppingCartNav";
import { CheckoutButtons } from "./CheckoutButtons/CheckoutButtons";
import { useShoppingNavigation } from "@/hooks/useShoppingNavigation";
import { categoriesGroups } from "@/data/categories";
import { useCheckoutPrice } from "@/hooks/useCheckoutPrice";
import { useCreateOrder } from "@/hooks/orders/useCreateOrder";
import { buildOrderPayload } from "@/utils/buildOrderPayload";
import { OrderError } from "./OrderError/OrderError";
import { ERROR_MESSAGES } from "@/constants/messages";
import { OrderSuccess } from "./OrderSuccess/OrderSuccess";
import { useCartContext } from "@/context/CartContext";
import { CHECKOUT_STEP } from "@/constants/checkout";
import { PageTransition } from "@/components/PageTransition/PageTransition";
import { AnimatePresence } from "motion/react";

export default function ShoppingCart() {
  const { cartItems, clearCart } = useCartContext();
  const { user } = useUserContext();
  const {
    shippingData,
    delivery,
    payment,
    updateItems,
    updateData,
    updateDelivery,
    updatePayment,
    resetCheckout,
  } = useCheckoutContext();
  const [step, setStep] = useState(CHECKOUT_STEP.CART_OVERVIEW);
  const addressFormRef = useRef<HTMLFormElement>(null);
  const { navigateToCategory } = useShoppingNavigation();
  const [error, setError] = useState<Error | null>(null);

  const { mutate: createOrder, isPending } = useCreateOrder(
    () => {
      clearCart();
      resetCheckout();
      setStep(CHECKOUT_STEP.ORDER_COMPLETE);
    },
    (err) => {
      setError(err);
      setStep(CHECKOUT_STEP.ORDER_COMPLETE);
    },
  );

  const country = shippingData?.country ?? null;
  const { vat, total } = useCheckoutPrice({
    cartItems,
    country,
    delivery,
  });

  const handleAddressForm = (data: DataProps) => {
    updateData(data);
    setStep(CHECKOUT_STEP.ORDER_REVIEW);
  };

  if (!user) return null;

  const handlePlaceOrder = () => {
    if (isPending || !shippingData || !delivery || !payment) return;

    setError(null);

    const payload = buildOrderPayload({
      items: cartItems,
      shippingAddress: shippingData,
      delivery,
      payment,
      total,
    });

    createOrder(payload);
  };

  const nextStep = () => {
    if (step === CHECKOUT_STEP.CART_OVERVIEW) {
      updateItems(cartItems);
    }

    if (step === CHECKOUT_STEP.SHIPPING_ADDRESS) {
      const form = addressFormRef.current;
      if (!form) return;

      if (!form.reportValidity()) {
        return;
      }

      form.requestSubmit();
      return;
    }

    setStep((s) => s + 1);
  };

  const prevStep = () => setStep((s) => s - 1);

  const onError = () => setStep(CHECKOUT_STEP.CART_OVERVIEW);

  const onContinue = () => navigateToCategory(categoriesGroups.all);

  const stepsRenderers = {
    [CHECKOUT_STEP.CART_OVERVIEW]: () => <Cart cartItems={cartItems} />,
    [CHECKOUT_STEP.SHIPPING_ADDRESS]: () => (
      <AddressForm formRef={addressFormRef} onSubmit={handleAddressForm} />
    ),
    [CHECKOUT_STEP.ORDER_REVIEW]: () => (
      <CheckoutReview
        order={cartItems}
        delivery={delivery}
        payment={payment}
        vat={vat}
        total={total}
        updatePayment={updatePayment}
        updateDelivery={updateDelivery}
      />
    ),
  };

  return (
    <div className={classes.shoppingCart}>
      {step === CHECKOUT_STEP.ORDER_COMPLETE ? (
        <PageTransition key="complete">
          <div>
            <ShoppingCartNav step={step} />
            <div className={classes.orderContent}>
              {error ? (
                <OrderError
                  message={`${ERROR_MESSAGES.GENERIC} ${ERROR_MESSAGES.TRY_AGAIN}`}
                />
              ) : (
                <OrderSuccess />
              )}
            </div>
          </div>
        </PageTransition>
      ) : cartItems.length === 0 ? (
        <PageTransition key="empty">
            <EmptyCard />
        </PageTransition>
      ) : (
        <div>
          <ShoppingCartNav step={step} />
          <AnimatePresence mode="wait">
            <PageTransition key={step}>
              <div>{stepsRenderers[step]()}</div>
            </PageTransition>
          </AnimatePresence>
        </div>
      )}

      <CheckoutButtons
        error={error}
        onError={onError}
        step={step}
        orderLength={cartItems.length}
        onNext={nextStep}
        onPrev={prevStep}
        onContinue={onContinue}
        onPost={handlePlaceOrder}
        disabled={isPending}
      />
    </div>
  );
}
