"use client";

import { useGetProviderServices } from "@/app/_modules/services/hooks/useGetProviderServices";
import ServicesTable from "@/app/_modules/services/views/services-displaying";

const ServicePage = () => {
  const { data: services, isLoading } = useGetProviderServices();

  return (
    <div>
      <ServicesTable isLoading={isLoading} services={services ?? []} />
    </div>
  );
};

export default ServicePage;
