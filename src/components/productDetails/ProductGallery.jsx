"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProductGallery({ product }) {
  const images = product.images?.length ? product.images : [product.thumbnail];
  const [active, setActive] = useState(images[0]);

  return (
    <div className="flex gap-4">
      {/* thumbs */}
      <div className="flex flex-col gap-3">
        {images.slice(0, 4).map((img) => (
          <button
            key={img}
            onClick={() => setActive(img)}
            className={`h-16 w-16 border rounded-md p-1 ${
              active === img ? "border-green-600" : "border-gray-200"
            }`}
          >
            <div className="relative h-full w-full">
              <Image src={img} alt="thumb" fill className="object-contain" />
            </div>
          </button>
        ))}
      </div>

      {/* main */}
      <div className="relative w-full h-105 border border-gray-100 rounded-lg">
        <Image
          src={active}
          alt={product.title}
          fill
          className="object-contain p-6"
        />
      </div>
    </div>
  );
}
