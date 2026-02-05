import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    // get all groceries
    getGroceries: builder.query({
      query: () => `/products/category/groceries`,
    }),

    // get product by id
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetGroceriesQuery, useGetProductByIdQuery } = productsApi;
