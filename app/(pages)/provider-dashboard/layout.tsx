import RoleGuard from "@/app/_modules/guards/RoleGuard";
import ProviderDashboard from "@/app/_modules/providers/views/provider-dashboard";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Provider page",
  description: "the best booking app",
};

const ProviderLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <RoleGuard allowedRoles={["PROVIDER"]}>
        <ProviderDashboard>{children}</ProviderDashboard>
      </RoleGuard>
    </>
  );
};

export default ProviderLayout;
