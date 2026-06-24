"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import fields from "./inputs-data/login-data";
import ValidationInput from "@/components/ui/inputs/ValidationInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { LoginData, loginValidationSchema } from "../_dto/login-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLogin } from "../hooks/useLogin";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import Link from "next/link";

export function LoginForm() {
  const router = useRouter();
  const form = useForm<LoginData>({
    resolver: zodResolver(loginValidationSchema),
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onChange",
  });
  const { mutate: submitLogin, isPending } = useLogin();
  const onSubmit = (data: LoginData) => {
    submitLogin(data, {
      onSuccess: () => {
        toast.success("Welcome back!");
        setTimeout(() => {
          router.push("/");
          router.refresh();
        }, 500);
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      onError: (error: any) => {
        const errorMessage = getErrorMessage(error);
        toast.error(errorMessage);
      },
    });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Login to your account</CardTitle>
        <CardDescription>
          Enter your email below to login to your account
        </CardDescription>
        <CardAction>
          <Link href={"/register"}>
            <Button variant="link">Sign Up</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <Form {...form}>
        <form
          id="login-form"
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
        >
          <CardContent>
            {fields.map(({ name, title, placeholder, icon, type }) => (
              <div key={name} className="space-y-1.5 mt-2">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <span className="text-muted-foreground">{icon}</span>
                  {title}
                </div>
                <ValidationInput
                  fieldTitle=""
                  nameInSchema={name}
                  placeholder={placeholder}
                  className="h-10 rounded-xl"
                  type={type}
                />
              </div>
            ))}
          </CardContent>
        </form>
        <CardFooter className="flex-col gap-2">
          <Button
            type="submit"
            form="login-form"
            className="w-full rounded-xl bg-white text-black dark:bg-black dark:text-white"
            disabled={isPending}
          >
            Login
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
