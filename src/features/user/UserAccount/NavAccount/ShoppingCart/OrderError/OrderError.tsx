import classes from "./OrderError.module.scss";
import Lottie from "lottie-react";
import warning from "@/animations/warning.json";

export function OrderError({ message }: { message: string }) {
  return (
    <div className={classes.orderError} role="alert">
      <Lottie animationData={warning} loop={false} aria-hidden="true"/>
      <h3 className={classes.title}>{message}</h3>
    </div>
  );
}
