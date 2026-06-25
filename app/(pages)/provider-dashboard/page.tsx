import ProviderDashboardView from "@/app/_modules/provider-dashboard/views/provider-dashboard";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Provider Dashboard",
  description: "the best booking app",
};
export const dynamic = "force-dynamic";

const ProviderDashboardPage = async () => {
  return (
    <div>
      <ProviderDashboardView />
    </div>
  );
};

export default ProviderDashboardPage;
