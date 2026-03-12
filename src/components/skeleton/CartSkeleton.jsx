"use client";

import Container from "../ui/Container";

export default function CartSkeleton() {
  return (
    <section className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold text-center mb-8">
          My Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-pulse">
          {/* Left: Table Skeleton */}
          <div className="lg:col-span-8 border border-gray-200 rounded-md bg-white overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 px-4 py-3 text-sm uppercase text-gray-500 border-b border-gray-200">
              <div className="col-span-5">Product</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-3">Quantity</div>
              <div className="col-span-2">Subtotal</div>
            </div>

            {[1, 2, 3].map((n) => (
              <div
                key={n}
                className="flex flex-col md:grid md:grid-cols-12 items-center px-4 py-6 md:py-4 border-b border-gray-200 gap-4 md:gap-0"
              >
                {/* Product info */}
                <div className="w-full md:col-span-5 flex items-center gap-4">
                  <div className="h-20 w-20 bg-gray-200 rounded-md" />
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-gray-200 rounded w-40" />
                    <div className="h-3 bg-gray-200 rounded w-28 md:hidden" />
                  </div>
                </div>

                {/* Price */}
                <div className="hidden md:block md:col-span-2">
                  <div className="h-4 bg-gray-200 rounded w-16" />
                </div>

                {/* Quantity */}
                <div className="w-full md:col-span-5 flex items-center justify-between md:contents">
                  <div className="md:col-span-3">
                    <div className="flex items-center gap-3">
                      <div className="h-8 w-8 bg-gray-200 rounded-full" />
                      <div className="h-4 w-10 bg-gray-200 rounded" />
                      <div className="h-8 w-8 bg-gray-200 rounded-full" />
                    </div>
                  </div>

                  {/* Subtotal + Remove */}
                  <div className="md:col-span-2 flex items-center justify-between gap-4">
                    <div className="h-4 w-16 bg-gray-200 rounded" />
                    <div className="h-8 w-8 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right: Cart Total */}
          <div className="lg:col-span-4 border border-gray-200 rounded-md bg-white p-5 h-fit space-y-4">
            <div className="h-6 bg-gray-200 rounded w-32" />

            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-gray-200">
                <div className="h-4 bg-gray-200 rounded w-20" />
                <div className="h-4 bg-gray-200 rounded w-16" />
              </div>

              <div className="flex justify-between pb-2 border-b border-gray-200">
                <div className="h-4 bg-gray-200 rounded w-20" />
                <div className="h-4 bg-gray-200 rounded w-16" />
              </div>

              <div className="flex justify-between pt-1">
                <div className="h-4 bg-gray-200 rounded w-14" />
                <div className="h-4 bg-gray-200 rounded w-16" />
              </div>
            </div>

            <div className="h-10 bg-gray-200 rounded-full w-full mt-4" />
          </div>
        </div>
      </Container>
    </section>
  );
}
