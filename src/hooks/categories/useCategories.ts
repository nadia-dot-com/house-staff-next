import { useQuery } from "@tanstack/react-query";
import { fetchCategories } from "@/api/categories.api";
import { Category } from "@/types/api/category";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useCategories = () => {
  return useQuery<Category[], Error>({
    queryKey: QUERY_KEYS.categories,
    queryFn: fetchCategories,
    staleTime: Infinity,
  });
};
