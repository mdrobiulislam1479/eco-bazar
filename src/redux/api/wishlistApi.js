import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const wishlistApi = createApi({
  reducerPath: "wishlistApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getWishlist: builder.query({
      query: () => "/wishlist",
    }),
    addWishlist: builder.mutation({
      query: (productId) => ({
        url: "/wishlist",
        method: "POST",
        body: { productId },
      }),
    }),
    removeWishlist: builder.mutation({
      query: (productId) => ({
        url: `/wishlist?productId=${productId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddWishlistMutation,
  useGetWishlistQuery,
  useRemoveWishlistMutation,
} = wishlistApi;
