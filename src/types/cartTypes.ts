import { Product } from "./api/product";
import { OrderItem } from "./orderTypes";

export type CartContextValue = {
  cartItems: OrderItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number, stock?: number) => void;
};

export type CartState = OrderItem[];