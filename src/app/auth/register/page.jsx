import RegisterForm from "@/components/form/RegisterForm";
import { Suspense } from "react";

const Register = () => {
  return (
    <Suspense>
      <RegisterForm />
    </Suspense>
  );
};

export default Register;
