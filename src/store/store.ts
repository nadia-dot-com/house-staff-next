import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { categorySlice } from "./slices/categorySlice";

const  rootReducer = combineReducers({
    cart: cartSlice.reducer,
    category: categorySlice.reducer,
})


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart", ]
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    cart: persistedReducer,
  },
});

export const persistore = persistStore(store);
