import { DeliveryMethod, PaymentMethod } from "./api/options";
import { OrderItem } from "./orderTypes";

export type DataProps = {
  fullName: string | null;
  address: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  phone: string | null;
  email: string | null;
  notes?: string | null;
};

export type CheckoutState = {
  items: OrderItem[];
  shippingData: DataProps | null;
  delivery: DeliveryMethod | null;
  payment: PaymentMethod | null;
};

export type CheckoutContextType = CheckoutState & {
  updateItems: (items: OrderItem[]) => void;
  updateData: (data: DataProps) => void;
  updateDelivery: (data: DeliveryMethod) => void;
  updatePayment: (data: PaymentMethod) => void;
  resetCheckout: () => void;
};
