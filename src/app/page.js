import FeatureBar from "@/components/home/FeatureBar";
import Hero from "@/components/home/Hero";
import InstagramFollow from "@/components/home/InstagramFollow";
import Partner from "@/components/home/Partner";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeatureBar />
      <Partner />
      <InstagramFollow />
    </div>
  );
};

export default Home;
