import { ProductDetails } from "@/features/products/product/ProductDetails/ProductDetails";
import classes from "./page.module.scss";
import { fetchProducts } from "@/lib/api/products.api";
import { slugify } from "@/utils/slugify";
import { notFound } from "next/navigation";

export default async function Product({ params }: { params: Promise<{ productName: string }> }) {
  const { productName } = await params;
  const product = (await fetchProducts()).find((i) => slugify(i.name) === productName);

  if (!product) {
    notFound();
  }

  return (
    <div className={classes.productPage}>{product && <ProductDetails product={product} />}</div>
  );
}
