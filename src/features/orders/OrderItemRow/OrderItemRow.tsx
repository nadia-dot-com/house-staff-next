"use client";

import classes from "./OrderItemRow.module.scss";
import { FaTrash } from "react-icons/fa6";
import { QuantityInput } from "@/components/ui/QuantityInput/QuantityInput";
import { OrderItem } from "@/types/orderTypes";
import { getDiscountPrice } from "@/utils/product";
import { cn } from "@/utils/cn";
import { memo, useCallback, useMemo } from "react";
import Link from "next/link";
import { routes } from "@/constants/navigation/routes";
import { useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "@/store/slices/cartSlice";
import { useRouter } from "next/navigation";

export const OrderItemRowVisual = memo(
  ({
    product,
    navigate,
    removeFromCart,
  }: {
    product: OrderItem;
    navigate: () => void;
    removeFromCart: () => void;
  }) => {
    const { id, name, categoryName, img, price, quantity, discount, stockQuantity } = product;

    const dispatch = useDispatch();

    const handleQuantityChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuantity = Number(e.target.value);
        dispatch(updateQuantity({ id, quantity: newQuantity, stock: stockQuantity }));
      },
      [id, stockQuantity, updateQuantity]
    );

    const discountedPrice = useMemo(() => {
      return discount > 0 ? getDiscountPrice(price, discount) : Number(price);
    }, [price, discount]);

    const subtotal = useMemo(() => {
      return (discountedPrice * quantity).toFixed(2);
    }, [discountedPrice, quantity]);

    const formattedPrice = useMemo(() => {
      return discountedPrice.toFixed(2);
    }, [discountedPrice]);
    return (
      <div className={classes.orderItem}>
        <div className={classes.itemInfo}>
          <Link className={classes.itemInfo} href={routes.product(categoryName, name)}>
            <div className={classes.text} onClick={navigate}>
              {name}
            </div>
          </Link>

          <Link className={classes.itemInfo} href={routes.product(categoryName, name)}>
            <img
              src={img}
              alt={name}
              className={classes.img}
              onClick={navigate}
              width="115"
              height="150"
            />
          </Link>
        </div>

        <QuantityInput quantity={quantity} stock={stockQuantity} onChange={handleQuantityChange} />

        <div className={cn(classes.price, discount > 0 && classes.discountPrice)}>
          Price:
          <br />
          <p>${formattedPrice}</p>
        </div>

        <div className={cn(classes.price, discount > 0 && classes.discountPrice)}>
          Subtotal:
          <br />
          <p>${subtotal}</p>
        </div>

        <button onClick={removeFromCart} aria-label={`Remove ${name} from order`}>
          <FaTrash className={classes.removeFromCart} />
        </button>
      </div>
    );
  }
);

export const OrderItemRow = memo(
  ({ product }: { product: OrderItem;}) => {
    const dispatch = useDispatch();
    const router = useRouter();
    const { id, name, categoryName } = product;

    const handleNavigate = useCallback(
      () => router.push(routes.product(categoryName, name)),
      [name, categoryName]
    );

    const handleRemoveFromCart = useCallback(
      () => dispatch(removeFromCart({ id })),
      [removeFromCart, id]
    );

    return (
      <OrderItemRowVisual
        product={product}
        navigate={handleNavigate}
        removeFromCart={handleRemoveFromCart}
      />
    );
  }
);
