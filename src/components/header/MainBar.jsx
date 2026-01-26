"use client";

import Link from "next/link";
import { Leaf, Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Container from "../ui/Container";
import IconButton from "../ui/IconButton";

const ICON_SIZE = 20;

export default function MainBar({ isMenuOpen = false, onToggleMenu }) {
  return (
    <div className="bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5 lg:gap-6">
        {/* Logo */}
        <Link
          className="inline-flex items-center gap-2 text-2xl font-bold text-[#1a1a1a] hover:opacity-80 transition-opacity shrink-0"
          href="/"
          aria-label="Ecobazar home"
        >
          <Leaf size={28} className="text-[#00b207]" />
          <span>Ecobazar</span>
        </Link>

        {/* Desktop Search */}
        <form
          className="order-3 hidden w-full max-w-140 flex-1 items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-4 py-2 lg:flex lg:order-0"
          role="search"
        >
          <Search size={ICON_SIZE} className="text-[#7a7a7a] shrink-0" />
          <input
            className="w-full flex-1 bg-transparent text-sm text-[#1a1a1a] outline-none placeholder-[#7a7a7a]"
            type="search"
            placeholder="Search"
            aria-label="Search products"
          />
          <button
            className="rounded-full bg-[#00b207] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#0a8a0f] shrink-0"
            type="submit"
          >
            Search
          </button>
        </form>

        {/* Actions */}
        <div className="order-2 flex items-center gap-4 lg:order-0 lg:gap-5">
          <IconButton label="Wishlist">
            <Heart size={ICON_SIZE} />
          </IconButton>

          <div className="flex items-center gap-2 lg:gap-3">
            <button
              className="relative p-1 text-[#1a1a1a] hover:text-[#00b207] transition-colors"
              type="button"
              aria-label="Shopping cart"
            >
              <ShoppingCart size={ICON_SIZE} />
              <span className="absolute -right-1 -top-1 rounded-full bg-[#00b207] px-1.5 py-0.5 text-xs font-bold leading-none text-white">
                2
              </span>
            </button>

            <div className="hidden flex-col text-xs text-[#7a7a7a] lg:flex">
              <span>Shopping cart:</span>
              <span className="text-sm font-semibold text-[#1a1a1a]">
                $57.00
              </span>
            </div>
          </div>

          {/* Mobile Menu */}
          <button
            className="lg:hidden p-1 text-[#1a1a1a] hover:text-[#00b207] transition-colors"
            type="button"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={onToggleMenu}
          >
            {isMenuOpen ? <X size={ICON_SIZE} /> : <Menu size={ICON_SIZE} />}
          </button>
        </div>
      </Container>

      {/* Mobile Search */}
      <div className="lg:hidden">
        <Container className="pb-4">
          <form
            className="flex items-center gap-2 rounded-full border border-[#e6e6e6] bg-white px-4 py-2"
            role="search"
          >
            <Search size={ICON_SIZE} className="text-[#7a7a7a] shrink-0" />
            <input
              className="w-full flex-1 bg-transparent text-sm text-[#1a1a1a] outline-none placeholder-[#7a7a7a]"
              type="search"
              placeholder="Search"
              aria-label="Search products"
            />
            <button
              className="rounded-full bg-[#00b207] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#0a8a0f] shrink-0 sm:px-6 sm:text-sm"
              type="submit"
            >
              Search
            </button>
          </form>
        </Container>
      </div>
    </div>
  );
}
