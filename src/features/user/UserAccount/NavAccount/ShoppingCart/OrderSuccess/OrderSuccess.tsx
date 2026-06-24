import classes from "./OrderSuccess.module.scss";
import Lottie from "lottie-react";
import success from "@/animations/completed.json";

export function OrderSuccess() {
  return (
    <div className={classes.orderSuccess} role="status" aria-live="polite">
      <Lottie animationData={success} loop={false} aria-hidden="true"/>
      <h3 className={classes.title}>Order Completed</h3>
    </div>
  );
}
