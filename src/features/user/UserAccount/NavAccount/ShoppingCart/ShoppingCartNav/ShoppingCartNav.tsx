import classes from "./ShoppingCartNav.module.scss";
import { CHECKOUT_STEP } from "@/constants/checkout";
import { cn } from "@/utils/cn";

export function ShoppingCartNav({ step }: { step: number }) {
  return (
    <aside>
      <ol className={classes.steps}>
        <li
          className={cn(
            classes.stepSpan,
            step === CHECKOUT_STEP.CART_OVERVIEW && classes.activeStep,
          )}
        >
          Cart
          <svg
            width="30"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M8 4l8 8-8 8" />
          </svg>
        </li>
        <li
          className={cn(
            classes.stepSpan,
            step === CHECKOUT_STEP.SHIPPING_ADDRESS && classes.activeStep,
          )}
        >
          Address
          <svg
            width="30"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M8 4l8 8-8 8" />
          </svg>
        </li>
        <li
          className={cn(
            classes.stepSpan,
            step === CHECKOUT_STEP.ORDER_REVIEW && classes.activeStep,
          )}
        >
          Delivery / Payment
          <svg
            width="30"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
          >
            <path d="M8 4l8 8-8 8" />
          </svg>
        </li>
        <li
          className={cn(
            classes.stepSpan,
            step === CHECKOUT_STEP.ORDER_COMPLETE && classes.activeStep,
          )}
        >
          Complete
        </li>
      </ol>
    </aside>
  );
}
