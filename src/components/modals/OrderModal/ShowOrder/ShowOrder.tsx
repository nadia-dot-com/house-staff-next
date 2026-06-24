"use client";

import classes from "./ShowOrder.module.scss";
import { Button } from "@/components/ui/Button/Button";
import { OrderItemRow } from "@/features/orders/OrderItemRow/OrderItemRow";
import { Subtotal } from "@/components/ui/Subtotal/Subtotal";
import { LoginButton } from "@/components/ui/LoginButton/LoginButton";
import { useRouter } from "next/navigation";
import { routes } from "@/constants/navigation/routes";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleCartUi } from "@/store/slices/cartUiSlice";
import { clearCart } from "@/store/slices/cartSlice";

export function ShowOrder() {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart);
  const { user } = useSelector((state: RootState) => state.user);
  const router = useRouter();

  const handleOrder = () => {
    router.push(routes.shoppingCart);
    dispatch(toggleCartUi());
  };

  return (
    <div className={classes.showOrderWrapper}>
      <div className={classes.container}>
        <h2>Cart ({cartItems.length})</h2>

        <button className={classes.clearButton} onClick={() => dispatch(clearCart())}>
          CLEAR
        </button>
      </div>

      <div className={classes.orderList}>
        {cartItems.map((cartItem) => {
          return <OrderItemRow key={cartItem.id} product={cartItem} />;
        })}
      </div>

      <div className={classes.subtotal}>
        <Subtotal arr={cartItems} />
      </div>

      {user ? (
        <Button
          bgColor="black"
          textColor="white"
          text="COMPLETE ORDER"
          onClick={handleOrder}
          ariaLabel="complete order"
        />
      ) : (
        <LoginButton text="Login with GOOGLE & complete a order" />
      )}
    </div>
  );
}
