import Deals from "@/components/home/Deals";
import FeatureBar from "@/components/home/FeatureBar";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Hero from "@/components/home/Hero";
import InstagramFollow from "@/components/home/InstagramFollow";
import Partner from "@/components/home/Partner";
import PopularProducts from "@/components/home/PopularProducts";
import SummerSaleBanner from "@/components/home/SummerSaleBanner";
import Testimonials from "@/components/shared/Testimonials";

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
