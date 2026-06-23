import { routes } from "./routes";
import { MenuLinksProps } from "./types/type";

export const menuLinks: MenuLinksProps[] = [
  { to: routes.home, label: "Home" },
  { to: routes.contact, label: "Contact" },
  { to: routes.products, label: "Products" },
];
