"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "../users/hooks/useGetCurrentUser";

type Props = {
  children: ReactNode;
};

const AuthGuard = ({ children }: Props) => {
  const { data: user, isLoading } = useGetCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading && !user) {
      router.replace("/login"); // better UX than /forbidden
    }
  }, [isLoading, user, router]);

  // if (isLoading) return <p>Loading...</p>;

  if (!user) return null;

  return <>{children}</>;
};

export default AuthGuard;
