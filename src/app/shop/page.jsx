import ShopClient from "@/components/shop/ShopClient";

export const metadata = {
  title: "Shop Organic Groceries | Eco Bazar",
  description:
    "Explore Eco Bazar's shop for fresh organic groceries, eco-friendly products, and sustainable lifestyle essentials.",

  keywords: [
    "organic grocery",
    "eco friendly shop",
    "online grocery store",
    "sustainable products",
  ],

  alternates: {
    canonical: "https://eco-bazar-one.vercel.app/shop",
  },

  openGraph: {
    title: "Shop Organic Groceries | Eco Bazar",
    description:
      "Browse organic groceries and eco-friendly products at Eco Bazar.",
    url: "https://eco-bazar-one.vercel.app/shop",
    siteName: "Eco Bazar",
    images: [
      {
        url: "https://i.ibb.co/GmP29W4/image.png",
        width: 1200,
        height: 630,
        alt: "Eco Bazar Shop",
      },
    ],
    type: "website",
  },
};

const Shop = () => {
  return (
    <div>
      <ShopClient />
    </div>
  );
};

export default Shop;
