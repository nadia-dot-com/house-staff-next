import { categoriesGroups } from "@/constants/categories";
import { fromSlugToTitle } from "@/utils/fromSlugToTitle";
import { Product } from "@/types/api/product";

export const filterProducts = (
  selectedCategory: string = categoriesGroups.all,
  products: Product[]
) => {
  if (selectedCategory === categoriesGroups.all.toLowerCase()) {
    return products;
  }

  if (selectedCategory === categoriesGroups.sale.toLowerCase()) {
    return products.filter((p) => p.discount > 0);
  }

  const normalized = fromSlugToTitle(selectedCategory);

  return products.filter((p) => {
    return p.categoryName === normalized || p.collectionName === normalized;
  });
};
