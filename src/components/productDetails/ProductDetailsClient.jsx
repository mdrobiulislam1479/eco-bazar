"use client";

import {
  useGetGroceriesQuery,
  useGetProductByIdQuery,
} from "@/redux/api/productsApi";
import ProductDetailsUI from "./ProductDetailsUI";
import { useParams } from "next/navigation";

export default function ProductDetailsPage() {
  const params = useParams();
  const { data: product, isLoading, error } = useGetProductByIdQuery(params.id);
  const { data: groceryData } = useGetGroceriesQuery();

  if (isLoading) return <p className="py-10">Loading...</p>;
  if (error || !product) return <p className="py-10">Product not found</p>;

  const currentTags = product.tags || [];
  const candidates =
    groceryData?.products?.filter((p) => p.id !== product.id) || [];

  const related = candidates
    .map((p) => {
      const tags = p.tags || [];
      const score = tags.filter((t) => currentTags.includes(t)).length;

      return { ...p, __score: score };
    })
    .filter((p) => p.__score > 0)
    .sort((a, b) => b.__score - a.__score || b.rating - a.rating)
    .slice(0, 4);

  const fallback = candidates
    .filter((p) => p.category === product.category)
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 4);

  return (
    <ProductDetailsUI
      product={product}
      related={related.length ? related : fallback}
    />
  );
}
