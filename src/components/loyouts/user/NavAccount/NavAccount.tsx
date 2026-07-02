'use client'

import classes from "./NavAccount.module.scss";
import { userLinks } from "@/constants/navigation/userLinks";
import Link from "next/link";
import { logout } from "@/app/actions";
import { useDispatch } from "react-redux";
import { logoutClient } from "@/store/slices/userSlice";
import { useRouter } from "next/navigation";
import { Logout } from "../Logout/Logout";

export function NavAccount() {
  const dispatch = useDispatch();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    dispatch(logoutClient());
    router.refresh();
  };

  return (
    <nav aria-label="User account navigation">
      <ul className={classes.nav}>
        {userLinks.map((link) => (
          <li key={link.to}>
            <Link href={link.to}>{link.label}</Link>
          </li>
        ))}

        <li key="logout">
          <Logout onClick={handleLogout} />
        </li>
      </ul>
    </nav>
  );
}
