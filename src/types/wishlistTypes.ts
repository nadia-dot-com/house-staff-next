export type WishlistValue = {
  guestWishlist: string[];
  toggleGuestWishlist: (productId: string) => void;
  cleanGuestWishlist: () => void;
};
