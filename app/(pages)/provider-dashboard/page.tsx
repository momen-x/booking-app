import ProviderDashboardView from "@/app/_modules/provider-dashboard/views/provider-dashboard";
import React from "react";
export const dynamic = "force-dynamic";

const ProviderDashboardPage = async () => {
  return (
    <div>
      <ProviderDashboardView />
    </div>
  );
};

export default ProviderDashboardPage;
