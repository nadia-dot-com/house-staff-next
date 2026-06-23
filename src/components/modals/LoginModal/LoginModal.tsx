import classes from "./LoginModal.module.scss";
import { LoginButton } from "@/components/ui/LoginButton/LoginButton";
import { Modal } from "../Modal/Modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleUserUi } from "@/store/slices/userUiSlice";
import { RootState } from "@/store/store";

export function LoginModal() {
  const dispatch = useDispatch();
  const isLoginOpen = useSelector((state: RootState) => state.userUi.isLoginOpen)

  return (
    <Modal
      key="login-modal"
      ariaLabel="Login"
      toggle={() =>dispatch(toggleUserUi())}
      className={classes.loginModal}
      isOpen={isLoginOpen}
    >
      <h2>Log In / Sign In</h2>
      <LoginButton text="Continue with Google" />
    </Modal>
  );
}
