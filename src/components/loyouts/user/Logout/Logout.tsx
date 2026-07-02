import { IoIosLogOut } from "react-icons/io";
import classes from "./Logout.module.scss";

export function Logout({ onClick }: { onClick: () => void }) {
  return (
    <button className={classes.logout} onClick={onClick} type="button">
      Logout <IoIosLogOut aria-hidden="true" className={classes.icon} />
    </button>
  );
}
