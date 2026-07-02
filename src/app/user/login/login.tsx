import { LoginButton } from "@/components/ui/LoginButton/LoginButton";
import classes from "./login.module.scss";

export default function MakeLogin() {
  return (
    <section className={classes.makeLogin}>
      <h3 className={classes.title}>Hi there! Sign in / Log in to continue.</h3>
      <LoginButton text="Continue with Google" />
    </section>
  );
}
