/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { TNotifications, notificationsSchema } from "../dto/add-notifications";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAddNotifications } from "../hooks/useAddNotifications";
import { toast } from "react-toastify";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import AddNotificationsFields from "./inputs-data/add-notifications";
import ValidationInput from "@/components/ui/inputs/ValidationInput";
import ValidationSelectTag from "@/components/ui/inputs/ValidationSelectTag";

import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import getErrorMessage from "@/utils/getAxiosErrorMessage";

const notificationsType = ["PROVIDER_REQUEST", "BOOKING", "PAYMENT", "SYSTEM"];

const AddNotificationForm = ({ userId }: { userId: string }) => {
  const form = useForm<TNotifications>({
    resolver: zodResolver(notificationsSchema as any),
    defaultValues: {
      title: "",
      message: "",
      type: "BOOKING",
    },
    mode: "onChange",
  });
  const { mutate: handleAddNotification, isPending } = useAddNotifications();
  const handleSubmit = (data: TNotifications) => {
    console.log("the data is : ", data);
    handleAddNotification(
      { userId, dto: data },
      {
        onSuccess: () => {
          toast.success("Notification added successfully");
          form.reset();
        },
        onError: (error) => {
          const errorMessage = getErrorMessage(error);
          toast.error(errorMessage);
        },
      },
    );
  };
  return (
    <Card>
      <CardHeader>Add Notification</CardHeader>
      <CardDescription>
        Filled the form to add a new notification
      </CardDescription>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-4">
          <CardContent>
            {AddNotificationsFields.map(
              ({ name, title, placeholder, icon }) => (
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
                  />
                </div>
              ),
            )}
            <ValidationSelectTag<TNotifications>
              fieldTitle="Select type"
              nameInSchema="type"
              data={notificationsType.map((type) => ({
                id: type,
                description: type,
              }))}
              className="h-10 rounded-xl"
            />
          </CardContent>
          <CardFooter>
            <Button type="submit" disabled={isPending} className="w-full">
              Add
            </Button>
          </CardFooter>
        </form>
      </Form>
    </Card>
  );
};

export default AddNotificationForm;
