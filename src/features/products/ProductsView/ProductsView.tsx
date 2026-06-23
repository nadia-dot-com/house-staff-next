import classes from "./ProductsView.module.scss";
import { Product } from "@/types/api/product";
import { ProductItem } from "../ProductItem/ProductItem";

export function ProductsView({ products }: { products: Product[] }) {
  return (
    <div className={classes.productsContainer}>
      {products.length === 0 ? (
        <div className={classes.empty}>No products in the moment</div>
      ) : (
        <div className={classes.products}>
          {products.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}
