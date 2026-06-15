import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { resProvider } from "../repo/resProvider";
import { Provider } from "../entity/provider";

export const PROVIDERS_KEY = "providers";

export const useGetSingleProvider = (id: string): UseQueryResult<
  Provider | null,
  Error
> => {
  return useQuery({
    queryKey: [PROVIDERS_KEY, id],
    queryFn: () => resProvider.getById(id),
    retry: false,
    staleTime: 60 * 1000 * 5, // 5 minutes
  });
};



