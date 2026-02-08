import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query";

export const orderApi = createApi({
  reducerPath: "orderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api", credentials: "include" }),
  endpoints: (builder) => ({
    placeOrder: builder.mutation({
      query: (body) => ({
        url: "/order",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { usePlaceOrderMutation } = orderApi;
