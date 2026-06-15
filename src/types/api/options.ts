export type DeliveryMethod = {
  id: string;
  name: string;
  price: number;
};

export type PaymentMethod = {
  id: string;
  name: string;
};

export type Country = {
  name: string;
  code: string;
  vatRate: number;
};

export type OptionsResponse = {
  deliveryMethods: DeliveryMethod[];
  paymentMethods: PaymentMethod[];
  countries: Country[];
};