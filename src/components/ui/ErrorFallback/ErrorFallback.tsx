import classes from "./ErrorFallback.module.scss";
import Lottie from "lottie-react";
import { Button } from "../Button/Button";
import { ERROR_MESSAGES } from "@/constants/messages";
import { startTransition } from "react";
import { useRouter } from "next/navigation";
import warning from "@/animations/warning.json";

export function ErrorFallback({ error, reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  const handleRetry = () => {
    startTransition(() => {
      reset(); //client
      router.refresh(); //server
    });
  };
  return (
    <div className={classes.wrapper}>
      <div className={classes.errorFallback}>
        <Lottie animationData={warning} loop={false} />
        <div>{process.env.NODE_ENV === "production" ? ERROR_MESSAGES.FALLBACK : error.message}</div>
        <Button
          text="TRY AGAIN!"
          onClick={handleRetry}
          type="reset"
          bgColor="black"
          textColor="white"
        />
      </div>
    </div>
  );
}
