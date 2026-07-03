import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import resUser from "../repo/resUser";
import { User } from "../entity/user";
import { USERS_KEY } from "./useGetAllUsers";

export const useUpdateUserUsername = (
  userId: string,
): UseMutationResult<User, Error, { username: string }> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ username }) =>
      resUser.updateUsernameByAdmin(userId, username),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [USERS_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
