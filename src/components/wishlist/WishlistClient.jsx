"use client";

import {
  useGetWishlistQuery,
  useRemoveWishlistMutation,
} from "@/redux/api/wishlistApi";
import Image from "next/image";
import Container from "../ui/Container";
import { useAddToCartMutation } from "@/redux/api/cartApi";
import { useGetAllGroceriesQuery } from "@/redux/api/productsApi";

export default function WishlistClient() {
  const {
    data: wishData,
    isLoading: wishLoading,
    refetch,
  } = useGetWishlistQuery();
  const { data: groceryData, isLoading: productLoading } =
    useGetAllGroceriesQuery();
  const [remove] = useRemoveWishlistMutation();
  const [addToCart] = useAddToCartMutation();

  if (wishLoading || productLoading)
    return <p className="py-10 text-center">Loading...</p>;

  const wishItems = wishData?.items || [];
  const products = groceryData?.products || [];

  console.log(wishItems, products);

  const productMap = new Map(products.map((p) => [p.id, p]));
  const rows = wishItems
    .map((w) => productMap.get(w.productId))
    .filter(Boolean);

  const handleRemove = async (id) => {
    await remove(id);
    refetch();
  };

  return (
    <section className="py-8 md:py-10">
      <Container>
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5 md:mb-6">
          My Wishlist
        </h1>

        <div className="border border-gray-200 rounded-md overflow-hidden">
          <div className="hidden md:grid grid-cols-12 px-4 py-3 text-xs uppercase text-gray-500 border-b border-gray-200">
            <div className="col-span-5">Product</div>
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
                className="border-b last:border-0 border-gray-200"
              >
                {/* Mobile Card */}
                <div className="flex flex-col gap-4 p-4 md:hidden">
                  <div className="flex items-center gap-3">
                    <div className="h-20 w-20 relative overflow-hidden rounded-md border border-gray-100 shrink-0">
                      {p.thumbnail ? (
                        <Image
                          src={p.thumbnail}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <div className="min-w-0">
                      <p className="font-semibold text-[#1a1a1a] line-clamp-2">
                        {p.title}
                      </p>
                      <p className="mt-1 text-sm text-gray-600">
                        ${Number(p.price).toFixed(2)}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between gap-3">
                    <span
                      className={`text-xs px-2 py-1 rounded ${
                        inStock
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {inStock ? "In Stock" : "Out of Stock"}
                    </span>

                    <div className="flex items-center gap-2">
                      <button
                        disabled={!inStock}
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          inStock
                            ? "bg-[#00B207] text-white hover:bg-green-600"
                            : "bg-gray-100 text-gray-400 cursor-not-allowed"
                        }`}
                      >
                        Add to Cart
                      </button>

                      <button
                        className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all text-[#666666] cursor-pointer"
                        aria-label="Remove"
                      >
                        ✕
                      </button>
                    </div>
                  </div>
                </div>

                {/* Desktop Row */}
                <div className="hidden md:grid grid-cols-12 items-center px-4 py-4">
                  <div className="col-span-5 flex items-center gap-3 min-w-0">
                    <div className="h-20 w-20 relative overflow-hidden rounded-md border border-gray-100 shrink-0">
                      {p.thumbnail ? (
                        <Image
                          src={p.thumbnail}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      ) : null}
                    </div>
                    <p className="truncate">{p.title}</p>
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

                  <div className="col-span-3 flex items-center justify-end gap-3">
                    <button
                      onClick={async () => {
                        await addToCart({ productId: p.id, qty: 1 });
                      }}
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
                      className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all text-[#666666] cursor-pointer"
                      aria-label="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
