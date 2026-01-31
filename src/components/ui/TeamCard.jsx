import Image from "next/image";
import { Facebook, Twitter, Linkedin } from "lucide-react";

export default function TeamCard({ name, role, img }) {
  return (
    <div className="group rounded-2xl bg-white shadow-sm ring-1 ring-black/5 overflow-hidden">
      {/* Image */}
      <div className="relative h-70 w-full overflow-hidden">
        <Image
          src={img}
          alt={name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        {/* Social Icons */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 scale-95">
          <SocialIcon>
            <Facebook size={16} />
          </SocialIcon>
          <SocialIcon>
            <Twitter size={16} />
          </SocialIcon>
          <SocialIcon>
            <Linkedin size={16} />
          </SocialIcon>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <p className="text-xl font-medium text-zinc-900">{name}</p>
        <p className="text-sm text-zinc-500">{role}</p>
      </div>
    </div>
  );
}

function SocialIcon({ children }) {
  return (
    <span className="flex h-9 w-9 items-center justify-center rounded-full  text-white shadow hover:bg-green-600 transition">
      {children}
    </span>
  );
}
