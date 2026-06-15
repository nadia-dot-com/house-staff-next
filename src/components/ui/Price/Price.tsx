import classes from "./Price.module.scss";
import { memo } from "react";
import { getDiscountPrice } from "@/utils/product";

export const Price = memo (
  ({ price, discount }: { price: number; discount: number }) => {
    return (
      <div className={classes.price}>
        {discount <= 0 ? (
          <div>${Number(price).toFixed(2)}</div>
        ) : (
          <div className={classes.discountContainer}>
            <div className={classes.discountPrice} aria-label="Discount price">
              ${getDiscountPrice(price, discount).toFixed(2)}
            </div>
            <div className={classes.oldPrice} aria-label="Original price">${Number(price).toFixed(2)}</div>
          </div>
        )}
      </div>
    );
  },
);