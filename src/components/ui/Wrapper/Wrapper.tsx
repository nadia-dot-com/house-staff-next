import classes from "./Wrapper.module.scss";
import type { ReactNode } from "react";

export function Wrapper({ children }: { children: ReactNode }) {
  return <div className={classes.wrapper}>{children}</div>;
}
