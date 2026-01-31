import Image from "next/image";
import Container from "../ui/Container";
import SectionTitle from "../ui/SectionTitle";

export default function TrustedOrganicTop() {
  return (
    <section className="py-10 md:py-14">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div>
            <SectionTitle
              title={"100% Trusted\nOrganic Food Store"}
              subtitle="EcoBazar brings fresh and chemical-free produce straight from local farms. Shop with confidence and enjoy healthier meals everyday."
            />
          </div>

          <div className="relative">
            <div className="relative h-65 md:h-120 w-full overflow-hidden rounded-2xl bg-zinc-100">
              <Image
                src="/trusted-top.png"
                alt="Farmer with vegetables"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
