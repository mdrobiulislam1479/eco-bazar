"use client";

import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Container from "../../ui/Container";
import IconButton from "../../ui/IconButton";
import Logo from "../../ui/Logo";
import Link from "next/link";

const ICON_SIZE = 20;

export default function MainBar({ isMenuOpen = false, onToggleMenu }) {
  return (
    <div className="bg-white">
      <Container className="flex flex-wrap items-center justify-between gap-4 py-5 lg:gap-6">
        {/* Logo */}
        <Logo />

        {/* Desktop Search */}
        <div className="hidden lg:inline w-130">
          <SearchField />
        </div>

        {/* Actions */}
        <div className="order-2 flex items-center gap-4 lg:order-0 lg:gap-5">
          <Link href="/wishlist">
            <Heart size={ICON_SIZE} />
          </Link>

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
          <SearchField />
        </Container>
      </div>
    </div>
  );
}

// Reusable search field
const SearchField = () => {
  return (
    <>
      <form
        className="order-3 w-full items-center gap-2 rounded-md border border-[#e6e6e6] bg-white pl-4 flex lg:order-0"
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
          className="bg-[#00b207] px-6 py-2 text-sm font-semibold text-white transition hover:bg-[#0a8a0f] shrink-0 rounded-r-md border border-[#00b207]"
          type="submit"
        >
          Search
        </button>
      </form>
    </>
  );
};
