"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const AuthButton = ({ onNavigate, className = "" }) => {
  const { status } = useSession();

  return (
    <div onClick={onNavigate} className={className}>
      {status === "loading" ? (
        <p className="py-1">Loading...</p>
      ) : status === "authenticated" ? (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            signOut();
          }}
          className="text-sm px-2 py-1 rounded hover:text-[#00b207] transition-colors whitespace-nowrap cursor-pointer"
        >
          Logout
        </button>
      ) : (
        <Link
          href="/auth/login"
          className="text-sm px-2 py-1 rounded hover:text-[#00b207]  transition-colors whitespace-nowrap"
        >
          Sign In / Sign Up
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
