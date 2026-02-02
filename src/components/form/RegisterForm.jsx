"use client";
import Link from "next/link";
import GoogleButton from "../ui/buttons/GoogleButton";
import { useState } from "react";
import { postUser } from "@/actions/server/auth";
import { signIn } from "next-auth/react";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";

const RegisterForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  // input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // form submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();

    const result = await postUser(formData);

    if (result.acknowledged) {
      await signIn("credentials", {
        email: formData.email,
        password: formData.password,
        redirect: false,
      });
      router.push("/");
      Swal.fire("Success", "Registration Successful!", "success");
    }
    Swal.fire("Failed", "Registration Failed!", "error");
  };

  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 w-130 shadow-[0_-2px_24px_rgba(0,0,0,0.08)] my-20 mx-3 rounded-md space-y-5">
        <h2 className="text-3xl font-semibold text-center">Create Account</h2>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-[#E5E5E5] p-4 rounded-md"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-[#E5E5E5] p-4 rounded-md"
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="border border-[#E5E5E5] p-4 rounded-md"
            required
          />

          <button
            type="submit"
            className="bg-[#00B207] hover:bg-green-600 p-4 text-white rounded-full"
          >
            Sign Up
          </button>
        </form>
        <GoogleButton />
        <div className="flex justify-center items-center gap-1">
          <p className="text-sm text-[#666666]">Already have an account?</p>
          <Link href="/auth/login" className="text-sm font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
