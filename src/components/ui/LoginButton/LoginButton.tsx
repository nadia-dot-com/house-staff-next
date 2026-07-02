"use client";

import classes from "./LoginButton.module.scss";
import { FcGoogle } from "react-icons/fc";
import { Button } from "../Button/Button";
import { API_URL } from "@/config/env";

export function LoginButton({ text }: { text: string }) {
  const handleLogin = () => {
    console.log("clicked");
    console.log("API_URL:", API_URL);

    window.location.href = `${process.env.NEXT_API_URL}/auth/google`;
  };

  return (
    <Button
      bgColor="black"
      textColor="white"
      text={text}
      onClick={handleLogin}
      ariaLabel="Login Button"
    >
      <FcGoogle className={classes.googleIcon} />
    </Button>
  );
}
