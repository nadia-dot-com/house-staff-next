"use client";

import { inter } from "./fonts/fonts";
import classes from "./global-error.module.scss";
import Lottie from "lottie-react";
import warning from "@/animations/warning.json";
import { ERROR_MESSAGES } from "@/constants/messages";
import { Button } from "@/components/ui/Button/Button";

export default function Error({
  error,
  unstable_retry,
}: {
  error: Error & { digest?: string };
  unstable_retry: () => void;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <div className={classes.wrapper}>
          <div className={classes.errorFallback}>
            <Lottie animationData={warning} loop={false} />
            <div className={classes.errorMessage}>
              {process.env.NODE_ENV === "production" ? ERROR_MESSAGES.FALLBACK : error.message}
            </div>

            {!(process.env.NODE_ENV === "production") && error.digest && (
              <div className={classes.errorMessage}>{error.digest}</div>
            )}

            <Button
              text="TRY AGAIN!"
              onClick={() => unstable_retry()}
              type="button"
              textColor="white"
              bgColor="black"
            />
          </div>
        </div>
      </body>
    </html>
  );
}
