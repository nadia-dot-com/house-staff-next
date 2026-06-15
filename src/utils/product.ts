import { Product } from "@/types/api/product";

export const isProductOnSale = (product: Product): boolean =>
  product.discount > 0;

export const isProductInStock = (stockQuantity: number): boolean =>
  stockQuantity > 0;

export const getSafeQuantity = (requested: number, product: Product): number =>
  Math.min(requested, product.stockQuantity);

export const getDiscountPrice = (price: number, discount: number): number =>
  price - (discount * price) / 100;
