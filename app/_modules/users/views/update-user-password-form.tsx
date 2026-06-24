/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { toast } from "react-toastify";
import { TUpdateUserPassword, updateUserPassword } from "../dto/admin/update-user-password";
import { useUpdateUserPassword } from "../hooks/useUpdateUserPassword";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import updateUserPasswordByAdminFields from "./inputs/update-user-password-by-admin";
import ValidationInput from "@/components/ui/inputs/ValidationInput";

const UpdateUserPasswordForm = ({ email }: { email?: string }) => {
  const router = useRouter();
  const form = useForm<TUpdateUserPassword>({
    resolver: zodResolver(updateUserPassword as any),
    mode: "onChange",
    defaultValues: {
      email: email ?? "",
      password: "",
    },
  });
  const { mutate: handleUpdateUserPassword, isPending } =
    useUpdateUserPassword();
  const handleSubmit = (data: TUpdateUserPassword) => {
    handleUpdateUserPassword(data, {
      onSuccess: () => {
        toast.success("the password update successfully");
        form.reset();
      },
      onError: (error) => {
        const errorMessage = getErrorMessage(error);
        toast.error(errorMessage || "Error updating password");
      },
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          {updateUserPasswordByAdminFields.map(({ name, title, placeholder, icon }) => (
            <div key={name} className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="text-muted-foreground">{icon}</span>
                {title}
              </div>
              <ValidationInput<TUpdateUserPassword>
                fieldTitle=""
                nameInSchema={name}
                placeholder={placeholder}
                className="h-10 rounded-xl"
              />
            </div>
          ))}
          <div className="flex gap-2 pt-1">
            <Button
              type="button"
              variant="outline"
              className="flex-1 h-10 rounded-xl"
              onClick={() => router.back()}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="flex-1 h-10 rounded-xl"
              disabled={isPending}
            >
              {isPending ? "Loading…" : "Save Changes"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default UpdateUserPasswordForm;
