import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Notifications } from "../entity/notifications";
import { resNotifications } from "../repo/resNotifications";
import { NOTIFICATIONS_KEY } from "@/utils/constance";

export const useUpdateNotificationsRead = (): UseMutationResult<
  Notifications,
  Error
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resNotifications.update,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [NOTIFICATIONS_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
