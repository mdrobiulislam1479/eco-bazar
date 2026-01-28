"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home } from "lucide-react";
import Image from "next/image";
import Container from "../ui/Container";

export default function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter(Boolean);

  return (
    <>
      {pathname === "/" ? (
        ""
      ) : (
        <section className="relative w-full h-14 lg:h-28">
          {/* Background image */}
          <Image
            src="/Breadcrumbs.png"
            alt="breadcrumbs"
            fill
            className="object-cover"
            priority
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40" />

          {/* Content overlay */}
          <Container className="relative h-full flex items-center">
            <nav className="flex items-center gap-2 text-sm text-gray-200">
              <Link
                href="/"
                className="flex items-center gap-1 hover:text-green-400"
              >
                <Home size={16} />
              </Link>

              {segments.map((segment, index) => {
                const href = "/" + segments.slice(0, index + 1).join("/");
                const isLast = index === segments.length - 1;

                return (
                  <div key={href} className="flex items-center gap-2">
                    <span className="text-gray-300">&gt;</span>
                    {isLast ? (
                      <span className="text-green-400 capitalize">
                        {segment}
                      </span>
                    ) : (
                      <Link
                        href={href}
                        className="hover:text-green-400 capitalize"
                      >
                        {segment}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>
          </Container>
        </section>
      )}
    </>
  );
}
