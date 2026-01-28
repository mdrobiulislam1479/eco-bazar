import Image from "next/image";
import Container from "../ui/Container";

const Partner = () => {
  return (
    <Container className="relative h-32 md:h-40">
      <Image
        src="/CompanyLogo.png"
        alt="partner-logo"
        fill
        className="object-contain"
        priority
      />
    </Container>
  );
};

export default Partner;
