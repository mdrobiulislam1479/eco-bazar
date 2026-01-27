import { Leaf } from "lucide-react";
import Link from "next/link";

const Logo = () => {
  return (
    <div>
      <Link
        className="inline-flex items-center gap-2 text-3xl font-medium hover:opacity-80 transition-opacity shrink-0"
        href="/"
        aria-label="Ecobazar home"
      >
        <Leaf size={28} className="text-[#00b207]" />
        <span>Ecobazar</span>
      </Link>
    </div>
  );
};

export default Logo;
