import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import resUserAPI from "../repo/resUser";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";
import { User } from "../entity/user";


export const useDeleteUserImage = (): UseMutationResult<User, Error> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resUserAPI.deleteUserImage,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
  });
};
