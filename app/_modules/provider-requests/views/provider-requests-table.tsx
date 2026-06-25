"use client";
import { Card } from "@/components/ui/card";
import ProviderRequestCard from "./request";
import Loading from "@/app/loading";
import { useGetProviderRequest } from "../hooks/useGetProvidersRequest";

const ProviderRequest = () => {
  const { data: providerRequests, isLoading } = useGetProviderRequest();
  if (isLoading) return <Loading />;
  if (!providerRequests || providerRequests.length === 0) {
    return <div> no provider requests</div>;
  }
  return (
    <div>
      {providerRequests.map((provider) => (
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
