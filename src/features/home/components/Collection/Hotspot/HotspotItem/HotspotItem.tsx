import classes from "./HotspotItem.module.scss";
import { Product } from "@/types/api/product";
import { Price } from "@/components/ui/Price/Price";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { routes } from "@/constants/routes";

export function HotspotItem({ item }: { item: Product }) {
  return (
    <motion.div
      className={classes.hotspotItem}
      exit={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
    >
      <Link href={routes.product(item.categoryName, item.name)}>
        <Image src={item.imagesUrls[0]} alt={item.name} className={classes.img} />
        <div className={classes.text}>
          <h2 className={classes.title}>{item.name}</h2>
          <Price price={item.price} discount={item.discount} />
        </div>
        <svg
          width="30"
          height="30"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <path d="M8 4l8 8-8 8" />
        </svg>
      </Link>
    </motion.div>
  );
}
