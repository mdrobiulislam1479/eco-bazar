"use client";

import Image from "next/image";

const OrderSummery = ({ cartItems, products, loading, billing }) => {
  if (loading) return <div className="border rounded-lg p-6">Loading...</div>;

  const map = new Map(products.map((p) => [p.id, p]));

  const rows = cartItems
    .map((i) => {
      const p = map.get(i.productId);
      if (!p) return null;
      return { ...p, qty: i.qty };
    })
    .filter(Boolean);

  const subtotal = rows.reduce((sum, r) => sum + Number(r.price) * r.qty, 0);

  return (
    <div className="border border-gray-200 rounded-lg p-6 h-fit shadow-sm">
      <h2 className="text-xl font-medium mb-6">Order Summery</h2>

      <div className="space-y-4 mb-6">
        {rows.map((p) => (
          <div key={p.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gray-100 rounded relative overflow-hidden">
                {p.thumbnail ? (
                  <Image
                    src={p.thumbnail}
                    alt={p.title}
                    fill
                    className="object-cover"
                  />
                ) : null}
              </div>
              <span className="text-sm">
                {p.title} <span>x{p.qty}</span>
              </span>
            </div>
            <span className="font-medium text-sm">
              ${(Number(p.price) * p.qty).toFixed(2)}
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-3 text-sm">
        <div className="flex justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-600">Subtotal:</span>
          <span className="font-semibold">${subtotal.toFixed(2)}</span>
        </div>
        <div className="flex justify-between border-b border-gray-200 pb-3">
          <span className="text-gray-600">Shipping:</span>
          <span className="font-semibold">Free</span>
        </div>
        <div className="flex justify-between text-lg">
          <span>Total:</span>
          <span className="font-bold">${subtotal.toFixed(2)}</span>
        </div>
      </div>

      <div className="mt-6 space-y-3">
        <h3 className="font-medium text-xl mb-5">Payment Method</h3>

        <label className="flex items-center gap-2 cursor-pointer text-sm">
          <input
            type="radio"
            checked
            readOnly
            className="w-4 h-4 accent-green-600"
          />
          Cash on Delivery
        </label>
      </div>

      <button className="w-full mt-5 bg-[#00B207] hover:bg-green-600 disabled:opacity-50 text-white font-semibold py-3 rounded-full transition-colors">
        Place Order
      </button>
    </div>
  );
};

export default OrderSummery;
