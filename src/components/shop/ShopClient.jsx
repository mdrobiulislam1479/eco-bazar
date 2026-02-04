"use client";

import { useGetGroceriesQuery } from "@/redux/api/productsApi";

const ShopClient = () => {
  const { data, isLoading, error } = useGetGroceriesQuery();
  console.log(data);

  return <div></div>;
};

export default ShopClient;
