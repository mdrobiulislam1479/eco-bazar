"use client";

import Link from "next/link";
import React from "react";

const Button = ({ href = "", children, className = "" }) => {
  return (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
};

export default Button;
