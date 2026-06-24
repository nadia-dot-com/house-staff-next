import { LoginButton } from "@/components/ui/LoginButton/LoginButton";
import classes from "./MakeLogin.module.scss";

export function MakeLogin() {
  return (
    <section className={classes.makeLogin}>
      <h3 className={classes.title}>Hi there! Sign in / Log in to continue.</h3>
      <LoginButton text="Continue with Google" />
    </section>
  );
}
