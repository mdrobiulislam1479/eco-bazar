import { configureStore } from "@reduxjs/toolkit";
import { productsApi } from "./api/productsApi";
import { wishlistApi } from "./api/wishlistApi";

export const store = configureStore({
  reducer: {
    [productsApi.reducerPath]: productsApi.reducer,
    [wishlistApi.reducerPath]: wishlistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      productsApi.middleware,
      wishlistApi.middleware,
    ),
});
