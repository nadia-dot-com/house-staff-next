import { Presentation } from "@/features/home/components/Presentation/Presentation";
import classes from "./page.module.scss";
import { PageTransition } from "@/components/transitions/PageTransition";
import { PopularCategories } from "@/features/home/components/PopularCategories/PopularCategories";
import { Collections } from "@/features/home/components/Collection/Collections";
import { Sale } from "@/features/home/components/Sale/Sale";
import { OurShowroom } from "@/features/home/components/OurShowroom/OurShowroom";
import { fetchCategories } from "@/lib/api/categories.api";
import { fetchCollections } from "@/lib/api/collections.api";
import { fetchProducts } from "@/lib/api/products.api";

export default async function Home() {
  const [categories, collections, products] = await Promise.all([
    await fetchCategories(),
    await fetchCollections(),
    await fetchProducts(),
  ]);

  return (
    <div className={classes.mainPageContainer}>
      <Presentation />
      <PageTransition>
        <PopularCategories categories={categories} />
        <Collections collections={collections} products={products} />
        <Sale />
        <OurShowroom />
      </PageTransition>
    </div>
  );
}
