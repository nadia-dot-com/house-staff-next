import { Category } from '@/types/api/category';
import { API_URL } from '@/config/env';
import { cacheLife, cacheTag } from 'next/cache';
import { CACHE_TAGS } from '@/constants/cache';

export const fetchCategories = async (): Promise<Category[]> => {
   "use cache"
    cacheTag(CACHE_TAGS.categories);
    cacheLife('days');

  const res = await fetch(`${API_URL}/categories`);

  const data = await res.json();
  
  if (!res.ok) {
    throw new Error(
      data?.message ??
      "Failed to fetch categories. An unexpected Error was received from the server.",
    );
  }
  
  return data;
};
