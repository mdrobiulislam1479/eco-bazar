"use client";

import Link from "next/link";
import React from "react";

const Button = ({ href = "", children }) => {
  return (
    <Link
      href={href}
      className="rounded-full bg-[#00b207] px-6 py-3 text-sm text-center font-semibold text-white transition hover:bg-[#009a06]"
    >
      {children}
    </Link>
  );
};

export default Button;
