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
import fields from "./inputs-data/register-data";
import ValidationInput from "@/components/ui/inputs/ValidationInput";
import { Form } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import {
  RegisterData,
  registerValidationSchema,
} from "../_dto/register-validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useRegister } from "../hooks/useRegister";
import { toast } from "react-toastify";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import Link from "next/link";

export function RegisterForm() {
  const router = useRouter();
  const form = useForm<RegisterData>({
    resolver: zodResolver(registerValidationSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    mode: "onChange",
  });
  const { mutate: submitRegister, isPending } = useRegister();
  const onSubmit = ({ username, email, password }: RegisterData) => {
    submitRegister(
      { username, email, password },
      {
        onSuccess: () => {
          toast.success("Registration successful! Please log in.");
          setTimeout(() => {
            router.push("/login");
            router.refresh();
          }, 500);
        },
        onError: (error) => {
          console.error("Registration failed:", error);
          const errorMessage = getErrorMessage(error);
          toast.error(errorMessage ?? "Registration failed. Please try again.");
        },
      },
    );
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Register for an account</CardTitle>
        <CardDescription>
          Enter your details below to create an account for your booking needs
        </CardDescription>
        <CardAction>
          <Link href={"/login"}>
            <Button variant="link">Sign in</Button>
          </Link>
        </CardAction>
      </CardHeader>
      <Form {...form}>
        <form
          id="register-form"
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
            form="register-form"
            className="w-full rounded-xl bg-white text-black dark:bg-black dark:text-white"
            disabled={isPending}
          >
            Register
          </Button>
        </CardFooter>
      </Form>
    </Card>
  );
}
