import { ProductsView } from "@/features/products/ProductsView/ProductsView";
import { fetchProducts } from "@/lib/api/products.api";

export default async function Products() {
  const products = await fetchProducts();
  return <ProductsView products={products} />;
}
