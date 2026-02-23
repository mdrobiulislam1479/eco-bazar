"use client";

import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import ProductCard from "../cards/ProductCard";
import Container from "../ui/Container";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";
import { useState } from "react";

export default function ShopClient() {
  const [page, setPage] = useState(1);
  const skip = (page - 1) * 12;
  const { data, isLoading, isError } = useGetGroceriesQuery({
    limit: 12,
    skip,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / 12);

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (isError)
    return <div className="p-6 text-red-600">Failed to load products</div>;

  return (
    <Container className="py-6 flex gap-5">
      <FilterSidebar />

      <div className="flex-1">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by price:</span>
            <select className="border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500">
              <option value="priceLow">Low - High</option>
              <option value="priceHigh">High - Low</option>
            </select>
          </div>

          <div className="text-sm text-gray-600">
            <span className="font-bold text-gray-900">{total}</span> Results
            Found
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </Container>
  );
}
