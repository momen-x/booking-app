import { LoginForm } from "@/app/_modules/auth/views/login-form";
import { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Signin",
  description: "Best Booking App",
};
const LoginPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <LoginForm />
    </div>
  );
};

export default LoginPage;
