"use client";

import { useState } from "react";
import { Heart } from "lucide-react";
import AddToCartButton from "../ui/buttons/AddToCartButton";
import WishlistButton from "../ui/buttons/WishlistButton";

export default function ProductInfo({ product }) {
  const [qty, setQty] = useState(1);

  const hasDiscount = product.discountPercentage > 0;
  const finalPrice = hasDiscount
    ? (
        product.price -
        (product.price * product.discountPercentage) / 100
      ).toFixed(2)
    : product.price.toFixed(2);

  return (
    <div>
      <div className="flex items-center gap-3">
        <h1 className="text-4xl font-semibold">{product.title}</h1>
        <span className="text-xs px-2 py-1 rounded bg-[#20B52620] text-green-700">
          {product.stock > 0 ? "In Stock" : "Out of Stock"}
        </span>
      </div>

      <div className="mt-2 text-sm text-gray-500">
        <span className="text-orange-500">★★★★★</span> {product.rating} Review •
        <span className="font-medium text-black"> SKU:</span>
        {product.sku || "N/A"}
      </div>

      <div className="mt-4 flex items-center gap-2">
        {hasDiscount && (
          <span className="text-gray-400 line-through">${product.price}</span>
        )}
        <span className="text-2xl font-medium text-green-700">
          ${finalPrice}
        </span>
        {hasDiscount && (
          <span className="text-xs px-2 py-1 rounded-full bg-red-50 text-red-600">
            {Math.round(product.discountPercentage)}% Off
          </span>
        )}
      </div>

      <p className="mt-4 text-[#808080] py-5 border-y border-gray-200">
        {product.description}
      </p>

      {/* qty + add to cart */}
      <div className="mt-6 flex items-center gap-4">
        <div className="flex items-center border border-gray-200 rounded-full overflow-hidden p-1 text-gray-600">
          <button
            onClick={() => setQty((p) => Math.max(1, p - 1))}
            className="px-4 py-2 bg-gray-200 rounded-full"
          >
            -
          </button>
          <span className="px-4 py-2">{qty}</span>
          <button
            onClick={() => setQty((p) => p + 1)}
            className="px-4 py-2 bg-gray-200 rounded-full"
          >
            +
          </button>
        </div>

        <AddToCartButton
          qty={qty}
          className={"flex-1"}
          productId={product.id}
        />

        <WishlistButton productId={product.id} />
      </div>

      {/* meta */}
      <div className="mt-8 text-sm text-gray-600 space-y-2">
        <div>
          <b>Category:</b>{" "}
          <span className="capitalize">{product.category}</span>
        </div>

        <div>
          <b>Tags:</b>{" "}
          <span className="capitalize">{product.tags?.join(", ")}</span>
        </div>
      </div>
    </div>
  );
}
