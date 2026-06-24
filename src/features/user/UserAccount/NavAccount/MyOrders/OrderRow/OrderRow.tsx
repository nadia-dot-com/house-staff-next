import classes from "./OrderRow.module.scss";
import { OrderResponse } from "@/types/api/order.response";
import { Button } from "@/components/Button/Button";
import { useNavigate } from "react-router-dom";

export function OrderRow({ order }: { order: OrderResponse }) {
  const navigate = useNavigate();

  const formattedDate = new Date(order.createdAt).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const handleViewClick = () => navigate(`${order.id}`);

  return (
    <tr>
      <td className={classes.orderId}>{order.id}</td>
      <td>{formattedDate}</td>
      <td>{order.status}</td>
      <td className={classes.total}>${order.totalPrice}</td>
      <td>
        <Button
          bgColor="#ddd"
          textColor="black"
          text="VIEW"
          onClick={handleViewClick}
          ariaLabel="check order"
        />
      </td>
    </tr>
  );
}
