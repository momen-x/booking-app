import { RegisterForm } from "@/app/_modules/auth/views/register-form";
import { Metadata } from "next";
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Signup",
  description: "Best Booking App",
};
const RegisterPage = () => {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <RegisterForm />
    </div>
  );
};

export default RegisterPage;
