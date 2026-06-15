import { slugify } from "@/utils/slugify"

export const routes = {
  home: "/",
  contact: "/contacts",

  products: "/products",
  category: (category: string) => `/products/${slugify(category)}`,
  product: (category: string, product: string) => `/products/${slugify(category)}/${slugify(product)}`,

  googleCallback: "/auth/google-callback",
  userAccount: "/user-account",
  profile: "/profile",
  myOrders: "/my-orders",
  orderPage: (id: string) => `my-orders/${id}`,
  shoppingCart: "/shopping-cart",
  myWishlist: "/my-wishlist",

  guestWishlist: "/wishlist",
} as const;