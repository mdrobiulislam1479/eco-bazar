import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import IconBadge from "../ui/IconBadge";
import {
  Leaf,
  Headphones,
  ShieldCheck,
  Truck,
  CreditCard,
  Package,
} from "lucide-react";

const features = [
  {
    title: "100% Organic Food",
    desc: "Healthy & fresh from farms.",
    icon: <Leaf className="h-5 w-5 text-[#00B207]" />,
  },
  {
    title: "Great Support 24/7",
    desc: "We’re always here to help.",
    icon: <Headphones className="h-5 w-5 text-[#00B207]" />,
  },
  {
    title: "Customer Feedback",
    desc: "Trusted by real customers.",
    icon: <Package className="h-5 w-5 text-[#00B207]" />,
  },
  {
    title: "100% Secure Payment",
    desc: "Safe checkout experience.",
    icon: <CreditCard className="h-5 w-5 text-[#00B207]" />,
  },
  {
    title: "Free Shipping",
    desc: "Fast delivery on orders.",
    icon: <Truck className="h-5 w-5 text-[#00B207]" />,
  },
  {
    title: "Quality Checked",
    desc: "Verified before delivery.",
    icon: <ShieldCheck className="h-5 w-5 text-[#00B207]" />,
  },
];

export default function TrustedOrganicFeatures() {
  return (
    <section className="pt-10 md:pt-14 bg-zinc-50">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div className="relative order-2 lg:order-1">
            <div className="relative h-95 md:h-150">
              <Image
                src="/about-farmer.png"
                alt="EcoBazar farmer"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 mb-10">
            <SectionTitle
              title="100% Trusted Organic Food Store"
              subtitle="We deliver farm-fresh products with quality checks, fast shipping, and reliable support—so your family eats better every day."
            />

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {features.map((f) => (
                <IconBadge
                  key={f.title}
                  icon={f.icon}
                  title={f.title}
                  desc={f.desc}
                />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
