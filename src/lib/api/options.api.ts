import { OptionsResponse } from "@/types/api/options";
import { API_URL } from "@/config/env";
import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/constants/cache";

export const fetchOptions = async (): Promise<OptionsResponse> => {
   "use cache"
    cacheTag(CACHE_TAGS.options);
    cacheLife('weeks');
    
  const res = await fetch(`${API_URL}/options`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch options. An unexpected Error was received from the server.",
    );
  }

  return data;
};
