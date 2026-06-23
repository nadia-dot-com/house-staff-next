import classes from "./OrderQuantity.module.scss";
import { RootState } from "@/store/store";
import { sumBy } from "lodash";
import { useSelector } from "react-redux";

export function OrderQuantity() {
  const cart = useSelector((state: RootState) => state.cart)

  const quantity = sumBy(cart, "quantity");

  return <div role="status" className={classes.orderQuantity} aria-label={`${quantity} items in the shopping cart now`}>{quantity}</div>;
}
