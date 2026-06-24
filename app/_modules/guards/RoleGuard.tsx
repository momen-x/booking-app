// components/guards/RoleGuard.tsx
"use client";

import { ReactNode, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetCurrentUser } from "../users/hooks/useGetCurrentUser";

type Role = "" | "USER" | "ADMIN" | "PROVIDER";

type Props = {
  children: ReactNode;
  allowedRoles: Role[];
};

const RoleGuard = ({ children, allowedRoles }: Props) => {
  const { data: user, isLoading } = useGetCurrentUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (!user) {
        router.replace("/login");
      } else if (!allowedRoles.includes(user.role as unknown as Role)) {
        router.replace("/");
      }
    }
  }, [isLoading, user, router, allowedRoles]);

  if (isLoading) return null;

  if (!user || !allowedRoles.includes(user.role as unknown as Role))
    return null;

  return <>{children}</>;
};

export default RoleGuard;
