// components/BecomeProviderBtn.tsx
"use client";

import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "../_modules/users/hooks/useGetCurrentUser";
import { Button } from "@/components/ui/button";
import { CirclePlus } from "lucide-react";
import { useGetCurrentUserProviderRequest } from "../_modules/provider-requests/hooks/useGetCurrentUserProviderRequest";

const BecomeProviderBtn = () => {
  const router = useRouter();
  const { data: user, isLoading } = useGetCurrentUser();
  const { data: providerRequests, isLoading: isLoadingProviderRequest } =
    useGetCurrentUserProviderRequest();

  if (isLoading || isLoadingProviderRequest) return null;
  if (!user) return null;
  return (
    <>
      {user.role === "USER" && providerRequests?.length === 0 && (
        <div className="fixed left-8 top-1/2 -translate-y-1/2 z-50">
          <Button
            className="px-4 py-2 text-sm font-medium shadow-md hover:shadow-lg transition-all duration-200 bg-primary hover:bg-primary/90 cursor-pointer"
            onClick={() => router.push("/provider-request")}
          >
            Become Provider <CirclePlus className="ml-1.5 h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
};

export default BecomeProviderBtn;
