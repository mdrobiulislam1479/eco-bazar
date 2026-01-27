"use client";

import { useState } from "react";
import TopBar from "./TopBar";
import MainBar from "./MainBar";
import MenuBar from "./MenuBar";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="bg-[#1A1A1A] text-[#1a1a1a]">
      <TopBar />
      <MainBar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <MenuBar isMenuOpen={isMenuOpen} onNavigate={closeMenu} />
    </header>
  );
}
