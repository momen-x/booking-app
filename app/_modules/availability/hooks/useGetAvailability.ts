import { useQuery } from "@tanstack/react-query";
import { resAvailability } from "../repo/resAvailability";

export const AVAILABILITY_KEY = "availability";

export const useGetAvailability = () => {
  return useQuery({
    queryKey: [AVAILABILITY_KEY],
    queryFn: resAvailability.getAll,
  });
};
