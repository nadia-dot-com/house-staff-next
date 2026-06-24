import classes from "./MyOrders.module.scss";
import { useOrders } from "@/hooks/orders/useOrders";
import { DataLoader } from "@/components/DataLoader/DataLoader";
import { OrderRow } from "./OrderRow/OrderRow";

export default function MyOrders() {
  const { data: orders, isLoading, error } = useOrders();

  const ordersUi = orders ? [...orders].reverse() : [];

  return (
    <DataLoader loading={isLoading} loaded={!!orders} error={error}>
      <div className={classes.tableContainer}>
        <table className={classes.ordersTable}>
          <thead>
            <tr>
              <th>Order</th>
              <th>Date</th>
              <th>Status</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {ordersUi.map((order) => (
              <OrderRow key={order.id} order={order} />
            ))}
          </tbody>
        </table>
      </div>
    </DataLoader>
  );
}
