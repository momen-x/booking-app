import ProviderRequest from "@/app/_modules/provider-requests/views/provider-requests-table";
import { Metadata } from "next";
export const dynamic = "force-dynamic";
export const metadata: Metadata = {
  title: "Provider Requests",
  description: "the best booking app",
};
const ProviderRequestsPage = () => {
  return (
    <div>
      <ProviderRequest />
    </div>
  );
};

export default ProviderRequestsPage;
