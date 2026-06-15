import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { RegisterDataAPI } from '../_dto/register-validation';
import { resAuth } from "../repo/resAuth";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";

export const useRegister = (): UseMutationResult<
  { success: boolean },
  Error,
  RegisterDataAPI
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resAuth.register,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
    onError: (error) => {
      console.error("Error response:", error);
    },
  });
};

