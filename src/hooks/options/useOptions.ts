import { useQuery } from "@tanstack/react-query";
import { fetchOptions } from "@/api/options.api";
import { QUERY_KEYS } from "@/api/queryKeys";

export const useOptions = () => {
  return useQuery({
    queryKey: QUERY_KEYS.options,
    queryFn: fetchOptions,
    staleTime: Infinity,
  });
};
