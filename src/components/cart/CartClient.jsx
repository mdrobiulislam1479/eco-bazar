"use client";

import {
  useGetCartQuery,
  useRemoveCartItemMutation,
  useUpdateQtyMutation,
} from "@/redux/api/cartApi";
import { useGetGroceriesQuery } from "@/redux/api/productsApi";
import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";

export default function CartClient() {
  const { data: cartData, isLoading: cartLoading, refetch } = useGetCartQuery();
  const { data: groceryData, isLoading: productLoading } =
    useGetGroceriesQuery();
  const [updateQty] = useUpdateQtyMutation();
  const [removeItem] = useRemoveCartItemMutation();

  if (cartLoading || productLoading)
    return <p className="py-10 text-center">Loading...</p>;

  const items = cartData?.cart?.items || [];
  console.log(cartData);

  const products = groceryData?.products || [];
  const map = new Map(products.map((p) => [p.id, p]));

  const rows = items
    .map((i) => {
      const p = map.get(i.productId);
      if (!p) return null;
      return { ...p, qty: i.qty };
    })
    .filter(Boolean);

  const subtotal = rows.reduce((sum, r) => sum + Number(r.price) * r.qty, 0);
  const shipping = 0;
  const total = subtotal + shipping;

  const changeQty = async (id, nextQty) => {
    if (nextQty < 1) return;
    await updateQty({ productId: id, qty: nextQty });
    refetch();
  };

  const remove = async (id) => {
    await removeItem(id);
    refetch();
  };

  return (
    <section className="py-10">
      <Container>
        <h1 className="text-3xl font-semibold text-center mb-8">
          My Shopping Cart
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left: table */}
          <div className="lg:col-span-8 border border-gray-200 rounded-md bg-white overflow-hidden">
            {/* Header */}
            <div className="hidden md:grid grid-cols-12 px-4 py-3 text-sm uppercase text-gray-500 border-b border-gray-200">
              <div className="col-span-5">Product</div>
              <div className="col-span-2">Price</div>
              <div className="col-span-3">Quantity</div>
              <div className="col-span-2 text-left">Subtotal</div>
            </div>

            {rows.length === 0 ? (
              <div className="py-10 text-center text-gray-500">
                Cart is empty.
              </div>
            ) : null}

            {rows.map((p) => (
              <div
                key={p.id}
                className="flex flex-col md:grid md:grid-cols-12 items-center px-4 py-6 md:py-4 border-b border-gray-200 last:border-b-0 gap-4 md:gap-0"
              >
                {/* Product Info */}
                <div className="w-full md:col-span-5 flex items-center gap-4">
                  <div className="h-20 w-20 relative overflow-hidden rounded-md border border-gray-100 shrink-0">
                    {p.thumbnail && (
                      <Image
                        src={p.thumbnail}
                        alt={p.title}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-gray-900 md:font-normal">
                      {p.title}
                    </p>
                    <p className="md:hidden text-sm text-gray-500">
                      ${Number(p.price).toFixed(2)}
                    </p>
                  </div>
                </div>

                {/* Price */}
                <div className="hidden md:block md:col-span-2 text-gray-600">
                  ${Number(p.price).toFixed(2)}
                </div>

                {/* Quantity */}
                <div className="w-full md:col-span-5 flex items-center justify-between md:contents">
                  {/* Quantity Controls */}
                  <div className="md:col-span-3">
                    <div className="inline-flex items-center border border-gray-200 rounded-full overflow-hidden p-1 text-gray-600">
                      <button
                        onClick={() => changeQty(p.id, p.qty - 1)}
                        className="h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 min-w-10 text-center font-medium">
                        {p.qty}
                      </span>
                      <button
                        onClick={() => changeQty(p.id, p.qty + 1)}
                        className="h-8 w-8 flex items-center justify-center bg-gray-100 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Subtotal & Remove */}
                  <div className="md:col-span-2 flex items-center justify-between gap-4">
                    <span className="font-semibold md:font-medium text-gray-900">
                      ${(Number(p.price) * p.qty).toFixed(2)}
                    </span>
                    <button
                      onClick={() => remove(p.id)}
                      className="h-8 w-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-red-50 hover:text-red-500 hover:border-red-200 transition-all text-[#666666] cursor-pointer"
                      aria-label="Remove"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {/* Footer Buttons */}
            {rows.length < 0 ? (
              <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-6 gap-3">
                <button className="w-full sm:w-auto px-6 py-2.5 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors font-medium">
                  Return to shop
                </button>
                <button
                  onClick={refetch}
                  className="w-full sm:w-auto px-6 py-2.5 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors font-medium"
                >
                  Update Cart
                </button>
              </div>
            ) : (
              ""
            )}
          </div>

          {/* Right: cart total */}
          <div className="lg:col-span-4 border border-gray-200 rounded-md bg-white p-5 h-fit">
            <h2 className="text-xl font-medium mb-4">Cart Total</h2>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Subtotal:</span>
                <span className="font-medium">${subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between border-b border-gray-200 pb-2">
                <span className="text-gray-500">Shipping:</span>
                <span className="font-medium">Free</span>
              </div>

              <div className="flex justify-between pt-1">
                <span className="font-semibold">Total:</span>
                <span className="font-semibold">${total.toFixed(2)}</span>
              </div>
            </div>

            <Link
              href="/checkout"
              className="w-full mt-5 py-3 rounded-full bg-[#00B207] text-white font-semibold hover:bg-green-600 block text-center"
            >
              Proceed to checkout
            </Link>
          </div>

          {/* Coupon */}
          <div className="lg:col-span-8 flex flex-col md:flex-row items-center justify-between w-full p-4 border border-gray-200 rounded-lg bg-white shadow-sm gap-4 md:gap-0">
            <span className="text-xl font-medium text-gray-900 whitespace-nowrap px-2">
              Coupon Code
            </span>

            <div className="relative flex items-center w-full md:w-auto md:flex-1 md:ml-6">
              <input
                type="text"
                placeholder="Enter code"
                className="w-full py-4 pl-6 pr-32 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-gray-200 transition-all placeholder-gray-400"
              />

              <button className="absolute right-1 top-1 bottom-1 px-8 bg-[#333333] text-white font-medium rounded-full hover:bg-black transition-colors">
                Apply Coupon
              </button>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
