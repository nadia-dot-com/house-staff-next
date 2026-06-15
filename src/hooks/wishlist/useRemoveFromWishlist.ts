import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "@/context/UserContext";
import { fetchDeleteFromWiszlist } from "@/api/wishlist.api";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useRemoveFromWishlist = () => {
  const { token } = useUserContext();
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (productId: string) => {
      if (!token) {
        throw new Error("No token");
      }

      return fetchDeleteFromWiszlist(productId, token);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: QUERY_KEYS.wishlist(token) }),
    onError: (err) => console.error(err.message ?? "Failed to remove item from wishlist"),
  });
};
