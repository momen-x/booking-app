/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ValidationInput from "@/components/ui/inputs/ValidationInput";
import {
  TUpdateUsername,
  updateUsername,
} from "../dto/admin/update-user-username";
import { useUpdateUserUsername } from "../hooks/useUpdateUserUsername";
import { toast } from "react-toastify";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import { useSearchParams } from "next/navigation";
import { User } from "lucide-react";

const UpdateUsernameForm = ({
  id,
  username,
}: {
  id: string;
  username?: string;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const form = useForm<TUpdateUsername>({
    resolver: zodResolver(updateUsername as any),
    mode: "onChange",
    defaultValues: {
      username: username ?? "",
    },
  });
  const { mutate: handleUpdateUsername, isPending } = useUpdateUserUsername(id);
  const handleSubmit = (data: TUpdateUsername) => {
    handleUpdateUsername(data, {
      onSuccess: () => {
        toast.success("Username updated successfully");
        const params = new URLSearchParams(searchParams.toString());
        params.set("username", data.username);
        router.replace(
          `/admin-dashboard/users/${id}/update?${params.toString()}`,
        );

        form.reset({ username: data.username });
      },
      onError: (error) => {
        toast.error(getErrorMessage(error) || "Error updating username");
      },
    });
  };
  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <div className="flex items-center gap-2 text-sm font-medium text-foreground">
            <span className="text-muted-foreground">
              <User />
            </span>
            {"update user name"}
          </div>
          <ValidationInput<TUpdateUsername>
            fieldTitle=""
            nameInSchema={"username"}
            placeholder={"enter the user name"}
            className="h-10 rounded-xl"
          />

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

export default UpdateUsernameForm;
