export type OrderItemResponse = {
  id: string;
  product: {
    id: string;
    name: string;
    categoryName: string;
    price: number;
    discount: number;
    releaseDate: number;
    imagesUrls: string[];
  };

  price: number;
  discount: number;
  quantity: number;
};

export type OrderResponse = {
  id: string;
  createdAt: string;
  status: string;
  delivery: {
    method: string;
    price: number;
  };
  payment: {
    method: string;
  };

  totalPrice: number;
  vat: number;

  shippingDetails: {
    address: {
      country: string;
      city: string;
      postalCode: string;
      street: string;
    };

    email: string;
    phone: string;
    notes: string | null;
  };

  items: OrderItemResponse[];
};
