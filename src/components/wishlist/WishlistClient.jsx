"use client";

import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import {
  useGetWishlistQuery,
  useRemoveWishlistMutation,
} from "@/redux/api/wishlistApi";
import Image from "next/image";
import Container from "../ui/Container";

export default function WishlistClient() {
  const {
    data: wishData,
    isLoading: wishLoading,
    refetch,
  } = useGetWishlistQuery();
  const { data: groceryData, isLoading: productLoading } =
    useGetGroceriesQuery();
  const [remove] = useRemoveWishlistMutation();

  if (wishLoading || productLoading)
    return <p className="py-10 text-center">Loading...</p>;

  const wishItems = wishData?.items || [];
  const products = groceryData?.products || [];

  const productMap = new Map(products.map((p) => [p.id, p]));
  const rows = wishItems
    .map((w) => productMap.get(w.productId))
    .filter(Boolean);

  const handleRemove = async (id) => {
    await remove(id);
    refetch();
  };

  return (
    <section className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold text-center mb-6">My Wishlist</h1>

        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="grid grid-cols-12 px-4 py-3 text-xs uppercase text-gray-500 border-b border-gray-200">
            <div className="col-span-6">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Stock Status</div>
          </div>

          {rows.length === 0 ? (
            <div className="py-10 text-center text-gray-500">
              Your wishlist is empty.
            </div>
          ) : null}

          {rows.map((p) => {
            const inStock = (p.stock || 0) > 0;

            return (
              <div
                key={p.id}
                className="grid grid-cols-12 items-center px-4 py-4 border-b last:border-0 border-gray-200"
              >
                <div className="col-span-6 flex items-center gap-3">
                  <div className="h-25 w-25  relative overflow-hidden">
                    {p.thumbnail ? (
                      <Image
                        src={p.thumbnail}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    ) : null}
                  </div>
                  <p>{p.title}</p>
                </div>

                <div className="col-span-2 font-semibold">
                  ${Number(p.price).toFixed(2)}
                </div>

                <div className="col-span-2">
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      inStock
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {inStock ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                <div className="col-span-2 flex items-center justify-end gap-3">
                  <button
                    disabled={!inStock}
                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                      inStock
                        ? "bg-[#00B207] text-white hover:bg-green-600 cursor-pointer"
                        : "bg-gray-100 text-gray-400 cursor-not-allowed"
                    }`}
                  >
                    Add to Cart
                  </button>

                  <button
                    onClick={() => handleRemove(p.id)}
                    className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-50 text-[#666666] cursor-pointer"
                    aria-label="Remove"
                  >
                    ✕
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
