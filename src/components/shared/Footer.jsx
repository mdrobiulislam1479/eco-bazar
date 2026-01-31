// app/components/Footer.tsx  (Next.js App Router)
// or: components/Footer.tsx

import Link from "next/link";
import Image from "next/image";
import Container from "../ui/Container";
import Logo from "../ui/Logo";

const footerCols = [
  {
    title: "My Account",
    links: [
      { label: "My Account", href: "#" },
      { label: "Order History", href: "#" },
      { label: "Shopping Cart", href: "#" },
      { label: "Wishlist", href: "#" },
    ],
  },
  {
    title: "Helps",
    links: [
      { label: "Contact", href: "#" },
      { label: "Faqs", href: "/faqs" },
      { label: "Terms & Condition", href: "#" },
      { label: "Privacy Policy", href: "#" },
    ],
  },
  {
    title: "Proxy",
    links: [
      { label: "About", href: "#" },
      { label: "Shop", href: "#" },
      { label: "Product", href: "#" },
      { label: "Track Order", href: "#" },
    ],
  },
  {
    title: "Categories",
    links: [
      { label: "Fruit & Vegetables", href: "#" },
      { label: "Meat & Fish", href: "#" },
      { label: "Bread & Bakery", href: "#" },
      { label: "Beauty & Health", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white pt-10">
      {/* top */}

      <Container>
        <div className="flex justify-between flex-wrap gap-10">
          {/* Brand */}
          <div>
            <div className="text-white">
              <Logo />
            </div>

            <p className="mt-4 max-w-xs text-sm leading-6 text-white/55">
              Fresh, organic, and responsibly sourced products for a healthier
              everyday life.
            </p>

            <div className="mt-6 flex items-center gap-3 text-sm">
              <Link
                href="tel:+12195550114"
                className="border-b border-[#00b207] pb-1 text-white/90 hover:text-white"
              >
                (219) 555-0114
              </Link>
              <span className="text-white/35">or</span>
              <Link
                href="mailto:proxy@gmail.com"
                className="border-b border-[#00b207] pb-1 text-white/90 hover:text-white"
              >
                Proxy@gmail.com
              </Link>
            </div>
          </div>

          {/* Columns */}
          {footerCols
            .filter((c) => c.type !== "brand")
            .map((col) => (
              <div key={col.title}>
                <h4 className="text-md font-semibold">{col.title}</h4>
                <ul className="mt-4 space-y-3 text-sm text-white/60">
                  {col.links?.map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        className="transition-colors hover:text-[#00b207]"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="mt-12 h-px w-full bg-white/10" />

        {/* bottom */}
        <div>
          <div className="mx-auto flex w-100vw flex-col gap-4 py-5 items-center md:flex-row md:items-center md:justify-between">
            <p className="text-xs text-white/45">
              Ecobazar eCommerce © {new Date().getFullYear()}. All Rights
              Reserved
            </p>

            {/* payment badges */}
            <div className="flex items-center gap-2">
              {["ApplePay", "VISA", "Discover", "MasterCard", "Secure"].map(
                (t) => (
                  <span
                    key={t}
                    className="inline-flex h-8 items-center justify-center rounded-md bg-[#141414] px-3 text-[11px] text-white/70 ring-1 ring-white/10"
                  >
                    {t}
                  </span>
                ),
              )}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
