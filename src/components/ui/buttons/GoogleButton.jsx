"use client";
import { FcGoogle } from "react-icons/fc";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

export default function GoogleButton() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/";

  const handleLogin = async () => {
    const res = await signIn("google", {
      redirect: false,
      callbackUrl,
    });

    if (res?.url) router.push(res.url);
  };

  return (
    <button
      onClick={handleLogin}
      className="flex items-center justify-center gap-2 w-full bg-[#00B20710] border border-gray-100 hover:border-[#00B207] p-4 rounded-full cursor-pointer"
    >
      <FcGoogle />
      Continue with Google
    </button>
  );
}
