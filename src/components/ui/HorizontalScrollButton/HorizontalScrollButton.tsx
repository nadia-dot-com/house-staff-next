import classes from "./HorizontalScrollButton.module.scss";
import { cn } from "@/utils/cn";

type HorizontalScrollButton = {
  onClick?: () => void;
  direction: "left" | "right";
  className?: string;
  disabled?: boolean;
};

export function HorizontalScrollButton({
  onClick,
  direction,
  className,
  disabled,
}: HorizontalScrollButton) {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={cn(
        classes.horizontalScrollButton,
        direction === "left" ? classes.left : classes.right,
        className,
      )}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
    >
      <svg className={classes.icon} viewBox="0 0 24 24">
        {direction === "left" ? (
          <path d="M16 4l-8 8 8 8" />
        ) : (
          <path d="M8 4l8 8-8 8" />
        )}
      </svg>
    </button>
  );
}
