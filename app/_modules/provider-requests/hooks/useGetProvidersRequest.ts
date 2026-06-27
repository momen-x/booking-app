import { useQuery } from "@tanstack/react-query";
import { resProviderRequest } from "../repo/resProviderRequest";
export const PROVIDER_REQUEST_KEY = "provider-request";

export const useGetProviderRequest = () => {
  return useQuery({
    queryKey: [PROVIDER_REQUEST_KEY],
    queryFn: resProviderRequest.getAll,
  });
};
//test
