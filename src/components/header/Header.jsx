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
    <header className="bg-white text-[#1a1a1a] shadow-[0_12px_30px_rgba(0,0,0,0.08)]">
      <TopBar />
      <MainBar isMenuOpen={isMenuOpen} onToggleMenu={toggleMenu} />
      <MenuBar isMenuOpen={isMenuOpen} onNavigate={closeMenu} />
    </header>
  );
}
