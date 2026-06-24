import classes from "./Cart.module.scss";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { OrderItemRow } from "@/components/OrderItemRow/OrderItemRow";
import { useItemsByIds } from "@/hooks/products/useItemByIds";
import { OrderItem } from "@/types/orderTypes";

export function Cart({ cartItems }: { cartItems: OrderItem[] }) {
  const {
    productsMap,
    filteredProducts: cartProducts,
    isLoading,
    error,
  } = useItemsByIds(cartItems.map((i) => i.id));

  return (
    <DataLoader loading={isLoading} loaded={!!cartProducts} error={error}>
      {cartProducts && (
        <ul className={classes.orderList}>
          {cartItems.map((cartItem) => {
            const stockQuantity =
              productsMap[cartItem.id]?.stockQuantity ?? 0;
            return (
              <li className={classes.orderItem} key={cartItem.id}>
                <OrderItemRow
                  key={cartItem.id}
                  product={cartItem}
                  stockQuantity={stockQuantity}
                />
              </li>
            );
          })}
        </ul>
      )}
    </DataLoader>
  );
}
