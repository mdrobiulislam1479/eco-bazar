"use client";

import { MapPin } from "lucide-react";
import Container from "../ui/Container";

const ICON_SIZE = 20;

export default function TopBar() {
  return (
    <div className="bg-[#1A1A1A] text-[#f5f5f5] text-sm">
      <Container className="flex flex-wrap items-center gap-4 py-2.5 lg:gap-6 lg:justify-between">
        {/* Location */}
        <div className="flex flex-1 items-center justify-center lg:justify-start gap-2 min-w-55">
          <MapPin size={ICON_SIZE} className="shrink-0" />
          <span className="text-center lg:text-left">
            Store Location: Khulna, Bangladesh
          </span>
        </div>

        {/* Auth */}
        <div className="hidden lg:flex items-center gap-4">
          <a
            href="/auth"
            className="text-sm font-semibold px-2 py-1 rounded hover:text-[#00b207] hover:bg-[#1a1a1a] transition-colors whitespace-nowrap"
          >
            Sign In / Sign Up
          </a>
        </div>
      </Container>
    </div>
  );
}
