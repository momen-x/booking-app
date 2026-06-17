import {
  useMutation,
  UseMutationResult,
} from "@tanstack/react-query";
import { TProviderRequest } from "../dto/provider-request";
import resProvider from "../repo/resProvider";

export const useAddRequestProvider = (): UseMutationResult<
  { success: boolean },
  Error,
  TProviderRequest
> => {
  return useMutation({
    mutationFn: resProvider.requestProvider,
    onSuccess: () => {
      console.log("success");
    },
    onError: () => {
      console.error("error");
    },
  });
};
