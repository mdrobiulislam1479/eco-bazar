"use client";

import Container from "../ui/Container";

export default function WishlistSkeleton() {
  return (
    <section className="py-8 md:py-10">
      <Container>
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5 md:mb-6">
          My Wishlist
        </h1>

        <div className="border border-gray-200 rounded-md overflow-hidden animate-pulse">
          {/* Desktop Header */}
          <div className="hidden md:grid grid-cols-12 px-4 py-3 text-xs uppercase text-gray-500 border-b border-gray-200">
            <div className="col-span-5">Product</div>
            <div className="col-span-2">Price</div>
            <div className="col-span-2">Stock Status</div>
          </div>

          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="border-b border-gray-200 last:border-0 p-4 md:p-0"
            >
              {/* Mobile Card */}
              <div className="flex flex-col gap-4 md:hidden">
                <div className="flex items-center gap-3">
                  <div className="h-20 w-20 bg-gray-200 rounded-md" />
                  <div className="flex flex-col gap-2 grow">
                    <div className="h-4 bg-gray-200 rounded w-32" />
                    <div className="h-3 bg-gray-200 rounded w-20" />
                  </div>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <div className="h-5 bg-gray-200 rounded w-16" />
                  <div className="flex items-center gap-2">
                    <div className="h-9 w-24 bg-gray-200 rounded-full" />
                    <div className="h-8 w-8 bg-gray-200 rounded-full" />
                  </div>
                </div>
              </div>

              {/* Desktop Row */}
              <div className="hidden md:grid grid-cols-12 items-center px-4 py-4 gap-3">
                <div className="col-span-5 flex items-center gap-3">
                  <div className="h-20 w-20 bg-gray-200 rounded-md" />
                  <div className="h-4 bg-gray-200 rounded w-40" />
                </div>

                <div className="col-span-2">
                  <div className="h-4 bg-gray-200 rounded w-16" />
                </div>

                <div className="col-span-2">
                  <div className="h-4 bg-gray-200 rounded w-20" />
                </div>

                <div className="col-span-3 flex justify-end gap-3">
                  <div className="h-9 w-24 bg-gray-200 rounded-full" />
                  <div className="h-8 w-8 bg-gray-200 rounded-full" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
