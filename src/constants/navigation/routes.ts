import { slugify } from "@/utils/slugify";

const USER_ACCOUNT = "/user";

export const routes = {
  home: "/",
  contact: "/contact",

  products: "/products",
  category: (category: string) => `/products/${slugify(category)}`,
  product: (category: string, product: string) =>
    `/products/${slugify(category)}/${slugify(product)}`,

  googleCallback: "/auth/google-callback",

  userAccount: USER_ACCOUNT,

  login: `${USER_ACCOUNT}/login`,
  profile: `${USER_ACCOUNT}/profile`,
  myOrders: `${USER_ACCOUNT}/my-orders`,
  myWishlist: `${USER_ACCOUNT}/my-wishlist`,
  shoppingCart: `${USER_ACCOUNT}/shopping-cart`,

  orderPage: (id: string) => `${USER_ACCOUNT}/my-orders/${id}`,

  guestWishlist: "/wishlist",
} as const;
