import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { LoginData } from "../_dto/login-validation";
import { resAuth } from "../repo/resAuth";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";

export const useLogin = (): UseMutationResult<
  { success: boolean },
  Error,
  LoginData
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resAuth.login,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};
