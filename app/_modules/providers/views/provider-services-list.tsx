import ServiceList from "../../services/views/services-list";
import { DYNAMIC_PAGE_API_URL } from "@/utils/constance";

const ProviderServicesList = async ({ providerId }: { providerId: string }) => {
  const response = await fetch(
    `${DYNAMIC_PAGE_API_URL}/api/services/provider/${providerId}`,
  );
  // const { data: services, isLoading } = useGetProviderServices();
  if (!response.ok)
    return (
      <div className="text-center text-2xl font-bold text-muted-foreground">
        Some thing went wrong{" "}
      </div>
    );
  const services = await response.json();

  return (
    <div>
      {" "}
      <ServiceList services={services} />
    </div>
  );
};

export default ProviderServicesList;
