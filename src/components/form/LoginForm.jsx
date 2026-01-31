import Link from "next/link";
import GoogleButton from "../ui/buttons/GoogleButton";

const LoginForm = () => {
  return (
    <div className="flex justify-center">
      <div className="bg-white p-6 w-130 shadow-[0_-2px_24px_rgba(0,0,0,0.08)] my-20 mx-3 rounded-md space-y-5">
        <h2 className="text-3xl font-semibold text-center">Sign In</h2>
        <form className="flex flex-col space-y-5">
          <input
            type="email"
            placeholder="Email"
            className="border border-[#E5E5E5] p-4 rounded-md"
          />
          <input
            type="password"
            placeholder="Password"
            className="border border-[#E5E5E5] p-4 rounded-md"
          />
          <button className="bg-[#00B207] hover:bg-green-600 p-4 text-white rounded-full cursor-pointer">
            Sign In
          </button>
        </form>

        <GoogleButton />
        <div className="flex justify-center items-center gap-1">
          <p className="text-sm text-[#666666]">Don’t have account?</p>
          <Link href="/auth/register" className="text-sm font-bold">
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
