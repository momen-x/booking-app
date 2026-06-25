import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import resUserAPI from "../repo/resUser";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";
import { USERS_KEY } from "./useGetAllUsers";

export const useDeleteUser = (
  id?: string,
): UseMutationResult<void, Error, void> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => {
      if (!id) {
        return Promise.reject(
          new Error("Provider ID is required for deletion"),
        );
      }
      return resUserAPI.deleteUser(id);
    },
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY,USERS_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
