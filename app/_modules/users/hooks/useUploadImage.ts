import {
  useMutation,
  UseMutationResult,
  useQueryClient,
} from "@tanstack/react-query";
import { User } from "../entity/user";
import { TUploadUserImage } from "../dto/update-userprofile";
import resUserAPI from "../repo/resUser";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";

export const useUploadImage = (): UseMutationResult<
  User,
  Error,
  TUploadUserImage
> => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: resUserAPI.uploadImage,
    onSuccess: () => {
      console.log("success");
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
    onError: () => {
      queryClient.invalidateQueries({ queryKey: [CURRENT_USER_QUERY_KEY] });
    },
  });
};
