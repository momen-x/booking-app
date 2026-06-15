import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { resProvider } from "../repo/resProvider";
import { Provider } from "../entity/provider";

export const PROVIDERS_KEY = "providers";

export const useGetAllProviders = (): UseQueryResult<
  Provider[] | null,
  Error
> => {
  return useQuery({
    queryKey: [PROVIDERS_KEY],
    queryFn: resProvider.getAll,
    retry: false,
    staleTime: 60 * 1000 * 5, // 5 minutes
  });
};
