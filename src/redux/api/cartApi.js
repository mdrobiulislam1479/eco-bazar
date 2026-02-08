import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const cartApi = createApi({
  reducerPath: "cartApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api", credentials: "include" }),
  tagTypes: ["Cart"],
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),

    addToCart: builder.mutation({
      query: ({ productId, qty = 1 }) => ({
        url: "/cart",
        method: "POST",
        body: { productId, qty },
      }),
      invalidatesTags: ["Cart"],
    }),

    updateQty: builder.mutation({
      query: ({ productId, qty }) => ({
        url: "/cart",
        method: "PATCH",
        body: { productId, qty },
      }),
      invalidatesTags: ["Cart"],
    }),

    removeCartItem: builder.mutation({
      query: (productId) => ({
        url: `/cart?productId=${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),
  }),
});

export const {
  useAddToCartMutation,
  useGetCartQuery,
  useUpdateQtyMutation,
  useRemoveCartItemMutation,
} = cartApi;
