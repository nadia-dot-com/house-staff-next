import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "@/api/user.api";
import { UserData } from "@/types/userTypes";
import { QUERY_KEYS } from "@/api/queryKeys";

const FIVE_MINUTES = 1000 * 60 * 5;

export const useCurrentUser = (token: string | null) => {
  return useQuery<UserData>({
    queryKey: QUERY_KEYS.currentUser(token),
    queryFn: () => fetchUser(token!),
    enabled: !!token,
    staleTime: FIVE_MINUTES,
    retry: false,
  });
};
