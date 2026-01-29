import Image from "next/image";
import Link from "next/link";
import Container from "../ui/Container";

const Deals = () => {
  return (
    <section className="py-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 – Sale of the Month */}
          <div className="relative rounded-2xl overflow-hidden text-white">
            <Image
              src="/deal-veg.png"
              alt="sale of the month"
              fill
              className="object-cover"
            />

            <div className="relative z-10 p-8 h-70 md:h-100 lg:h-125 text-center">
              <div>
                <p className="text-sm tracking-widest uppercase opacity-80">
                  Best Deals
                </p>
                <h3 className="text-4xl font-semibold mt-2">
                  Sale of the Month
                </h3>

                <div className="mt-4 flex justify-center gap-4 text-center text-sm mx-auto">
                  {["00", "02", "18", "46"].map((time, i) => (
                    <div key={i}>
                      <p className="text-2xl">{time}</p>
                      <span className="text-xs opacity-80">
                        {["DAYS", "HOURS", "MINS", "SECS"][i]}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <Link
                href="/shop"
                className="mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#00B207] hover:bg-green-100 transition"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Card 2 – Low Fat Meat */}
          <div className="relative rounded-2xl overflow-hidden text-white ">
            <Image
              src="/deal-meat.png"
              alt="low fat meat"
              fill
              className="object-cover"
            />

            <div className="relative z-10 p-8 h-70 md:h-100 lg:h-125 text-center">
              <div>
                <p className="text-sm uppercase tracking-widest opacity-80">
                  85% Fat Free
                </p>
                <h3 className="text-4xl font-semibold mt-2">Low-Fat Meat</h3>
                <p className="mt-2 text-xl">
                  Started at{" "}
                  <span className="text-orange-400 font-semibold">$79.99</span>
                </p>
              </div>

              <Link
                href="/shop"
                className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#00B207] hover:bg-green-100 transition"
              >
                Shop Now →
              </Link>
            </div>
          </div>

          {/* Card 3 – Fresh Fruit */}
          <div className="relative rounded-2xl overflow-hidden text-gray-900 ">
            <Image
              src="/deal-fruit.png"
              alt="fresh fruit"
              fill
              className="object-cover"
            />

            <div className="relative z-10 p-8 h-70 md:h-100 lg:h-125 text-center">
              <div>
                <p className="text-sm uppercase tracking-widest">Summer Sale</p>
                <h3 className="text-4xl font-bold mt-2">100% Fresh Fruit</h3>
                <p className="mt-2 text-xl">
                  Up to{" "}
                  <span className="bg-black text-yellow-400 px-2 py-1 rounded font-semibold">
                    64% OFF
                  </span>
                </p>
              </div>

              <Link
                href="/shop"
                className="mx-auto mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-2 text-sm font-semibold text-[#00B207] hover:bg-green-100 transition"
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

export default Deals;
