import Deals from "@/components/home/Deals";
import FeatureBar from "@/components/home/FeatureBar";
import Hero from "@/components/home/Hero";
import InstagramFollow from "@/components/home/InstagramFollow";
import Partner from "@/components/home/Partner";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureBar />
      <Deals />
      <Partner />
      <InstagramFollow />
    </div>
  );
};

export default Home;
