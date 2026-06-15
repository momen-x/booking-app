/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Form } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { useRouter, useSearchParams } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "react-toastify";
import { useAddProvider } from "../hooks/useAddProvider";
import { createProviderSchema, TCreateProvider } from "../dto/add-provider";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import fields from "./fields-inputs/add-provider"
import ValidationInput from "@/components/ui/inputs/ValidationInput";

const AddProviderForm = () => {
  const params = useSearchParams();
  const userId = params.get("userId") ?? "";
  const businessName = params.get("businessName") ?? "";
  const location = params.get("location") ?? "";

  const router = useRouter();
  const { mutate: handleCreateProvider, isPending } = useAddProvider();

  const form = useForm<TCreateProvider>({
    resolver: zodResolver(createProviderSchema as any),
    mode: "onChange",
    defaultValues: {
      userId,
      businessName,
      description: "", // optional — always starts empty
      location,
    },
  });

  const handleSubmit = (data: TCreateProvider) => {
    handleCreateProvider(data, {
      onSuccess: () => {
        toast.success("Provider added successfully");
        form.reset({
          userId: "",
          businessName: "",
          description: "",
          location: "",
        });
        router.push("/admin-dashboard/providers/add");
      },
      onError: (error) => {
        toast.error(getErrorMessage(error) || "Error adding provider");
      },
    });
  };

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          {fields.map(({ name, title, placeholder, icon, required }) => (
            <div key={name} className="space-y-1.5">
              <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                <span className="text-muted-foreground">{icon}</span>
                {title}
                {!required && (
                  <span className="ml-auto text-xs text-muted-foreground font-normal">
                    Optional
                  </span>
                )}
              </div>
              <ValidationInput<TCreateProvider>
                fieldTitle=""
                nameInSchema={name}
                placeholder={placeholder}
                className="h-10 rounded-xl"
                required={required ?? false}
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
              disabled={isPending || !form.formState.isValid}
            >
              {isPending ? (
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              ) : (
                "Add Provider"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default AddProviderForm;
