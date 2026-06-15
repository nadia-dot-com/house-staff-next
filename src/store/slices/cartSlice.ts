import { Product } from "@/types/api/product";
import { OrderItem } from "@/types/orderTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { keyBy} from 'lodash';

type CartState = OrderItem[];

const initialState: CartState = [];

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (
      state: CartState,
      action: PayloadAction<{
        product: Product;
        quantity: number;
      }>
    ) => {
      const { product, quantity } = action.payload;

      let { [product.id]: itemInCart, ...restState } = keyBy(state, "id");

      if (!itemInCart) {
        itemInCart = {
          id: product.id,
          name: product.name,
          price: product.price,
          discount: product.discount,
          img: product.imagesUrls[0],
          categoryName: product.categoryName,
          quantity: 0,
        };
      }

      return [
        ...Object.values(restState),
        {
          ...itemInCart,
          quantity: Math.min(itemInCart.quantity + quantity, product.stockQuantity),
        },
      ];
    },

    removeFromCart: (state: CartState, action: PayloadAction<{ id: string }>) =>
      state.filter((i) => i.id != action.payload.id),

    updateQuantity: (
      state: CartState,
      action: PayloadAction<{ id: string; quantity: number; stock?: number | undefined }>
    ) =>
      state.map((i) =>
        i.id === action.payload.id
          ? {
              ...i,
              quantity:
                action.payload.stock != null
                  ? Math.min(action.payload.quantity, action.payload.stock)
                  : action.payload.quantity,
            }
          : i
      ),

    clearCart: (state: CartState) => {
      state = [];
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;