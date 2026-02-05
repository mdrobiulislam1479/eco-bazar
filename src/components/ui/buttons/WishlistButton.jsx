"use client";

import { useAddWishlistMutation } from "@/redux/api/wishlistApi";

export default function WishlistButton({ productId }) {
  const [add] = useAddWishlistMutation();

  return (
    <button
      onClick={() => add(productId)}
      className="h-10 w-10 rounded-full border hover:bg-gray-50"
    >
      ♡
    </button>
  );
}
