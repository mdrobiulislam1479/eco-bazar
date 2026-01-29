import Image from "next/image";
import Container from "../ui/Container";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="py-6">
      <Container>
        <div className="grid grid-cols-6 grid-rows-2 gap-6 h-60 sm:h-80 md:h-110 lg:h-150">
          {/* Big banner */}
          <div className="relative col-span-6 lg:col-span-4 row-span-2 rounded-xl overflow-hidden">
            {/* background image */}
            <Image
              src="/BannarBig.png"
              alt="banner big image"
              fill
              priority
              className="object-cover"
            />

            {/* text content */}
            <div className="relative z-10 h-full flex items-center px-6 sm:px-10">
              <div className="max-w-md text-white space-y-4">
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-semibold leading-tight">
                  Fresh & Healthy <br /> Organic Food
                </h1>

                <div className="pl-3 border-l-2 border-[#84D187]">
                  <p className="sm:text-xl text-gray-200 pb-2">
                    Sale up to{" "}
                    <span className="bg-[#FF8A00] px-1 sm:px-2 py-1 rounded text-white ">
                      30% OFF
                    </span>
                  </p>

                  <p className="text-xs sm:text-sm text-[#FFFFFF90]">
                    Free shipping on all your order.
                  </p>
                </div>

                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#00B207] hover:bg-green-100 transition"
                >
                  Shop Now →
                </Link>
              </div>
            </div>
          </div>

          {/* Right top */}
          <div className="relative col-span-2 rounded-xl overflow-hidden hidden lg:block">
            <Image
              src="/BannerBag.png"
              alt="banner bag"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 p-8 text-gray-900">
              <p className="text-sm uppercase tracking-wide font-medium">
                Summer Sale
              </p>
              <h3 className="text-3xl font-semibold">75% OFF</h3>
              <p className="text-xs text-gray-600 mt-1">
                Only Fruit & Vegetable
              </p>

              <Link
                href="/shop"
                className="mt-5 inline-block text-sm font-semibold text-[#00B207]"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Right bottom */}
          <div className="relative col-span-2 rounded-xl overflow-hidden hidden lg:block">
            <Image
              src="/BannarLeaf.png"
              alt="banner leaf"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
              <span className="text-sm uppercase tracking-wide">Best Deal</span>
              <h3 className="text-3xl font-semibold mt-1">
                Special Products <br /> Deal of the Month
              </h3>

              <Link
                href="/shop"
                className="mt-5 text-sm font-semibold text-[#00B207]"
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

export default Hero;
