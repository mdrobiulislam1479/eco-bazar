"use client";

import {
  useAddWishlistMutation,
  useGetWishlistQuery,
  useRemoveWishlistMutation,
} from "@/redux/api/wishlistApi";
import { Heart } from "lucide-react";

export default function WishlistButton({ productId }) {
  const { data, refetch } = useGetWishlistQuery();
  const [add] = useAddWishlistMutation();
  const [remove] = useRemoveWishlistMutation();

  const items = data?.items || [];
  const wished = items.some((x) => x.productId === productId);

  const toggle = async () => {
    if (wished) await remove(productId);
    else await add(productId);
    refetch();
  };

  return (
    <button
      onClick={toggle}
      className={`h-10 w-10 rounded-full border ${wished ? "border-green-400 text-green-600 bg-green-100" : "border-gray-200 hover:bg-gray-50 text-gray-500"} flex items-center justify-center cursor-pointer`}
    >
      <Heart />
    </button>
  );
}
