import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import resUserAPI from "../repo/resUser";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";
import { User } from "../entity/user";
import { USERS_KEY } from "./useGetAllUsers";


export const useDeleteUserImage = (): UseMutationResult<User, Error> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resUserAPI.deleteUserImage,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY,USERS_KEY] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY, USERS_KEY] });
    },
  });
};
