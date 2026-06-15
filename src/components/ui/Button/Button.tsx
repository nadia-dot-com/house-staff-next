import classes from "./Button.module.scss";
import { CSSProperties, ReactNode } from "react";

type Button = {
  bgColor: string;
  textColor: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (...args: any[]) => void;
  children?: ReactNode;
  disabled?: boolean;
  ariaLabel?: string;
};

export function Button({
  bgColor,
  textColor,
  text,
  type,
  onClick,
  children,
  disabled,
  ariaLabel,
}: Button) {
  const style: CSSProperties = {
    backgroundColor: bgColor,
    color: textColor,
  };

  return (
    <button
      className={classes.button}
      style={style}
      onClick={onClick}
      type={type}
      disabled={disabled}
      aria-label={!ariaLabel ? text : ariaLabel}
    >
      {children}
      {text}
    </button>
  );
}
