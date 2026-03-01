"use client";

import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import ProductCard from "../cards/ProductCard";
import Container from "../ui/Container";
import FilterSidebar from "./FilterSidebar";
import Pagination from "./Pagination";
import { useEffect, useMemo, useState } from "react";
import { SlidersHorizontal } from "lucide-react";

export default function ShopClient() {
  const [page, setPage] = useState(1);
  const skip = (page - 1) * 12;

  const [sort, setSort] = useState("priceLow");
  const [priceRange, setPriceRange] = useState([0, 20]);
  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedTags, setSelectedTags] = useState([]);

  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const { data, isLoading, isError } = useGetGroceriesQuery({
    limit: 12,
    skip,
  });

  const products = data?.products ?? [];
  const total = data?.total ?? 0;
  const totalPages = Math.ceil(total / 12);

  useEffect(() => {
    setPage(1);
  }, [sort, priceRange]);

  const filteredProducts = useMemo(() => {
    let arr = [...products];

    arr = arr.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1],
    );

    if (selectedRating)
      arr = arr.filter((p) => (p.rating ?? 0) >= selectedRating);

    if (selectedTags.length) {
      arr = arr.filter((p) => {
        const ptags = p.tags ?? [];
        return selectedTags.some((t) => ptags.includes(t));
      });
    }

    if (sort === "priceLow") arr.sort((a, b) => a.price - b.price);
    if (sort === "priceHigh") arr.sort((a, b) => b.price - a.price);

    return arr;
  }, [products, sort, priceRange, selectedRating, selectedTags]);

  if (isLoading) return <div className="p-6">Loading...</div>;
  if (isError)
    return <div className="p-6 text-red-600">Failed to load products</div>;

  return (
    <Container className="py-6 flex gap-5 relative">
      {/* Desktop Sidebar */}
      <div className="hidden md:flex">
        <FilterSidebar
          priceRange={priceRange}
          setPriceRange={setPriceRange}
          setSelectedRating={setSelectedRating}
          selectedRating={selectedRating}
          selectedTags={selectedTags}
          setSelectedTags={setSelectedTags}
        />
      </div>

      {/* Mobile Filter Drawer */}
      {mobileFilterOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/40 z-40"
            onClick={() => setMobileFilterOpen(false)}
          ></div>

          <div className="fixed top-0 left-0 h-full bg-white shadow-lg z-50 p-4 overflow-y-auto animate-slideIn">
            <div className="flex justify-end items-center mb-4">
              <button
                onClick={() => setMobileFilterOpen(false)}
                className="text-sm bg-red-500 text-white px-3 py-1 rounded"
              >
                Close
              </button>
            </div>

            <FilterSidebar
              priceRange={priceRange}
              setPriceRange={setPriceRange}
              setSelectedRating={setSelectedRating}
              selectedRating={selectedRating}
              selectedTags={selectedTags}
              setSelectedTags={setSelectedTags}
            />

            <button
              onClick={() => setMobileFilterOpen(false)}
              className="mt-4 w-full bg-green-600 text-white py-2 rounded-lg"
            >
              Apply Filters
            </button>
          </div>
        </>
      )}

      {/* Products Section */}
      <div className="flex-1">
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

        {/* Mobile Filter Button */}
        <div className="flex w-full justify-end">
          <button
            onClick={() => setMobileFilterOpen(true)}
            className="md:hidden flex items-center gap-2 bg-green-500 text-white px-4 py-2 rounded-lg mb-4 shadow"
          >
            <SlidersHorizontal size={18} />
            Filter
          </button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>

        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>

      {/* Slide animation */}
      <style>{`
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }

        .animate-slideIn {
          animation: slideIn 0.3s ease-out;
        }
      `}</style>
    </Container>
  );
}
