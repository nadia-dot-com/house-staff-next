import classes from "./layout.module.css";
import { ProductNav } from "@/components/loyouts/products/ProductNav/ProductNav";
import { fetchCategories } from "@/lib/api/categories.api";
import { fetchCollections } from "@/lib/api/collections.api";
import { AnimatePresence } from "motion/react";
import { ReactNode } from "react";

export default async function Layout({ children }: { children: ReactNode }) {
  const [categories, collections] = await Promise.all([
    await fetchCategories(),
    await fetchCollections(),
  ]);

  return (
    <div className={classes.layout}>
      <ProductNav categories={categories} collections={collections} />
      <AnimatePresence>{children}</AnimatePresence>
    </div>
  );
}
