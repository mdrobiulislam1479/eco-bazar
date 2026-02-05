"use client";

import Image from "next/image";
import { useState } from "react";
import { Plus, Minus, Leaf, Truck, ShieldCheck, Sprout } from "lucide-react";
import Container from "../ui/Container";

const faqs = [
  {
    q: "What makes EcoBazar different?",
    a: "We focus on farm-fresh, chemical-free products sourced directly from trusted local farmers—so you get better taste, nutrition, and transparency.",
    icon: Leaf,
  },
  {
    q: "Where do your products come from?",
    a: "Our fruits and vegetables are collected from verified local farms and checked for quality before they reach your doorstep.",
    icon: Sprout,
  },
  {
    q: "How fresh is the delivery?",
    a: "We pack orders carefully and deliver fast to preserve freshness—perfect for daily cooking and healthy meals.",
    icon: Truck,
  },
  {
    q: "Is EcoBazar safe and reliable?",
    a: "Yes. We run quality checks, handle items hygienically, and use eco-friendly packaging to protect your food and the planet.",
    icon: ShieldCheck,
  },
];

export default function AboutEcoBazar() {
  const [open, setOpen] = useState(0);

  return (
    <section className="pt-12 md:pt-16">
      <Container>
        <div className="grid items-center gap-10 xl:grid-cols-2">
          {/* Left */}
          <div className="pb-10">
            <h2 className="mt-2 text-3xl font-semibold leading-tight text-zinc-900 md:text-5xl">
              Welcome, Let’s Talk <br className="hidden md:block" />
              About Our EcoBazar
            </h2>

            {/* Accordion */}
            <div className="mt-6 space-y-3">
              {faqs.map((item, idx) => {
                const isOpen = open === idx;

                return (
                  <div
                    key={item.q}
                    className={`rounded-sm   transition ${
                      isOpen ? "border border-[#84D187]" : "bg-gray-100"
                    }`}
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : idx)}
                      className="flex w-full items-center justify-between gap-4 p-4 text-left"
                    >
                      <span
                        className={`font-semibold ${isOpen ? "text-[#84D187]" : "text-zinc-900"} `}
                      >
                        {item.q}
                      </span>

                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-50">
                        {isOpen ? (
                          <Minus className="h-4 w-4 text-zinc-700" />
                        ) : (
                          <Plus className="h-4 w-4 text-zinc-700" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 border-t border-[#84D187]">
                        <p className="leading-6 text-zinc-600 pt-2">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            <div className="relative mx-auto aspect-square w-full  overflow-hidden rounded-2xl">
              <Image
                src="/about-farmer.png"
                alt="EcoBazar farmer holding fresh vegetables"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
