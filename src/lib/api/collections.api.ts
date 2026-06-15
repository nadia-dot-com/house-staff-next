import { Collection } from "@/types/api/collection";
import { API_URL } from "@/config/env";
import { cacheTag } from "next/cache";

export const fetchCollections = async (): Promise<Collection[]> => {
   "use cache"
    cacheTag();

  const res = await fetch(`${API_URL}/collections`);

  const data = await res.json();

  if (!res.ok) {
    throw new Error(
      data?.message ??
        "Failed to fetch collections. An unexpected Error was received from the server.",
    );
  }

  return data;
};
