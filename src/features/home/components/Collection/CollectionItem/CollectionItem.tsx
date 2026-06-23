import classes from "./CollectionItem.module.scss";
import { Collection, HotSpotProps } from "@/types/api/collection";
import { Hotspot } from "../Hotspot/Hotspot";
import { Product } from "@/types/api/product";

export function CollectionItem({
  collectionItem,
  products
}: {
  collectionItem: Collection;
  products: Product[]
}) {
  const hotspots: HotSpotProps[] = collectionItem.presentation.hotspots ?? [];

  return (
    <li className={classes.collectionItem}>
      <div className={classes.imageWrapper}>
        <img
          className={classes.img}
          src={collectionItem.presentation.imageUrl}
          alt=""
          width="1100"
          height="613"
        />
        <div className={classes.title}>{collectionItem.name}</div>
        {hotspots.map((spot) => (
          <Hotspot
            top={spot.top}
            left={spot.left}
            productId={spot.productId}
            products={products}
            key={spot.productId}
          />
        ))}
      </div>
    </li>
  );
}