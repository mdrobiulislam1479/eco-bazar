"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import { Quote, ArrowLeft, ArrowRight } from "lucide-react";

export const reviews = [
  {
    id: 1,
    name: "Robert Fox",
    role: "Customer",
    rating: 5,
    message:
      "Fresh items, fast delivery, and the packaging was perfect. I’ll definitely order again!",
  },
  {
    id: 2,
    name: "Dianne Russell",
    role: "Customer",

    rating: 5,
    message:
      "The fruits were super fresh and arrived on time. Great service and easy checkout experience.",
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Customer",

    rating: 4,
    message:
      "Good quality groceries and reasonable pricing. Customer support was also very helpful.",
  },
  {
    id: 4,
    name: "Courtney Henry",
    role: "Customer",

    rating: 5,
    message:
      "Loved the clean UI and smooth order process. Cash on delivery was super convenient for me.",
  },
  {
    id: 5,
    name: "Wade Warren",
    role: "Customer",

    rating: 4,
    message:
      "Delivery was quick and items were fresh. The cart and wishlist features are really useful.",
  },
  {
    id: 6,
    name: "Jenny Wilson",
    role: "Customer",

    rating: 5,
    message:
      "Excellent service! Fresh produce, accurate quantities, and the order summary is clear.",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#f2f2f2] py-20 px-4 h-fit">
      <div className="max-w-7xl mx-auto">
        {/* Header Area */}
        <div className="flex justify-between items-end mb-8">
          <h2 className="text-3xl font-semibold text-gray-900">
            Client Testimonials
          </h2>

          {/* Custom Navigation Buttons */}
          <div className="flex gap-3">
            <button className="swiper-prev-btn flex items-center justify-center w-12 h-12 rounded-full bg-white border border-gray-200 hover:shadow-md transition-all group">
              <span className="text-xl group-hover:-translate-x-0.5 transition-transform">
                <ArrowLeft />
              </span>
            </button>
            <button className="swiper-next-btn flex items-center justify-center w-12 h-12 rounded-full bg-[#00b207] text-white hover:bg-[#009606] transition-all group">
              <span className="text-xl group-hover:translate-x-0.5 transition-transform">
                <ArrowRight />
              </span>
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{
            nextEl: ".swiper-next-btn",
            prevEl: ".swiper-prev-btn",
          }}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-4"
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className="bg-white p-8 rounded-lg shadow-sm  flex flex-col justify-between border border-transparent hover:border-green-100 transition-colors">
                <div>
                  {/* Quote Icon */}
                  <div className="text-[#a8e0a9] mb-4">
                    <Quote size={32} />
                  </div>
                  <p className="text-gray-600 leading-relaxed mb-8 text-sm">
                    {review.message}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    {/* images shape*/}
                    <div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900 leading-none">
                        {review.name}
                      </h4>
                      <span className="text-sm text-gray-400">
                        {review.role}
                      </span>
                    </div>
                  </div>

                  {/* Stars */}
                  <div className="flex gap-0.5 text-[#ff8a00]">
                    {[...Array(review.rating)].map((_, i) => (
                      <span key={i} className="text-lg">
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
