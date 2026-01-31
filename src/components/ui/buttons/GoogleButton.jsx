"use client";
import { FcGoogle } from "react-icons/fc";

import { signIn } from "next-auth/react";

export default function GoogleButton() {
  return (
    <button
      onClick={() => signIn("google")}
      className="flex items-center justify-center gap-2 w-full bg-[#00B20710] border border-gray-100 hover:border-[#00B207] p-4  rounded-full cursor-pointer"
    >
      <FcGoogle /> Continue with Google
    </button>
  );
}
