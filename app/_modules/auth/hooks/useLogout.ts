import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { resAuth } from "../repo/resAuth";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";

export const useLogout = (): UseMutationResult<{ success: boolean }, Error> => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: resAuth.logout,
    onSuccess: () => {
      queryClient.setQueryData([CURRENT_USER_QUERY_KEY], null);
    },
    onError: (error) => {
      console.error("Error response:", error); // Check error details
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
  });
};
