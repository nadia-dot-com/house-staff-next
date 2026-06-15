import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/config/routes/Routes";
import { useCategoryContext } from "@/context/CategoryContext";
import { slugify } from "@/utils/slugify";
import { compact } from "lodash";
import { useCallback } from "react";

export function useShoppingNavigation() {
  const { setSelectedCategory } = useCategoryContext();
  const navigate = useNavigate();

  const navigateToCategory = useCallback(
    (category: string, name?: string) => {
      const toUrl = compact([
        `/${ROUTES.products}`,
        slugify(category),
        name && slugify(name),
      ]).join("/");
      setSelectedCategory(category);
      navigate(toUrl);
    },
    [setSelectedCategory, navigate],
  );

  return { navigateToCategory };
}
