"use client";

import { MapPin } from "lucide-react";
import Container from "../../ui/Container";
import AuthButton from "@/components/ui/buttons/AuthButton";

export default function TopBar() {
  return (
    <div className="bg-[#1A1A1A] text-[#B3B3B3] text-sm">
      <Container className="flex flex-wrap items-center gap-4 py-2.5 lg:gap-6 lg:justify-between font-light">
        {/* Location */}
        <div className="flex flex-1 items-center justify-center lg:justify-start gap-2 min-w-55">
          <MapPin size={20} className="shrink-0" />
          <span className="text-center lg:text-left">
            Store Location: Khulna, Bangladesh
          </span>
        </div>

        {/* Auth */}
        <AuthButton className="hidden lg:flex items-center gap-4" />
      </Container>
    </div>
  );
}
