import { categoriesGroups } from "@/constants/categories";
import { ProductsView } from "@/features/products/ProductsView/ProductsView";
import { fetchCategories } from "@/lib/api/categories.api";
import { fetchCollections } from "@/lib/api/collections.api";
import { fetchProducts } from "@/lib/api/products.api";
import { filterProducts } from "@/utils/filterProducts";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";

export default async function Products({ params }: { params: Promise<{ category: string }> }) {
  const [categories, collections] = await Promise.all([
    await fetchCategories(),
    await fetchCollections(),
  ]);

  const validSlugs = [
    ...categories.map((c) => slugify(c.name)),
    ...collections.map((c) => slugify(c.name)),
    categoriesGroups.all,
  ];
  const { category } = await params;

  if (!validSlugs.includes(category)) {
    notFound();
  }

  const products = await fetchProducts();
  const filteredProducts = filterProducts(category, products);

  return <ProductsView products={filteredProducts} />;
}
