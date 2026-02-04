"use client";

import Link from "next/link";
import ProductCard from "../cards/ProductCard";
import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import Container from "../ui/Container";

export default function PopularProducts() {
  const { data, isLoading, error } = useGetGroceriesQuery();

  if (isLoading) return <p className="py-10">Loading...</p>;
  if (error) return <p className="py-10">Failed to load products.</p>;

  const popularProducts = [...(data?.products || [])]
    .filter((p) => p.stock > 0)
    .sort((a, b) => b.rating - a.rating || b.stock - a.stock)
    .slice(0, 10);

  return (
    <section className="py-10">
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Popular Products</h2>

          <Link href="/shop" className="text-green-600 font-medium text-sm">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {popularProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </Container>
    </section>
  );
}
