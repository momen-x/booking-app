"use client";

import Loading from "@/app/loading";
import { useGetProviderServices } from "../../services/hooks/useGetProviderServices";
import ServiceList from "../../services/views/services-list";

const ProviderServicesList = () => {
  const { data: services, isLoading } = useGetProviderServices();
  if (isLoading) return <Loading />;
  if (!services)
    return (
      <div className="text-center text-2xl font-bold text-muted-foreground">
        No services found
      </div>
    );
  return (
    <div>
      {" "}
      <ServiceList services={services} />
    </div>
  );
};

export default ProviderServicesList;
