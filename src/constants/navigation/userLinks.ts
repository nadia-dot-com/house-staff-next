import { routes } from "./routes";
import { MenuLinksProps } from "./types/type";

export const userLinks: MenuLinksProps[] = [
  { to: routes.profile, label: "My Profile" },
  { to: routes.shoppingCart, label: "Shopping Cart" },
  { to: routes.myOrders, label: "My Orders" },
  { to: routes.myWishlist, label: "My Wishlist" },
];
