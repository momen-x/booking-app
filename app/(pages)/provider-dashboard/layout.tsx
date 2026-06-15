import ProviderDashboard from "@/app/_modules/providers/views/provider-dashboard";
import React from "react";

const ProviderLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      {/* <RoleGuard allowedRoles={["PROVIDER"]}> */}
      <ProviderDashboard>{children}</ProviderDashboard>
      {/* </RoleGuard> */}
    </>
  );
};

export default ProviderLayout;
