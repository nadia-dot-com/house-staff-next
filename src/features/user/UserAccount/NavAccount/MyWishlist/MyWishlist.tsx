import { WishlistItems } from "@/components/wishlist/WishlistItems/WishlistItems";
import { useWishlistQuery } from "@/hooks/wishlist/useWishlistQuery";

export default function MyWishlist() {
  const { data: wishlist = [], error, isLoading } = useWishlistQuery();

  return (
    <div>
      <WishlistItems list={wishlist} isLoading={isLoading} error={error} />
    </div>
  );
}
