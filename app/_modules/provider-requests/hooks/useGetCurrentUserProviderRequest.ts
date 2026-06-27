import { useQuery } from "@tanstack/react-query";
import { resProviderRequest } from "../repo/resProviderRequest";
import { PROVIDER_REQUEST_KEY } from "./useGetProvidersRequest";

export const useGetCurrentUserProviderRequest = () => {
  return useQuery({
    queryKey: [PROVIDER_REQUEST_KEY],
    queryFn: resProviderRequest.getCurrentUserRequests,
  });
};
