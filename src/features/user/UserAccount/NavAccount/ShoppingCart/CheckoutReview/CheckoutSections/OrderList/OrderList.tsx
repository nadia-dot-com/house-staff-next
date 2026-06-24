import classes from "./OrderList.module.scss";
import { Price } from "@/components/Price/Price";
import { OrderItemResponse } from "@/types/api/order.response";
import { OrderItem } from "@/types/orderTypes";

export function OrderList({
  orderItems,
}: {
  orderItems: OrderItem[] | OrderItemResponse[];
}) {
  return (
    <div className={classes.orderListSection}>
      <div className={classes.title}>
        <div>Product</div>
        <div>Total</div>
      </div>

      <ul className={classes.orderList}>
        {orderItems.map((item) => {
          const productName = "product" in item ? item.product.name : item.name;
          return (
            <li className={classes.orderItem} key={item.id}>
              <p>
                {productName} x {item.quantity}
              </p>
              <Price price={item.price} discount={item.discount}/>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
