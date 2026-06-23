import classes from "./LoadingSpinner.module.scss";
import Lottie from "lottie-react";
import loading from "@/animations/loading.json";

export function LoadingSpinner() {
  return (
    <div className={classes.loadingSpinner} role="status" aria-label="loading">
      <Lottie animationData={loading} style={{ width: "100%", maxWidth: 400, height: "auto" }} />
    </div>
  );
}
