import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { cartSlice } from "./slices/cartSlice";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PERSIST,
  PAUSE,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartUiSlice } from "./slices/cartUiSlice";
import { userUiSlice } from "./slices/userUiSlice";
import { userSlice } from "./slices/userSlice";

const rootReducer = combineReducers({
  cart: cartSlice.reducer,
  cartUi: cartUiSlice.reducer,
  userUi: userUiSlice.reducer,
  user: userSlice.reducer,
});


const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  });
  
  export const persistore = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;