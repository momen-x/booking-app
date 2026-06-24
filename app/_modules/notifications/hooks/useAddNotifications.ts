import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { Notifications } from "../entity/notifications";
import { TNotifications } from "../dto/add-notifications";
import { resNotifications } from "../repo/resNotifications";
import { NOTIFICATIONS_KEY } from "@/utils/constance";

export const useAddNotifications = (): UseMutationResult<
  Notifications,
  Error,
  { userId: string; dto: TNotifications }
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ userId, dto }) => resNotifications.add(userId, dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [NOTIFICATIONS_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
