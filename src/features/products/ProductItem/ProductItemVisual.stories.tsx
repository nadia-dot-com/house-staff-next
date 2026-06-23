import { Meta, StoryObj } from "@storybook/react";
import { ProductItemVisual } from "./ProductItem";
import { Product } from "@/types/api/product";

const meta: Meta<typeof ProductItemVisual> = {
  component: ProductItemVisual,
  argTypes: {
    addToCart: () => {},
    toggleLike: () => {},
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: "300px" }}>
        <Story />
      </div>
    ),
  ],
};

export default meta;

type Story = StoryObj<typeof ProductItemVisual>;

const mockProduct: Product = {
  id: "1",
  name: "Table",
  categoryId: "cat-1",
  shortDescription: "comfortable wooden table",
  fullDescription: "A very comfortable wooden table for home use",
  price: 400,
  discount: 0,
  releaseDate: "2025-11-09T00:00:00.000Z",
  imagesUrls: ["https://placehold.co/425x509/E0E0E0/808080?text=Product+Image"],
  categoryName: "Furniture",
  collectionId: null,
  collectionName: null,
  stockQuantity: 100,
};

export const Default: Story = {
  args: {
    product: mockProduct,
  },
};

export const Discounted: Story = {
  args: {
    product: {
      ...mockProduct,
      discount: 10,
    },
  },
};

export const OutOfStock: Story = {
  args: {
    product: {
      ...mockProduct,
      stockQuantity: 0,
    },
  },
};

export const NewAndDiscounted: Story = {
  args: {
    product: {
      ...mockProduct,
      discount: 20,
      releaseDate: new Date().toISOString(),
    },
  },
};

export const Liked: Story = {
  args: {
    product: mockProduct,
    liked: true,
  },
};