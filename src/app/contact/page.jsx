import Container from "@/components/ui/Container";
import Map from "@/components/ui/Map";
import { MapPin, Mail, Phone } from "lucide-react";

export default function ContactSection() {
  return (
    <section>
      <Container className="py-20">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
          {/* Left Info Card */}
          <div className="lg:col-span-4 h-full">
            <div className="rounded-xl bg-white p-8 shadow-[0_-2px_24px_rgba(0,0,0,0.08)]">
              <InfoItem
                icon={
                  <MapPin
                    className="text-[#2C742F]"
                    size={50}
                    strokeWidth={1}
                  />
                }
                lines="Khulna, Bangladesh"
              />
              <Divider />
              <InfoItem
                icon={
                  <Mail className="text-[#2C742F]" size={50} strokeWidth={1} />
                }
                t
                lines="Proxy@gmail.com"
              />
              <Divider />
              <InfoItem
                icon={
                  <Phone className="text-[#2C742F]" size={50} strokeWidth={1} />
                }
                lines="(219) 555-0114"
              />
            </div>
          </div>

          {/* Right Form */}
          <div className="lg:col-span-8">
            <div className="rounded-xl bg-white p-8 shadow-[0_-2px_24px_rgba(0,0,0,0.08)]">
              <h2 className="text-2xl font-semibold text-zinc-900">
                Just Say Hello!
              </h2>
              <p className="mt-2 text-sm text-zinc-500">
                Do you fancy saying hi to me or you want to get started with
                your project and you need my help? Feel free to contact me.
              </p>

              <form className="mt-6 space-y-4">
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                  <input
                    className="h-11 w-full rounded-lg border border-zinc-200 px-4 text-sm outline-none focus:border-emerald-500"
                    placeholder="Your Name"
                  />
                  <input
                    className="h-11 w-full rounded-lg border border-zinc-200 px-4 text-sm outline-none focus:border-emerald-500"
                    placeholder="Email Address"
                    type="email"
                  />
                </div>

                <input
                  className="h-11 w-full rounded-lg border border-zinc-200 px-4 text-sm outline-none focus:border-emerald-500"
                  placeholder="Message"
                />

                <textarea
                  className="min-h-[120px] w-full rounded-lg border border-zinc-200 px-4 py-3 text-sm outline-none focus:border-emerald-500"
                  placeholder="Subjects"
                />

                <button
                  type="button"
                  className="inline-flex h-11 items-center justify-center rounded-full bg-[#00B207] px-7 text-sm font-semibold text-white hover:bg-green-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </Container>
      <Map />
    </section>
  );
}

function InfoItem({ icon, title, lines }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div>{icon}</div>
      <p className="mt-2 text-sm text-zinc-600">{lines}</p>
    </div>
  );
}

function Divider() {
  return <div className="my-6 h-px w-full bg-zinc-100" />;
}
