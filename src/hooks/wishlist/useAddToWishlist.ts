import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useUserContext } from "@/context/UserContext";
import { addToWishlist } from "@/api/wishlist.api";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useAddToWishlist = () => {
  const { token } = useUserContext();
  const qc = useQueryClient();

  return useMutation({
    mutationFn: async (productsIds: string[]) => {
      if (!token) {
        throw new Error("No token");
      }

     return addToWishlist(productsIds, token);
    },
    onSuccess: () => qc.invalidateQueries({ queryKey: QUERY_KEYS.wishlist(token) }),
  });
};
