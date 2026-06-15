import { useQuery } from "@tanstack/react-query";
import { User } from "../entity/user";
import { CURRENT_USER_QUERY_KEY } from "@/utils/constance";
import resUserAPI from "../repo/resUser";

export const useGetCurrentUser = () => {
  return useQuery<User | null, Error>({
    queryKey: [CURRENT_USER_QUERY_KEY],
    queryFn: resUserAPI.getCurrentUser,
    retry: false,
    refetchOnMount: false,
  });
};
