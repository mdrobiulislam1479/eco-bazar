import Deals from "@/components/home/Deals";
import FeatureBar from "@/components/home/FeatureBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import InstagramFollow from "@/components/home/InstagramFollow";
import Partner from "@/components/home/Partner";
import PopularProducts from "@/components/home/PopularProducts";
import SummerSaleBanner from "@/components/home/SummerSaleBanner";
import Testimonials from "@/components/shared/Testimonials";

export const metadata = {
  title: "Home | Eco Bazar",
  description:
    "Discover the latest deals, featured products, and sustainable living tips at Eco Bazar. Shop now and make your lifestyle greener!",
  alternates: {
    canonical: "https://eco-bazar-one.vercel.app",
  },
};

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureBar />
      <PopularProducts />
      <Deals />
      <SummerSaleBanner />
      <FeaturedProducts />
      <Testimonials />
      <Partner />
      <InstagramFollow />
    </div>
  );
};

export default Home;
