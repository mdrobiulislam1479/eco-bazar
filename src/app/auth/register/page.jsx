import RegisterForm from "@/components/form/RegisterForm";
import { Suspense } from "react";

export const metadata = {
  title: "Register",
};

const Register = () => {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
};

export default Register;
