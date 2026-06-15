import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { User } from "../entity/user";
import { TUpdatePassword } from "../dto/update-userprofile";
import resUserAPI from "../repo/resUser";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";


export const useUpdatePassword = (): UseMutationResult<
  User,
  Error,
  TUpdatePassword
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resUserAPI.updatePassword,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
  });
};
