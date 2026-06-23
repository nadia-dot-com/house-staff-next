"use client";

import classes from "./ProductItem.module.scss";
import { cn } from "@/utils/cn";
import { SaleLabel } from "@/components/ui/SaleLabel/SaleLabel";
import { useWishlist } from "@/hooks/wishlist/useWishlist";
import { checkProductDate } from "@/utils/checkProductDate";
import { NewProductLabel } from "@/components/ui/NewProductLabel/NewProductLabel";
import { Product } from "@/types/api/product";
import { isProductInStock, isProductOnSale } from "@/utils/product";
import { memo, useCallback } from "react";
import { WishlistButton } from "@/components/ui/WishlistButton/WishlistButton";
import { Price } from "@/components/ui/Price/Price";
import { motion } from "motion/react";
import Link from "next/link";
import { routes } from "@/constants/navigation/routes";
import Image from "next/image";
import { addToCart } from "@/store/slices/cartSlice";
import { useDispatch } from "react-redux";

type ProductItemVisualProps = {
  product: Product;
  addToCart: () => void;
  // liked: boolean;
  // toggleLike: () => void;
  // isLoading: boolean;
};

export const ProductItemVisual = memo(
  ({
    product,
    addToCart,
    // liked, toggleLike, isLoading
  }: ProductItemVisualProps) => {
    const {
      name,
      imagesUrls,
      categoryName,
      shortDescription,
      price,
      stockQuantity,
      discount,
      releaseDate,
    } = product;

    const isOnSale = isProductOnSale(product);
    const isInStock = isProductInStock(stockQuantity);
    const isNew = checkProductDate(releaseDate);

    return (
      <motion.div
        className={cn(classes.product, !isInStock && classes.disableProduct)}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className={classes.labels}>
          {isOnSale && <SaleLabel />}
          {isNew && <NewProductLabel />}
        </div>
        <Link href={routes.product(categoryName, name)}>
          <Image src={imagesUrls[0]} alt={name} className={classes.img} width="425" height="509" />
        </Link>

        {/* <WishlistButton
          isLoading={isLoading}
          toggleLike={toggleLike}
          liked={liked}
          className={classes.heartInCart}
        /> */}
        <div className={classes.productInformation}>
          <Link href={routes.product(categoryName, name)}>
            <h3 className={classes.title}>
              {name}

              <span className={classes.categoryTitle}>
                {product.collectionName && ` | ${product.collectionName}`}
              </span>
            </h3>
          </Link>

          <p>{shortDescription}</p>
          <Price price={price} discount={discount} />

          <button
            className={classes.addToCart}
            onClick={addToCart}
            disabled={!isInStock}
            type="button"
            aria-label={isInStock ? `Add ${name} to cart` : `${name} out of stock`}
          >
            <svg
              width="8"
              height="8"
              viewBox="0 0 14 14"
              style={{ display: "block" }}
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M7 1V13M1 7H13"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
      </motion.div>
    );
  }
);

export const ProductItem = memo(({ product }: { product: Product }) => {
  const dispatch = useDispatch();
  // const { liked, toggleLike, isLoading } = useWishlist(product.id);

  const handleAddToCart = useCallback(
    () => dispatch(addToCart({ product, quantity: 1 })),
    [addToCart, product]
  );
  // const handleToggleLike = useCallback(() => toggleLike(), [toggleLike]);

  return (
    <ProductItemVisual
      product={product}
      addToCart={handleAddToCart}
      // liked={liked}
      // toggleLike={handleToggleLike}
      // isLoading={isLoading}
    />
  );
});
