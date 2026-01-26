"use client";

import Link from "next/link";
import { Phone } from "lucide-react";
import Container from "../ui/Container";


const ICON_SIZE = 20;

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Blog", href: "/blog" },
  { label: "About Us", href: "/about" },
  { label: "Contact Us", href: "/contact" },
];

export default function MenuBar({ isMenuOpen = false, onNavigate }) {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block border-t border-[#e6e6e6] bg-white">
        <Container className="flex flex-wrap items-center justify-between gap-6 py-3">
          <nav
            className="flex flex-wrap items-center justify-center gap-5"
            aria-label="Primary navigation"
          >
            {NAV_LINKS.map((item) => (
              <Link
                key={item.href}
                className="relative text-sm font-semibold text-[#1a1a1a]
                  after:absolute after:left-0 after:-bottom-1.5 after:h-0.5 after:w-full after:origin-left after:scale-x-0
                  after:bg-[#00b207] after:transition
                  hover:after:scale-x-100 focus-visible:after:scale-x-100 hover:text-[#00b207]"
                href={item.href}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="inline-flex items-center gap-2 font-semibold text-[#1a1a1a]">
            <Phone size={ICON_SIZE} className="text-[#7a7a7a]" />
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
              {NAV_LINKS.map((item) => (
                <Link
                  key={item.href}
                  className="text-sm font-semibold text-[#1a1a1a] px-2 py-2 rounded hover:bg-[#f5f5f5] hover:text-[#00b207] transition-colors"
                  href={item.href}
                  onClick={onNavigate}
                >
                  {item.label}
                </Link>
              ))}

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
