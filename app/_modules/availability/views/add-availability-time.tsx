/* eslint-disable react-hooks/incompatible-library */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { ArrowLeft, CalendarDays, Clock, Save, Plus } from "lucide-react";

import { useCreateAvailability } from "../hooks/useCreateAvailability";
import { useUpdateAvailability } from "../hooks/useUpdateAvailability";
import getErrorMessage from "@/utils/getAxiosErrorMessage";
import {
  createAvailabilitySchema,
  TCreateAvailability,
} from "../dto/create-available";

const DAYS = [
  { value: "0", label: "Sunday" },
  { value: "1", label: "Monday" },
  { value: "2", label: "Tuesday" },
  { value: "3", label: "Wednesday" },
  { value: "4", label: "Thursday" },
  { value: "5", label: "Friday" },
  { value: "6", label: "Saturday" },
];

interface AddAvailabilityTimeProps {
  mode: "add" | "update";
  availabilityId?: string;
  defaultValues?: {
    dayOfWeek: number;
    startTime: string;
    endTime: string;
  };
}

const AddAvailabilityTime = ({
  mode = "add",
  availabilityId,
  defaultValues,
}: AddAvailabilityTimeProps) => {
  const router = useRouter();
  const { mutate: createAvailability, isPending: isCreating } =
    useCreateAvailability();
  const { mutate: updateAvailability, isPending: isUpdating } =
    useUpdateAvailability();

  const isPending = isCreating || isUpdating;

  const form = useForm<TCreateAvailability>({
    resolver: zodResolver(createAvailabilitySchema as any),
    mode: "onChange",
    defaultValues: {
      dayOfWeek: defaultValues?.dayOfWeek ?? undefined,
      startTime: defaultValues?.startTime ?? "",
      endTime: defaultValues?.endTime ?? "",
    },
  });

  const handleSubmit = (data: TCreateAvailability) => {
    if (mode === "add") {
      createAvailability(data, {
        onSuccess: () => {
          toast.success("Availability added successfully!");
          form.reset();
        },
        onError: (error) => {
          toast.error(getErrorMessage(error) || "Failed to add availability");
        },
      });
    } else {
      // Update mode
      if (!availabilityId) {
        toast.error("Availability ID is required for update");
        return;
      }
      updateAvailability(
        { id: availabilityId, dto: data },
        {
          onSuccess: () => {
            toast.success("Availability updated successfully!");
            router.back();
          },
          onError: (error) => {
            toast.error(
              getErrorMessage(error) || "Failed to update availability",
            );
          },
        },
      );
    }
  };

  const startTime = form.watch("startTime");
  const currentDayOfWeek = form.watch("dayOfWeek");

  return (
    <div className="min-h-screen flex items-start justify-center pt-12 px-4">
      <div className="w-full max-w-sm space-y-5">
        {/* Back */}
        <button
          type="button"
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        {/* Title */}
        <div>
          <h1 className="text-xl font-semibold text-foreground">
            {mode === "add" ? "Add Availability" : "Update Availability"}
          </h1>
          <p className="text-sm text-muted-foreground mt-0.5">
            {mode === "add"
              ? "Set the day and hours you are available for bookings"
              : "Update the day and hours for this availability slot"}
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-2xl border border-border/50 bg-card p-5">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className="space-y-5"
            >
              {/* Day */}
              <FormField
                control={form.control}
                name="dayOfWeek"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="flex items-center gap-2 text-sm font-medium text-foreground">
                      <CalendarDays className="h-4 w-4 text-muted-foreground" />
                      Day of Week
                    </FormLabel>
                    <Select
                      value={field.value?.toString() ?? undefined}
                      onValueChange={(val: any) => field.onChange(Number(val))}
                    >
                      <FormControl>
                        <SelectTrigger className="h-10 rounded-xl">
                          <SelectValue placeholder="Select a day" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {DAYS.map((d) => (
                          <SelectItem key={d.value} value={d.value}>
                            {d.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Start & End Time */}
              <div className="grid grid-cols-2 gap-3">
                <FormField
                  control={form.control}
                  name="startTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        Start Time
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="h-10 rounded-xl"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="endTime"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="flex items-center gap-2 text-sm font-medium text-foreground">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        End Time
                      </FormLabel>
                      <FormControl>
                        <Input
                          type="time"
                          className="h-10 rounded-xl"
                          min={startTime || undefined}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Preview */}
              {currentDayOfWeek !== undefined &&
                startTime &&
                form.watch("endTime") &&
                !form.formState.errors.endTime && (
                  <div className="rounded-xl bg-muted/50 border border-border/40 px-4 py-3 text-sm text-muted-foreground">
                    📅{" "}
                    <span className="font-medium text-foreground">
                      {
                        DAYS.find(
                          (d) => d.value === currentDayOfWeek?.toString(),
                        )?.label
                      }
                    </span>{" "}
                    from{" "}
                    <span className="font-medium text-foreground">
                      {startTime}
                    </span>{" "}
                    to{" "}
                    <span className="font-medium text-foreground">
                      {form.watch("endTime")}
                    </span>
                  </div>
                )}

              {/* Actions */}
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
                  disabled={isPending || !form.formState.isValid}
                  className="flex-1 h-10 rounded-xl gap-2"
                >
                  {isPending ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                  ) : (
                    <>
                      {mode === "add" ? (
                        <Plus className="h-4 w-4" />
                      ) : (
                        <Save className="h-4 w-4" />
                      )}
                      {mode === "add" ? "Add Slot" : "Update Slot"}
                    </>
                  )}
                </Button>
              </div>
            </form>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AddAvailabilityTime;
