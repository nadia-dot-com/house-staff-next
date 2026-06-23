import classes from "./EmptyCart.module.scss";
import { FaCartShopping } from "react-icons/fa6";

export function EmptyCart() {
  return (
    <h2 className={classes.emptyCart}>
      No products in the cart
      <FaCartShopping className={classes.shopingIcon} />
    </h2>
  );
}
