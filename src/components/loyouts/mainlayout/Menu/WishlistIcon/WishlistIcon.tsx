import classes from "./WishlistIcon.module.scss";
import { IoIosHeart } from "react-icons/io";
import Link from "next/link";
import { routes } from "@/constants/navigation/routes";

export function WishlistIcon() {
  return (
    <Link href={routes.guestWishlist} aria-label="View wishlist">
      <IoIosHeart className={classes.wishlistIcon} aria-hidden="true" />
    </Link>
  );
}
