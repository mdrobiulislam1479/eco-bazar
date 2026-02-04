"use client";

import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import Link from "next/link";
import ProductCard from "../cards/ProductCard";
import Container from "../ui/Container";

export default function FeaturedProducts() {
  const { data, isLoading, error } = useGetGroceriesQuery();

  if (isLoading) return <p className="py-10">Loading...</p>;
  if (error) return <p className="py-10">Failed to load products.</p>;

  // High discount based featured
  const featuredProducts = [...data.products]
    .filter((p) => p.discountPercentage > 0)
    .sort((a, b) => b.discountPercentage - a.discountPercentage)
    .slice(0, 5);

  return (
    <section className="py-10">
      <Container>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-semibold">Featured Products</h2>

          <Link href="/shop" className="text-green-600 font-medium text-sm">
            View All →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
