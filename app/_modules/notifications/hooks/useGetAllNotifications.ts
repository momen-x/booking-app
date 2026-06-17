import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { resNotifications } from "../repo/resNotifications";
import { Notifications } from "../entity/notifications";

export const NOTIFICATIONS_KEY = "notifications";

export const useGetAllNotifications = (): UseQueryResult<
  Notifications[] | null,
  Error
> => {
  return useQuery({
    queryKey: [NOTIFICATIONS_KEY],
    queryFn: resNotifications.get,
    retry: false,
    staleTime: 60 * 1000 * 5, // 5 minutes
  });
};
