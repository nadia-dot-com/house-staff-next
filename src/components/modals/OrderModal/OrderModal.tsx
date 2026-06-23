import classes from "./OrderModal.module.scss";
import { ShowOrder } from "./ShowOrder/ShowOrder";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleCartUi } from "@/store/slices/cartUiSlice";
import { EmptyCart } from "@/components/ui/EmptyCart/EmptyCart";

export function OrderModal() {
  const isCartOpen = useSelector((state: RootState) => state.cartUi.isCartOpen);
  const dispatch = useDispatch();
  const cart = useSelector((state: RootState) => state.cart);

  const showContent = cart.length > 0;

  return (
      <Modal
        key="cart-modal"
        ariaLabel="Shopping Cart modal"
        className={classes.orderModal}
        toggle={() => dispatch(toggleCartUi())}
        isOpen={isCartOpen}
      >
        {showContent ? <ShowOrder /> : <EmptyCart />}
      </Modal>
  );
}
