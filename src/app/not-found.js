import Button from "@/components/ui/buttons/Button";
import Image from "next/image";

const NotFound = () => {
  return (
    <div className="p-20 mx-auto flex flex-col w-full items-center gap-5">
      <Image src="/error.png" alt="error_404" width={400} height={200} />
      <p className="text-4xl font-semibold text-center">Oops! Page Not Found</p>
      <p className="text-[#808080] text-center">
        Looks like this page doesn’t exist. Let’s get you back home.
      </p>
      <Button
        href="/"
        className="rounded-full bg-[#00b207] px-6 py-3 text-sm text-center font-semibold text-white transition hover:bg-[#009a06]"
      >
        Back to Home
      </Button>
    </div>
  );
};

export default NotFound;
