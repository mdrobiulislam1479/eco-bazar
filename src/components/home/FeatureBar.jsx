import { Truck, Headphones, ShieldCheck, Package } from "lucide-react";
import Container from "../ui/Container";

const FEATURES = [
  {
    icon: Truck,
    title: "Free Shipping",
    desc: "Free shipping on all your order",
  },
  {
    icon: Headphones,
    title: "Customer Support 24/7",
    desc: "Instant access to Support",
  },
  {
    icon: ShieldCheck,
    title: "100% Secure Payment",
    desc: "We ensure your money is safe",
  },
  {
    icon: Package,
    title: "Money-Back Guarantee",
    desc: "30 Days Money-Back Guarantee",
  },
];

const FeatureBar = () => {
  return (
    <section className="pb-6">
      <Container>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 rounded-xl bg-white shadow-[0_-2px_24px_rgba(0,0,0,0.08)] p-10">
          {FEATURES.map((item, index) => {
            const Icon = item.icon;
            return (
              <div key={index} className="flex items-start gap-4">
                <div className="text-green-600">
                  <Icon size={40} strokeWidth={1} />
                </div>

                <div>
                  <h4 className="text-[16px] font-semibold text-gray-900">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default FeatureBar;
