"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const NavLink = ({ href, children, onNavigate }) => {
  const pathname = usePathname();

  const isActive = pathname === href || pathname.startsWith(href + "/");

  return (
    <Link
      href={href}
      onClick={onNavigate}
      className={`text-sm font-medium hover:text-[#00b207] transition ${isActive ? "text-[#00b207]" : "text-[#666666]"}`}
    >
      {children}
    </Link>
  );
};

export default NavLink;
