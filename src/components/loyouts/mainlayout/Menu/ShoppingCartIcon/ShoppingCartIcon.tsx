'use client'

import classes from "./ShoppingCartIcon.module.scss";
import { FaCartShopping } from "react-icons/fa6";
import { cn } from "@/utils/cn";
import { OrderQuantity } from "./OrderQuantity/OrderQuantity";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleCartUi } from "@/store/slices/cartUiSlice";

export function ShoppingCartIcon({ active }: { active: boolean }) {
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    dispatch(toggleCartUi());
  };

  return (
    <button onClick={handleClick} aria-label="Open shopping cart">
      <FaCartShopping
        className={cn(classes.shoppingCartIcon, active && classes.active)}
      />
      {cart.length > 0 && <OrderQuantity />}
    </button>
  );
}
