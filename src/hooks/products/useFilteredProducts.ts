import { categoriesGroups } from "@/data/categories";
import { fromSlugToTitle } from "@/utils/fromSlugToTitle";
import { useProducts } from "./useProducts";
import { useMemo } from "react";

export const useFilteredProducts = (
  selectedCategory: string = categoriesGroups.all,
) => {
  const { data: products = [], isLoading, error } = useProducts();

  const filtered = useMemo(() => {
    if (selectedCategory === categoriesGroups.all) {
      return products;
    }

    if (selectedCategory === categoriesGroups.sale) {
      return products.filter((p) => p.discount > 0);
    }

    const normalized = fromSlugToTitle(selectedCategory);

    return products.filter((p) => {
      return p.categoryName === normalized || p.collectionName === normalized;
    });
  }, [products, selectedCategory]);

  return {
    products: filtered,
    isLoading,
    error,
  };
};
