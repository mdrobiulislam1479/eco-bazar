"use client";

import { Check, ChevronDown, SlidersHorizontal, Star } from "lucide-react";
import { useState } from "react";
import { IoMdStar } from "react-icons/io";

const tags = [
  "beverages",
  "cat food",
  "coffee",
  "condiments",
  "cooking essentials",
  "dairy",
  "desserts",
  "dog food",
  "fruits",
  "grains",
  "health supplements",
  "household essentials",
  "meat",
  "pet supplies",
  "seafood",
  "vegetables",
];

const ratings = [5, 4, 3, 2, 1];

function RatingStars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <IoMdStar
          key={i}
          size={16}
          className={
            i <= rating ? "text-orange-400 fill-orange-400" : "text-gray-300"
          }
        />
      ))}
    </div>
  );
}

function SectionHeader({ title, open, toggle }) {
  return (
    <button
      onClick={toggle}
      className="flex w-full items-center justify-between py-1 text-left"
    >
      <span className="text-[15px] font-semibold text-gray-800">{title}</span>

      <ChevronDown
        size={16}
        className={`text-gray-500 transition-transform duration-200 ${open ? "" : "rotate-180"}`}
      />
    </button>
  );
}

export default function FilterSidebar({
  priceRange,
  setPriceRange,
  selectedRating,
  selectedTags,
  setSelectedRating,
  setSelectedTags,
}) {
  const [openSections, setOpenSections] = useState({
    price: true,
    rating: true,
    tags: false,
  });

  const toggleSection = (key) =>
    setOpenSections((s) => ({ ...s, [key]: !s[key] }));

  const handleRatingChange = (value) => {
    setSelectedRating(value);
  };

  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag],
    );

  return (
    <div className="min-h-screen flex items-start justify-center">
      <div className="w-64 rounded-2xl bg-white shadow-sm p-5 space-y-5">
        {/* Filter Button */}
        <button className="flex items-center gap-2 rounded-full bg-green-500 px-5 py-2.5 text-sm font-semibold text-white shadow-md">
          <span>Filter</span>
          <SlidersHorizontal size={20} />
        </button>

        <hr className="border-gray-100" />

        {/* Price */}
        <div>
          <SectionHeader
            title="Price"
            open={openSections.price}
            toggle={() => toggleSection("price")}
          />
          {openSections.price && (
            <div className="mt-4 space-y-3">
              <div className="relative h-1.5 rounded-full bg-green-100">
                <div
                  className="absolute h-full rounded-full bg-green-500"
                  style={{
                    left: `${((priceRange[0] - 1) / 19) * 100}%`,
                    right: `${100 - ((priceRange[1] - 1) / 19) * 100}%`,
                  }}
                />
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={priceRange[0]}
                  onChange={(e) =>
                    setPriceRange([
                      Math.min(+e.target.value, priceRange[1] - 10),
                      priceRange[1],
                    ])
                  }
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />
                <input
                  type="range"
                  min={1}
                  max={20}
                  value={priceRange[1]}
                  onChange={(e) =>
                    setPriceRange([
                      priceRange[0],
                      Math.max(+e.target.value, priceRange[0] + 2),
                    ])
                  }
                  className="absolute inset-0 w-full opacity-0 cursor-pointer"
                />

                {/* Thumb right */}
                <div
                  className="absolute top-1/2 -translate-y-1/2 translate-x-1/2 w-4 h-4 rounded-full bg-white border-2 border-green-500 shadow pointer-events-none"
                  style={{
                    right: `${100 - ((priceRange[1] - 1) / 19) * 100}%`,
                  }}
                />
              </div>
              <p className="text-xs text-gray-500">
                Price: ${priceRange[0]} — ${priceRange[1]}
              </p>
            </div>
          )}
        </div>

        <hr className="border-gray-100" />

        {/* Rating */}
        <div>
          <SectionHeader
            title="Rating"
            open={openSections.rating}
            toggle={() => toggleSection("rating")}
          />
          {openSections.rating && (
            <div className="mt-3 space-y-2.5">
              {ratings.map((r) => {
                const checked = selectedRating === r;
                return (
                  <label
                    key={r}
                    className="flex items-center gap-3 cursor-pointer group"
                  >
                    <div
                      onClick={() => handleRatingChange(r)}
                      className={`w-4 h-4 rounded flex items-center justify-center border-2 transition-all ${
                        checked
                          ? "bg-green-500 border-green-500"
                          : "border-gray-300 bg-white group-hover:border-green-400"
                      }`}
                    >
                      {checked && <Check size={10} className="text-white" />}
                    </div>
                    <RatingStars rating={r} />
                    <span className="text-sm text-gray-600">
                      {r === 5 ? "5.0" : `${r}.0 & up`}
                    </span>
                  </label>
                );
              })}
            </div>
          )}
        </div>

        <hr className="border-gray-100" />

        {/* Popular Tags */}
        <div>
          <SectionHeader
            title="Popular Tag"
            open={openSections.tags}
            toggle={() => toggleSection("tags")}
          />
          {openSections.tags && (
            <div className="mt-3 flex flex-wrap gap-2">
              {tags.map((tag) => {
                const active = selectedTags.includes(tag);
                return (
                  <button
                    key={tag}
                    onClick={() => toggleTag(tag)}
                    className={`rounded-full px-3 py-1 text-xs font-medium border transition-all active:scale-95 ${
                      active
                        ? "bg-green-500 text-white border-green-500 shadow-sm"
                        : "bg-white text-gray-600 border-gray-200 hover:border-green-400 hover:text-green-600"
                    }`}
                  >
                    {tag}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
