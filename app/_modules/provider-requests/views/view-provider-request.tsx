"use client";
import AddNotificationForm from "@/app/_modules/notifications/views/add-notification-form";
import AddProviderForm from "@/app/_modules/providers/views/add-provider-form";
import { CheckCircle, XCircle, User, MapPin, Building2 } from "lucide-react";
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { useDeleteProviderRequest } from "../hooks/useDeleteProviderRequest";
import { toast } from "react-toastify";
import getErrorMessage from "@/utils/getAxiosErrorMessage";

// interface PageProps {
//   searchParams:
//     | Promise<{ [key: string]: string | string[] | undefined }>
//     | { [key: string]: string | string[] | undefined };
// }

const ReviewProviderRequest = () => {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId") ?? "";
  const name = searchParams.get("name") ?? "";
  const location = searchParams.get("location") ?? "";
  const params = useParams();
  const id = (params.id as string) ?? "";
  const { mutate: handleDeleteProviderRequest } = useDeleteProviderRequest(id);
  const router = useRouter();
  const handleDelete = () => {
    if (!id || typeof id !== "string") return;
    handleDeleteProviderRequest(undefined, {
      onSuccess: () => {
        toast.success("Provider request deleted successfully");
        // router.refresh();
        router.push("/admin-dashboard/providers/requests");
      },
      onError: (error) => {
        const errMessage = getErrorMessage(error);
        toast.error(errMessage ?? "Error deleting provider request");
      },
    });
  };


  if (!userId || !name || !id) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <div className=" p-8 rounded-2xl shadow-sm border border-red-200 dark:border-red-800">
          <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400">
            Incomplete Data
          </h2>
          <p className="text-muted-foreground mt-2">
            Please provide all required information to review this request.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-linear-to-br from-zinc-50 via-white to-zinc-50 dark:from-black dark:via-zinc-950 dark:to-black p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="h-1 w-12 bg-linear-to-r from-blue-500 to-purple-500 rounded-full" />
            <span className="text-sm font-medium text-muted-foreground">
              Provider Request Review
            </span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight bg-linear-to-r from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
            Review Provider Request
          </h1>
          <p className="text-muted-foreground mt-2">
            Review the provider details and take action
          </p>
        </div>

        <div className=" rounded-2xl border shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-blue-50 dark:bg-blue-950/50 rounded-xl">
                <Building2 className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Business Name</p>
                <p className="font-semibold text-lg">{name}</p>
              </div>
            </div>

            {location && (
              <div className="flex items-center gap-3">
                <div className="p-2.5 bg-emerald-50 dark:bg-emerald-950/50 rounded-xl">
                  <MapPin className="h-5 w-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Location</p>
                  <p className="font-semibold text-lg">{location}</p>
                </div>
              </div>
            )}

            <div className="flex items-center gap-3">
              <div className="p-2.5 bg-purple-50 dark:bg-purple-950/50 rounded-xl">
                <User className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">User ID</p>
                <p className="font-mono text-sm text-muted-foreground">
                  {userId.slice(0, 8)}...{userId.slice(-4)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 sm:grid-cols-1 md:grid-cols-1 gap-6">
          <div className="  rounded-2xl  border-2! border-green-200! dark:border-green-800! shadow-lg shadow-green-100/20 dark:shadow-green-900/20 overflow-hidden">
            <div className="px-6 py-4 bg-linear-to-r from-green-100! to-emerald-50! dark:from-green-950/30! dark:to-emerald-950/30! border-b border-green-800! dark:border-green-800!">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/50 rounded-lg">
                  <CheckCircle className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-green-700 dark:text-green-300">
                    Confirm Provider
                  </h2>
                  <p className="text-sm text-green-600/70 dark:text-green-400/70">
                    Approve and add this provider
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <AddProviderForm
                userId={userId}
                businessName={name}
                location={location}
              />
            </div>
          </div>

          {/* Reject Form - Red Theme */}
          <div className=" rounded-2xl border-2 border-red-200 dark:border-red-800 shadow-lg shadow-red-100/20 dark:shadow-red-900/20 overflow-hidden">
            <div className="px-6 py-4 bg-linear-to-r from-red-50 to-rose-50 dark:from-red-950/30 dark:to-rose-950/30 border-b border-red-200 dark:border-red-800">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-red-100 dark:bg-red-900/50 rounded-lg">
                  <XCircle className="h-6 w-6 text-red-600 dark:text-red-400" />
                </div>
                <div>
                  <h2 className="text-lg font-semibold text-red-700 dark:text-red-300">
                    Reject Provider
                  </h2>
                  <p className="text-sm text-red-600/70 dark:text-red-400/70">
                    Send rejection notification
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <AddNotificationForm userId={userId} handleFun={handleDelete} />
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground">
            Choose an action to proceed with this provider request
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReviewProviderRequest;
