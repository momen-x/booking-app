"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "../users/hooks/useGetCurrentUser";

type Props = {
  children: ReactNode;
  redirectTo?: string; // optional (default: "/")
};

const GuestGuard = ({ children, redirectTo = "/" }: Props) => {
  const { data: user, isLoading } = useGetCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && user) {
      router.replace(redirectTo);
    }
  }, [isLoading, user, router, redirectTo]);

  if (user) return null;

  return <>{children}</>;
};

export default GuestGuard;