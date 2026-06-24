import { Collection } from "@/types/api/collection";
import { API_URL } from "@/config/env";
import { cacheLife, cacheTag } from "next/cache";
import { CACHE_TAGS } from "@/constants/cache";

export const fetchCollections = async (): Promise<Collection[]> => {
  "use cache";
  cacheTag(CACHE_TAGS.collections);
  cacheLife("days");

  const res = await fetch(`${API_URL}/collections`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch collections. An unexpected Error was received from the server."
    );
  }

  return data;
};
