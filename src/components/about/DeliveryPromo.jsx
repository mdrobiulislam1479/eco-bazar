import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";
import { Check } from "lucide-react";

export default function DeliveryPromo() {
  return (
    <section className="pt-12 md:pt-16">
      <Container>
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <SectionTitle
              title={"We Delivered, You\nEnjoy Your Order."}
              subtitle=" From careful packing to fast delivery, we make sure your groceries arrive fresh. Choose EcoBazar for a clean and easy shopping experience."
            />

            <ul className="mt-5 space-y-2 text-sm text-zinc-600">
              <li className="flex items-center gap-2">
                <div className="p-1 bg-[#00B20730] rounded-full">
                  <Check className="text-[#2C742F]" />
                </div>
                Freshly harvested items.
              </li>
              <li className="flex items-center gap-2">
                <div className="p-1 bg-[#00B20730] rounded-full">
                  <Check className="text-[#2C742F]" />
                </div>
                Hygienic packaging.
              </li>
              <li className="flex items-center gap-2">
                <div className="p-1 bg-[#00B20730] rounded-full">
                  <Check className="text-[#2C742F]" />
                </div>
                Fast delivery support.
              </li>
            </ul>

            <button className="mt-6 inline-flex h-11 items-center justify-center rounded-full bg-[#00B207] px-7 text-sm font-semibold text-white hover:bg-green-600">
              Shop Now →
            </button>
          </div>

          <div className="relative">
            <div className="relative h-80 md:h-130 md:w-200">
              <Image
                src="/delivery-man.png"
                alt="Delivery man"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
