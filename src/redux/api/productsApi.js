import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsApi = createApi({
  reducerPath: "productsApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://dummyjson.com",
  }),
  endpoints: (builder) => ({
    // get groceries
    getGroceries: builder.query({
      query: ({ limit = 12, skip = 0 } = {}) =>
        `/products/category/groceries?limit=${limit}&skip=${skip}`,
    }),

    // get product by id
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),
  }),
});

export const { useGetGroceriesQuery, useGetProductByIdQuery } = productsApi;
