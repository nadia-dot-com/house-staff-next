import classes from './CheckoutButtons.module.scss';
import { Button } from '@/components/Button/Button';
import { CHECKOUT_STEP } from '@/constants/checkout';

type CheckoutButtonsProps = {
  step: number;
  orderLength: number;
  error: Error | null;
  onNext: () => void;
  onPrev: () => void;
  onContinue: () => void;
  onError: () => void;
  onPost: () => void;
  disabled: boolean;
}

export function CheckoutButtons({ step, orderLength, onNext, onPrev, onContinue, error, onError, disabled, onPost }: CheckoutButtonsProps) {
  const isFinal = step === CHECKOUT_STEP.ORDER_COMPLETE;
  const isEmpty = orderLength === 0;

  if (isEmpty || isFinal) {
    return (
      <div className={classes.buttons}>
        <Button
          bgColor="black"
          textColor="white"
          text={error ? "TRY AGAIN" : "CONTINUE SHOPPING"}
          onClick={error ? onError : onContinue}
          disabled={disabled}
        />
      </div>
    );
  }

  return (
    <div className={classes.buttons}>
      <Button
        bgColor="black"
        textColor="white"
        text="BACK"
        onClick={onPrev}
        disabled={step === CHECKOUT_STEP.CART_OVERVIEW || disabled}
      />
      <Button
        bgColor="black"
        textColor="white"
        text={step === CHECKOUT_STEP.ORDER_REVIEW ? "PLACE ORDER" : "NEXT"}
        onClick={() => {
          if (step === CHECKOUT_STEP.ORDER_REVIEW) {
            onPost();
          } else {
            onNext();
          }
        }}
        disabled={disabled}
      />
    </div>
  );
}