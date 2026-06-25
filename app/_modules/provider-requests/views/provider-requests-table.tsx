"use client";
import { Card } from "@/components/ui/card";
import ProviderRequestCard from "./request";
import Loading from "@/app/loading";
import { useGetProviderRequest } from "../hooks/useGetProvidersRequest";

const ProviderRequest = () => {
  const { data: providerRequests, isLoading } = useGetProviderRequest();
  if (isLoading) return <Loading />;
  if (!providerRequests)
    return (
      <div className="text-center text-2xl font-bold">no provider requests</div>
    );
  const pendingRequests = providerRequests.filter(
    (provider) => provider.status === "PENDING",
  );

  if (!pendingRequests.length) {
    return <div>no provider requests</div>;
  }

  return (
    <div>
      {pendingRequests.map((provider) => (
        <div key={provider.id}>
          <Card className="p-5 m-5">
            <ProviderRequestCard {...provider} />
          </Card>
        </div>
      ))}
    </div>
  );
};

export default ProviderRequest;
