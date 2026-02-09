"use client";

import { Search, Heart, ShoppingCart, Menu, X } from "lucide-react";
import Container from "../../ui/Container";
import Logo from "../../ui/Logo";
import Link from "next/link";
import { useGetWishlistQuery } from "@/redux/api/wishlistApi";
import { useGetCartQuery } from "@/redux/api/cartApi";
import { useGetGroceriesQuery } from "@/redux/api/productsApi";

const ICON_SIZE = 20;

export default function MainBar({ isMenuOpen = false, onToggleMenu }) {
  const { data: wishlistData, isLoading: wishlistLoading } =
    useGetWishlistQuery();
  const { data: cartData, isLoading: cartLoading } = useGetCartQuery();
  const { data: groceryData } = useGetGroceriesQuery();

  const wishlistCount = wishlistData?.items?.length || 0;
  const cartCount = cartData?.cart?.items?.length || 0;

  const cartItems = cartData?.cart?.items || [];
  const products = groceryData?.products || [];

  const productMap = new Map(products.map((p) => [p.id, p]));

  const cartTotal = cartItems.reduce((sum, item) => {
    const p = productMap.get(item.productId);
    if (!p) return sum;
    return sum + Number(p.price) * Number(item.qty || 0);
  }, 0);

  const totalText = cartLoading ? "..." : `$${cartTotal.toFixed(2)}`;

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
          <Link href="/wishlist" className="hover:text-[#00b207] relative">
            <Heart size={ICON_SIZE} />
            <span className="absolute -right-2 -top-2 rounded-full bg-[#00b207] px-1.5 py-0.5 text-xs font-bold leading-none text-white">
              {wishlistLoading ? 0 : wishlistCount}
            </span>
          </Link>

          <div className="flex items-center gap-2 lg:gap-3">
            <Link
              href="/cart"
              className="relative p-1 text-[#1a1a1a] hover:text-[#00b207] transition-colors"
            >
              <ShoppingCart size={ICON_SIZE} />
              <span className="absolute -right-1 -top-1 rounded-full bg-[#00b207] px-1.5 py-0.5 text-xs font-bold leading-none text-white">
                {cartLoading ? 0 : cartCount}
              </span>
            </Link>

            <div className="hidden flex-col text-xs text-[#7a7a7a] lg:flex">
              <span>Shopping cart:</span>
              <span className="text-sm font-semibold text-[#1a1a1a]">
                {totalText}
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
