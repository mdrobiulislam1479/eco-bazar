"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Eye, Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product }) {
  const hasDiscount = product.discountPercentage > 0;
  const finalPrice = hasDiscount
    ? (
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2)
    : product.price.toFixed(2);

  const rating = Math.round(product.rating);

  return (
    <div className="group relative border border-gray-100 p-4 transition-all hover:border-green-500 hover:shadow-lg bg-white">
      {/* Sale Badge */}
      {hasDiscount && (
        <span className="absolute left-3 top-3 z-10 rounded bg-[#EA4B48] px-2 py-1 text-xs font-medium text-white">
          Sale {Math.round(product.discountPercentage)}%
        </span>
      )}

      {/* Action Icons */}
      <div className="absolute right-3 top-3 z-10 flex flex-col gap-2 opacity-0 transition-opacity group-hover:opacity-100">
        <button
          className="rounded-full border p-2 transition-colors border-gray-200 bg-white hover:bg-green-500 hover:text-white"
          aria-label="wishlist"
        >
          <Heart size={18} />
        </button>

        <Link
          href={`/shop/${product.id}`}
          className="rounded-full border border-gray-200 bg-white p-2 hover:bg-green-500 hover:text-white transition-colors"
          aria-label="quick-view"
        >
          <Eye size={18} />
        </Link>
      </div>

      {/* Product Image */}
      <Link href={`/shop/${product.id}`}>
        <div className="relative mb-4 h-48 w-full">
          <Image
            src={product.thumbnail}
            alt={product.title}
            fill
            className="object-contain"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="flex justify-between items-end">
        <div>
          <Link
            href={`/shop/${product.id}`}
            className="text-sm text-gray-700 group-hover:text-green-600 transition-colors line-clamp-1"
          >
            {product.title}
          </Link>

          <div className="mt-1 flex items-center gap-2">
            <span className="font-bold text-gray-900">${finalPrice}</span>

            {hasDiscount && (
              <span className="text-sm text-gray-400 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          {/* Rating Stars */}
          <div className="mt-1 flex text-orange-400">
            {"★".repeat(rating)}
            <span className="text-gray-300">{"★".repeat(5 - rating)}</span>
          </div>
        </div>

        {/* Cart Button */}
        <button
          className="rounded-full bg-gray-100 p-3 text-gray-600 group-hover:bg-green-600 group-hover:text-white transition-all"
          aria-label="add-to-cart"
        >
          <ShoppingCart size={20} />
        </button>
      </div>
    </div>
  );
}
