"use client";

import classes from "./ProductNav.module.scss";
import { categoriesGroups } from "@/constants/categories";
import { routes } from "@/constants/navigation/routes";
import { useHover } from "@/hooks/useHover";
import { Category } from "@/types/api/category";
import { Collection } from "@/types/api/collection";
import { cn } from "@/utils/cn";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";

export function ProductNav({
  categories = [],
  collections = [],
}: {
  categories?: Category[];
  collections?: Collection[];
}) {
  const [isOpen, setIsOpen] = useState(false);
  const hoverRef = useHover(
    () => setIsOpen(true),
    () => setIsOpen(false)
  );

  const categoriesNav = new Set([
    categoriesGroups.all,
    categoriesGroups.sale,
    ...(categories || []).map((i) => i.name),
    ...(collections || []).map((i) => i.name),
  ]);

  return (
    <aside>
      <ul className={classes.desktopCategories}>
        {Array.from(categoriesNav).map((category) => (
          <li
            className={cn(
              classes.category,
              category === categoriesGroups.sale && classes.saleCategory
            )}
            key={category}
          >
            <Link href={routes.category(category)}>{category}</Link>
          </li>
        ))}
      </ul>

      <ul className={classes.mobileCategories} ref={hoverRef}>
        <li className={classes.categoryButton} key="menuButton">
          <button onClick={() => setIsOpen((prev) => !prev)}>Categories</button>
        </li>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              className={classes.mobileDropdownList}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              style={{ overflow: "hidden" }}
            >
              {Array.from(categoriesNav).map((category) => (
                <li
                  className={cn(
                    classes.mobileCategory,
                    category === categoriesGroups.sale && classes.saleCategory
                  )}
                  key={category}
                >
                  <Link href={routes.category(category)} onClick={() => setIsOpen(false)}>
                    {category}
                  </Link>
                </li>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </ul>
    </aside>
  );
}
