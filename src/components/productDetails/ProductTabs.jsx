"use client";

import { useState } from "react";

export default function ProductTabs({ product }) {
  const [tab, setTab] = useState("reviews");

  return (
    <div>
      <div className="flex gap-8 justify-center text-sm font-medium border-b border-gray-200">
        {["description", "info", "reviews"].map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={`pb-3 ${
              tab === t
                ? "text-green-600 border-b-2 border-green-600"
                : "text-gray-500"
            }`}
          >
            {t === "info"
              ? "Additional Information"
              : t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>

      {/* content */}
      <div className="mt-6">
        {tab === "description" && (
          <p className="text-gray-600">{product.description}</p>
        )}

        {tab === "info" && (
          <div className="text-gray-600 space-y-2">
            <p>
              <b>Shipping:</b> {product.shippingInformation || "N/A"}
            </p>
            <p>
              <b>Warranty:</b> {product.warrantyInformation || "N/A"}
            </p>
            <p>
              <b>Return Policy:</b> {product.returnPolicy || "N/A"}
            </p>
            <p>
              <b>Minimum Order:</b> {product.minimumOrderQuantity || 1}
            </p>
          </div>
        )}
        {tab === "reviews" && (
          <div className="space-y-6">
            {(product.reviews || []).map((r, idx) => (
              <div
                key={idx}
                className="border-b border-gray-100 pb-6 last:border-0"
              >
                <div className="flex gap-3 items-center">
                  {/* Avatar */}
                  <div className="h-10 w-10 shrink-0 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
                    <span className="text-gray-500">
                      {r.reviewerName?.[0] || "U"}
                    </span>
                  </div>

                  {/* Review Content Header */}
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-800">
                          {r.reviewerName}
                        </p>
                        <div className="flex text-orange-500  mt-1">
                          {"★".repeat(r.rating)}
                          <span className="text-gray-300">
                            {"★".repeat(5 - r.rating)}
                          </span>
                        </div>
                      </div>

                      <span className="text-xs text-gray-400">
                        {new Date(r.date).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Review Body */}
                <p className="text-gray-500 mt-3 text-sm leading-relaxed">
                  {r.comment}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
