import { Poppins } from "next/font/google";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/Footer";
import Newsletter from "@/components/shared/Newsletter";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Providers from "@/providers/Providers";
import { ToastContainer } from "react-toastify";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Eco Bazar",
    template: "%s | Eco Bazar",
  },

  description:
    "Shop organic groceries, eco‑friendly products, and sustainable lifestyle items at Eco Bazar. Free shipping on orders over $50.",
  keywords: [
    "eco bazar",
    "organic groceries",
    "sustainable products",
    "online store",
  ],
  authors: [{ name: "Eco Bazar", url: "https://eco-bazar-one.vercel.app" }],
  metadataBase: new URL("https://eco-bazar-one.vercel.app"),
  robots: {
    index: true,
    follow: true,
    "max-video-preview": -1,
    "max-image-preview": "large",
    "max-snippet": -1,
  },
  openGraph: {
    title: "Eco Bazar",
    description: "Your destination for organic and eco-friendly shopping.",
    url: "https://eco-bazar-one.vercel.app",
    siteName: "Eco Bazar",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://i.ibb.co/Kx7kw5Dv/Annotation-2026-02-26-121042.jpg",
        width: 1200,
        height: 630,
        alt: "Eco Bazar store front",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Eco Bazar",
    description: "Shop organic and eco-friendly products at Eco Bazar.",
    creator: "@ecobazar",
    images: ["https://i.ibb.co/Kx7kw5Dv/Annotation-2026-02-26-121042.jpg"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <Providers>
      <html lang="en" className={poppins.className}>
        <body className="flex flex-col min-h-screen">
          <Header />
          <Breadcrumb />
          <section className="flex-1">{children}</section>
          <Newsletter />
          <Footer />
          <ToastContainer />
        </body>
      </html>
    </Providers>
  );
}
