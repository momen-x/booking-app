import { useQuery } from "@tanstack/react-query";
import { Service } from "../entity/service";
import { resService } from "../repo/resService";

export const SERVICES_KEY = "services";
export const useGetServices = () => {
  return useQuery<Service[] | null, Error>({
    queryKey: [SERVICES_KEY],
    queryFn: resService.getAllServices,
    retry: false,
    staleTime: 1000 * 60 * 10, // 10 minutes
  });
};
