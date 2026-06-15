import { useQuery } from "@tanstack/react-query";
import { fetchCollections } from "@/api/collections.api";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useCollections = () => {
  return useQuery({
    queryKey: QUERY_KEYS.collections,
    queryFn: fetchCollections,
    staleTime: Infinity,
  });
};
