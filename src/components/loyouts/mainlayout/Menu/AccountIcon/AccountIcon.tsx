import classes from "./AccountIcon.module.scss";
import { RiAccountCircleFill } from "react-icons/ri";
import { cn } from "@/utils/cn";
import { routes } from "@/constants/navigation/routes";
import { usePathname, useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { toggleUserUi } from "@/store/slices/userUiSlice";
import { UserData } from "@/types/userTypes";

export function AccountIcon({ user }: { user: UserData | null }) {
  const dispatch = useDispatch();
  const userUi = useSelector((state: RootState) => state.userUi);

  const pathname = usePathname();
  const isAccountPage = pathname.includes(routes.userAccount);
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    e.stopPropagation();

    if (!user) {
      dispatch(toggleUserUi());
    } else {
      router.push(routes.userAccount);
    }
  };

  return (
    <button onClick={handleClick} aria-label={user ? "My Account" : "Login"}>
      <RiAccountCircleFill
        aria-hidden="true"
        className={cn(classes.accountIcon, (userUi || isAccountPage) && classes.active)}
      />
    </button>
  );
}
