import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { wishlistApi } from "./api/wishlistApi";
import { cartApi } from "./api/cartApi";
import { orderApi } from "./api/orderApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
    [cartApi.reducerPath]: cartApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      wishlistApi.middleware,
      cartApi.middleware,
      orderApi.middleware,
    ),
});
