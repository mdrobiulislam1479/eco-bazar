"use client";

import { useAddWishlistMutation } from "@/redux/api/wishlistApi";
import { Heart } from "lucide-react";

export default function WishlistButton({ productId }) {
  const [add] = useAddWishlistMutation();

  return (
    <button
      onClick={() => add(productId)}
      className="h-10 w-10 rounded-full border border-gray-200 hover:bg-gray-50 flex items-center justify-center text-gray-500 cursor-pointer"
    >
      <Heart />
    </button>
  );
}
