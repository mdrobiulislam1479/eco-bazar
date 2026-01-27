import { Facebook, Twitter, Instagram } from "lucide-react";
import Container from "../ui/Container";

export default function Newsletter() {
  return (
    <section className="w-full bg-[#f7f7f7]">
      <Container className="py-10">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          {/* Left */}
          <div>
            <h3 className="text-xl font-semibold text-[#1a1a1a]">
              Subscribe our Newsletter
            </h3>
            <p className="mt-2 max-w-md text-sm text-[#6b6b6b]">
              Get the latest updates, exclusive offers, and fresh product news
              delivered straight to your inbox.
            </p>
          </div>

          {/* Right */}
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            {/* input + button */}
            <div className="flex w-full overflow-hidden rounded-full bg-white shadow-sm">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-5 py-3 text-sm text-gray-700 outline-none"
              />
              <button className="rounded-full bg-[#00b207] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#009a06]">
                Subscribe
              </button>
            </div>

            {/* social icons */}
            <div className="flex items-center gap-3">
              <a className="flex h-9 w-9 items-center justify-center rounded-full bg-[#00b207] text-white hover:opacity-90">
                <Facebook size={16} />
              </a>
              <a className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 hover:bg-gray-100">
                <Twitter size={16} />
              </a>
              <a className="flex h-9 w-9 items-center justify-center rounded-full bg-white text-gray-600 hover:bg-gray-100">
                <Instagram size={16} />
              </a>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
