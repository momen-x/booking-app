import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { TUpdateUserPassword } from "../dto/admin/update-user-password";
import resUser from "../repo/resUser";
import { User } from "../entity/user";


export const useUpdateUserPassword = (): UseMutationResult<
  User,
  Error,
  TUpdateUserPassword
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resUser.updatePasswordByAdmin,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["users"] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
