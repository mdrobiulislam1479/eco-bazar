import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api", credentials: "include" }),
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart",
    }),
    addToCart: builder.mutation({
      query: ({ productId, qty = 1 }) => ({
        url: "/cart",
        method: "POST",
        body: { productId, qty },
      }),
    }),
    updateQty: builder.mutation({
      query: ({ productId, qty }) => ({
        url: "/cart",
        method: "PATCH",
        body: { productId, qty },
      }),
    }),
  }),
});

export const { useAddToCartMutation, useGetCartQuery, useUpdateQtyMutation } =
  cartApi;
