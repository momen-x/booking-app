import { useQuery } from "@tanstack/react-query";
import { resProviderRequest } from "../repo/resProviderRequest";

export const useGetCurrentUserProviderRequest = () => {
  return useQuery({
    queryKey: ["current-provider-request"],
    queryFn: resProviderRequest.getCurrentUserRequests,
  });
};
