export const QUERY_KEYS = {
  categories: ["categories"],
  collections: ["collections"],
  options: ["options"],
  orders: (token: string | null) => ["orders", token] as const,
  products: ["products"],
  wishlist: (token: string | null) =>["wishlist", token] as const,
  currentUser: (token: string | null) => ["currentUser", token] as const,
} as const;
