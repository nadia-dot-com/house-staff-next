import { useMemo } from "react";
import { useProducts } from "./useProducts";
import { keyBy } from "lodash";

export function useItemsByIds(ids: string[]) {
  const { data: products = [], error, isLoading } = useProducts();

  const productsMap = useMemo(() => keyBy(products, "id"), [products]);

  const filteredProducts = useMemo(
    () => ids.map((id) => productsMap[id]).filter(Boolean),
    [ids, productsMap],
  );

  return { productsMap, filteredProducts, error, isLoading };
}
