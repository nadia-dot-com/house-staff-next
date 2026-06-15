import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "@/api/products.api";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useProducts = () => {
  return useQuery({
    queryKey: QUERY_KEYS.products,
    queryFn: fetchProducts,
    staleTime: Infinity,
  });
};
