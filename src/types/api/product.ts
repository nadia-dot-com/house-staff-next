export type Product = {
  id: string;
  name: string;
  categoryId: string;
  shortDescription: string;
  fullDescription: string;
  price: number;
  discount: number;
  releaseDate: string;
  imagesUrls: string[];
  categoryName: string;
  collectionId: string | null;
  collectionName: string | null;
  stockQuantity: number;
};

export type ProductsInfiniteResponse = {
  products: Product[];
  nextCursor?: number;
  prevCursor?: number;
};
