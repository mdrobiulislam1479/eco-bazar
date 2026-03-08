import LoginForm from "@/components/form/LoginForm";
import { Suspense } from "react";

export const metadata = {
  title: "Login",
};

const Login = () => {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
};

export default Login;
