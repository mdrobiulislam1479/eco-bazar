"use client";

import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import ProductCard from "../cards/ProductCard";
import Container from "../ui/Container";

export default function ShopClient() {
  const { data, isLoading, isError } = useGetGroceriesQuery();

  const products = data?.products ?? [];
  const total = data?.total ?? 0;

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (isError)
    return <div className="p-6 text-red-600">Failed to load products</div>;

  return (
    <Container className="py-6">
      {/* Top bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Sort by:</span>
          <select className="border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500">
            <option value="priceLow">Price: Low</option>
            <option value="priceHigh">Price: High</option>
          </select>
        </div>

        <div className="text-sm text-gray-600">
          <span className="font-bold text-gray-900">{total}</span> Results Found
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </Container>
  );
}
