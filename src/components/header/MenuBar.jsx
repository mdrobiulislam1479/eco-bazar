"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Container from "../ui/Container";
import NavLink from "../ui/buttons/NavLink";

const ICON_SIZE = 20;

const NAV_LINKS = () => {
  return (
    <>
      <NavLink href={"/"}>Home</NavLink>
      <NavLink href={"/shop"}>Shop</NavLink>
      <NavLink href={"/blog"}>Blog</NavLink>
      <NavLink href={"/about"}>About Us</NavLink>
      <NavLink href={"/contact"}>Contact Us</NavLink>
    </>
  );
};

export default function MenuBar({ isMenuOpen = false, onNavigate }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block border-y border-[#e6e6e6] bg-white">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-3">
          <nav
            className="flex flex-wrap items-center justify-center gap-5"
            aria-label="Primary navigation"
          >
            <NAV_LINKS />
          </nav>

          <div className="inline-flex items-center gap-2 font-semibold text-[#666666]">
            <Phone size={ICON_SIZE} />
            <span className="text-sm">(219) 555-0114</span>
          </div>
        </Container>
      </div>

      {/* Mobile */}
      {isMenuOpen && (
        <div className="lg:hidden border-t border-[#e6e6e6] bg-white">
          <Container className="py-4">
            <nav
              className="flex flex-col gap-2 mb-4"
              aria-label="Mobile navigation"
            >
              <NAV_LINKS />

              <Link
                className="text-sm font-semibold px-2 py-2 rounded hover:text-[#00b207] hover:bg-[#1a1a1a] transition-colors"
                href="/auth"
                onClick={onNavigate}
              >
                Sign In / Sign Up
              </Link>
            </nav>

            <div className="flex items-center gap-2 font-semibold text-[#1a1a1a] border-t border-[#e6e6e6] pt-4">
              <Phone size={ICON_SIZE} className="text-[#7a7a7a]" />
              <span className="text-sm">(219) 555-0114</span>
            </div>
          </Container>
        </div>
      )}
    </>
  );
}
