import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const SummerSaleBanner = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="relative h-55 sm:h-65 md:h-75 rounded-2xl overflow-hidden">
          {/* Background image */}
          <Image
            src="/summer-sale.png"
            alt="summer sale banner"
            fill
            priority
            className="object-cover"
          />

          {/* Dark overlay for readability */}
          <div className="absolute inset-0 bg-black/55 lg:hidden" />

          {/* Content */}
          <div className="relative z-10 h-full flex items-center justify-end px-6 sm:px-10">
            <div className="max-w-md text-white space-y-3">
              <p className="uppercase tracking-widest text-gray-300">
                Summer Sale
              </p>

              <h2 className="text-2xl sm:text-3xl md:text-5xl font-semibold">
                <span className="text-orange-400">37%</span> OFF
              </h2>

              <p className=" text-[#FFFFFF90] leading-relaxed">
                Free on all your order, Free Shipping and 30 days money-back
                guarantee
              </p>

              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-full bg-[#00B207] px-6 py-2 text-sm font-semibold text-white hover:bg-green-600 transition"
              >
                Shop Now →
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SummerSaleBanner;
