"use client";

import { Phone } from "lucide-react";
import Container from "../../ui/Container";
import NavLink from "../../ui/buttons/NavLink";
import AuthButton from "@/components/ui/buttons/AuthButton";

const ICON_SIZE = 20;

const NAV_LINKS = ({ onNavigate }) => {
  return (
    <>
      <NavLink href="/" onNavigate={onNavigate}>
        Home
      </NavLink>
      <NavLink href="/shop" onNavigate={onNavigate}>
        Shop
      </NavLink>
      <NavLink href="/about" onNavigate={onNavigate}>
        About Us
      </NavLink>
      <NavLink href="/contact" onNavigate={onNavigate}>
        Contact Us
      </NavLink>
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
              <NAV_LINKS onNavigate={onNavigate} />

              <AuthButton
                onNavigate={onNavigate}
                className="flex items-center"
              />
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
