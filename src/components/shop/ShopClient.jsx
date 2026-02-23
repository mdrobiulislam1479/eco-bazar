"use client";

import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import ProductCard from "../cards/ProductCard";
import Container from "../ui/Container";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";
import { useEffect, useMemo, useState } from "react";

export default function ShopClient() {
  const [page, setPage] = useState(1);
  const skip = (page - 1) * 12;

  const [sort, setSort] = useState("priceLow");
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedRatings, setSelectedRatings] = useState([]);
  const [selectedTags, setSelectedTags] = useState(["Low fat"]);

  const { data, isLoading, isError } = useGetGroceriesQuery({
    limit: 12,
    skip,
  });

  console.log(data);

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / 12);

  useEffect(() => {
    setPage(1);
  }, [sort, priceRange]);

  const filteredProducts = useMemo(() => {
    let arr = [...products];

    // price filter
    arr = arr.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    // sort
    if (sort === "priceLow") arr.sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") arr.sort((a, b) => b.price - a.price);

    return arr;
  }, [products, sort, priceRange]);

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (isError)
    return <div className="p-6 text-red-600">Failed to load products</div>;

  return (
    <Container className="py-6 flex gap-5">
      <div className="hidden md:flex">
        <FilterSidebar
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          selectedRatings={selectedRatings}
          selectedTags={selectedTags}
        />
      </div>

      <div className="flex-1">
        {/* Top bar */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
          <div className="flex items-center gap-2">
            <span className="text-sm text-gray-600">Sort by price:</span>
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="border border-gray-200 rounded-md px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-green-500"
            >
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
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </Container>
  );
}
