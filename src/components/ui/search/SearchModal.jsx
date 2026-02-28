"use client";

import { X, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useGetAllGroceriesQuery } from "@/redux/api/productsApi";
import Image from "next/image";

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");

  const { data, isLoading } = useGetAllGroceriesQuery();
  const products = data?.products || [];

  const filtered =
    query.length > 0
      ? products.filter((p) =>
          p.title.toLowerCase().includes(query.toLowerCase()),
        )
      : [];

  // ESC key close
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-start justify-center pt-24 backdrop-blur-sm bg-black/40 px-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {/* Modal panel */}
          <motion.div
            initial={{ y: -30, scale: 0.95, opacity: 0 }}
            animate={{ y: 0, scale: 1, opacity: 1 }}
            exit={{ y: -20, scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", damping: 18 }}
            className="w-full max-w-xl bg-white rounded-xl py-8 px-5 shadow-xl relative"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-4 -top-2 p-2 text-gray-600 hover:text-black rounded-full hover:bg-gray-100"
            >
              <X size={22} />
            </button>

            {/* Search Bar */}
            <div className="flex items-center gap-3 border rounded-lg px-3 py-2 shadow-sm">
              <Search size={20} className="text-gray-500" />
              <input
                autoFocus
                type="text"
                placeholder="Search products..."
                className="w-full outline-none text-sm"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
              />
            </div>

            {/* Results */}
            <div className="mt-4 max-h-80 overflow-y-auto">
              {/* Skeleton Loading */}
              {isLoading &&
                [...Array(6)].map((_, i) => (
                  <div
                    key={i}
                    className="animate-pulse flex items-center gap-3 p-2"
                  >
                    <div className="w-12 h-12 bg-gray-200 rounded" />
                    <div className="flex-1">
                      <div className="h-3 w-32 bg-gray-200 rounded mb-2" />
                      <div className="h-2 w-20 bg-gray-200 rounded" />
                    </div>
                  </div>
                ))}

              {!isLoading && filtered.length === 0 && query.length > 0 && (
                <p className="text-center text-gray-500 text-sm py-6">
                  No products found
                </p>
              )}

              {/* Product Suggestions */}
              {!isLoading &&
                filtered.map((p) => (
                  <Link
                    href={`/shop/${p.id}`}
                    key={p.id}
                    onClick={onClose}
                    className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-md transition"
                  >
                    <div className="relative w-12 h-12">
                      <Image
                        src={p.thumbnail}
                        alt={p.title}
                        fill
                        className="object-cover rounded"
                        priority
                      />
                    </div>

                    <div className="flex-1">
                      <HighlightedText text={p.title} highlight={query} />
                      <p className="text-xs text-gray-500">${p.price}</p>
                    </div>
                  </Link>
                ))}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// Highlight matched text
function HighlightedText({ text, highlight }) {
  if (!highlight) return <p className="text-sm font-medium">{text}</p>;

  const parts = text.split(new RegExp(`(${highlight})`, "gi"));

  return (
    <p className="text-sm font-medium">
      {parts.map((part, i) =>
        part.toLowerCase() === highlight.toLowerCase() ? (
          <span className="text-green-600 font-semibold" key={i}>
            {part}
          </span>
        ) : (
          part
        ),
      )}
    </p>
  );
}
