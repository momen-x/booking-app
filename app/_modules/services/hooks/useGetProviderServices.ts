import { useQuery } from "@tanstack/react-query";
import { Service } from "../entity/service";
import { resService } from "../repo/resService";

export const SERVICES_KEY = "services";
export const useGetProviderServices = () => {
  return useQuery<Service[] | null, Error>({
    queryKey: [SERVICES_KEY, "provider-services"],
    queryFn: resService.getServicesByProvider,
    retry: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
