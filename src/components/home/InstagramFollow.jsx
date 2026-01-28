import Image from "next/image";
import { Instagram } from "lucide-react";
import Container from "../ui/Container";

const IG_ITEMS = [
  { src: "/ig1.png", alt: "Instagram post 1" },
  { src: "/ig2.png", alt: "Instagram post 2" },
  { src: "/ig3.png", alt: "Instagram post 3" },
  { src: "/ig4.png", alt: "Instagram post 4" },
  { src: "/ig5.png", alt: "Instagram post 5" },
  { src: "/ig6.png", alt: "Instagram post 6" },
];

export default function InstagramFollow() {
  return (
    <section className="py-12">
      <Container>
        <h2 className="text-center text-3xl font-semibold text-gray-900 mb-8">
          Follow us on Instagram
        </h2>

        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-5">
          {IG_ITEMS.map((item, idx) => (
            <div
              key={idx}
              className="group relative block h-50 w-full overflow-hidden rounded-xl cursor-pointer"
              aria-label={item.alt}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* hover overlay */}
              <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/35" />

              {/* instagram icon */}
              <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-green-200/60">
                <span className="grid h-10 w-10 place-items-center rounded-full bg-white/15 backdrop-blur">
                  <Instagram className="text-white" size={18} />
                </span>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
