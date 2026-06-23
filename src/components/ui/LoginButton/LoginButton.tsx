import classes from "./LoginButton.module.scss";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../Button/Button";
import { API_URL } from "@/config/env";

export function LoginButton({ text }: { text: string }) {
  const handleLogin = () => {
    window.location.href = `${API_URL}/auth/google`;
  };

  return (
    <Button bgColor="black" textColor="white" text={text} onClick={handleLogin} ariaLabel="Login Button">
      <FcGoogle className={classes.googleIcon} />
    </Button>
  );
}
