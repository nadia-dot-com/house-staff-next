import classes from "./Subtotal.module.scss";
import { OrderItemResponse } from "@/types/api/order.response";
import { OrderItem } from "@/types/orderTypes";
import { getDiscountSubtotal, getSubtotal } from "@/utils/getSubtotals";

export function Subtotal({ arr }: { arr: OrderItem[] | OrderItemResponse[] }) {
  const discount = arr.find((el) => el.discount > 0);

  return (
    <div className={classes.subtotalSection}>
      Subtotal:
      <div className={classes.price}>
        {discount ? (
          <div>
            <div className={classes.oldPrice}>${getSubtotal(arr).toFixed(2)}</div>
            <div className={classes.discountPrice}>
              ${getDiscountSubtotal(arr).toFixed(2)}
            </div>
          </div>
        ) : (
          <div>${getSubtotal(arr).toFixed(2)}</div>
        )}
      </div>
    </div>
  );
}
