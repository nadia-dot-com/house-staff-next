export type HotSpotProps = {
  top: string;
  left: string;
  productId: string;
};

export type CollectionItem = {
  imageUrl: string;
  hotspots: HotSpotProps[];
};

export type Collection = {
  id: string;
  name: string;
  presentation: CollectionItem;
};
